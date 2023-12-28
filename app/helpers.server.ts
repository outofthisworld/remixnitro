import { createHash } from "etag-hash";
import { filterXSS } from "xss";

/**
 * Reads a response stream and generates an E-Tag and
 * validates E-Tags against incoming server requests.
 *
 * Can be used alongside the appropriate Cache-Control
 *
 * @param request
 * @param response
 * @param {chunkSizeMb: number}
 * @returns
 */
export const withETag = async (
  request: Request,
  response: Response,
  { chunkSizeMb }: { chunkSizeMb: number } = { chunkSizeMb: 5 }
) => {
  // Validate we have a request and response
  if (!(response instanceof Response) || !(request instanceof Request))
    return response;

  // Only handle etags for get requests
  if (request.method !== "GET") return response;

  // Make sure we have a response body to read
  if (!response.body) return response;

  // Create a hash with xMB chunk size
  const hash = createHash(chunkSizeMb);

  // Clone the response so we don't run into issues with shared streams
  const responseClone = response.clone();

  // Get the stream reader
  const reader = responseClone.body!.getReader();

  // Read the chunks
  let data;
  while ((data = await reader.read()) && !data.done) {
    hash.update(data.value);
  }

  // Create a E-Tag string
  const tag = `"${hash.digest()}"`;

  // Handle 304 Not Modified if it matches the generated tag
  if (request.headers.get("If-None-Match") === tag) {
    return new Response(null, { status: 304, statusText: "Not Modified" });
  }

  // Set the E-Tag on the response
  response.headers.set("ETag", tag);
  return response;
};

/**
 * Handle XSS protection and sanitize user input for XSS.
 * 
 * @param request 
 */
export const xssProtection = async (request: Request) => {
  const requestUrl = request.url;
  const requestQueryParams = JSON.stringify(
    new URLSearchParams(request.url).entries()
  );
  let requestBody = null;
  let filteredRequestBody = null;

  const xssProtectedUrl = filterXSS(requestUrl);
  const xssProtectedSearchParams = filterXSS(requestQueryParams);

  if (["POST", "PATCH", "PUT"].includes(request.method)) {
    requestBody = await request.json();
    filteredRequestBody = filterXSS(requestBody);
  }

  if (
    requestUrl.length !== xssProtectedUrl.length ||
    requestQueryParams.length !== xssProtectedSearchParams.length ||
    requestBody?.length !== filteredRequestBody?.length
  ) {
    throw new Error('An error occurred processing the request.')
  }
};

/**
 * Adds security headers
 *
 * @param response
 */
export const withSecurityHeaders = async (response: Response) => {
  // Custom powered by
  response.headers.set("X-Powered-By", "ProxyList");
  // No referer
  response.headers.set("Referrer-Policy", "no-referrer");
  // Always upgrade to https
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload"
  );
  // Stop mime type sniffing
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Download-Options", "noopen");
  // IFrame same origin
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("X-Permitted-Cross-Domain-Policies", "none");
  // Turn off any browser xss protection (insecure in and of itself. Unsupported by most browsers)
  response.headers.set("X-XSS-Protection", "0");
  // Attempt to have browser run page in own process
  response.headers.set("Origin-Agent-Cluster", "?1");
  response.headers.set("Cross-Origin-Resource-Policy", "same-origin");
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin");
  response.headers.set("Cross-Origin-Embedder-Policy", "require-corp");
  return response;
};