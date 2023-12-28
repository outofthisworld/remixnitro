import defu from "defu";

export default defineEventHandler((event) => {
  const routeRules = getRouteRules(event);
  const appConfig = useAppConfig(event);

  const { security } = appConfig;
  const { headers = {} } = defu(routeRules.security ?? {}, security ?? {});

  console.log("App Config:: ", appConfig);

  setHeader(event, "X-Nitro-Middleware", "1");
  // Custom powered by
  setHeader(event, "X-Powered-By", "ProxyList");
  // No referer
  setHeader(event, "Referrer-Policy", "no-referrer");
  // Always upgrade to https
  setHeader(
    event,
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload"
  );
  // Stop mime type sniffing
  setHeader(event, "X-Content-Type-Options", "nosniff");
  setHeader(event, "X-Download-Options", "noopen");
  // IFrame same origin
  setHeader(event, "X-Frame-Options", "SAMEORIGIN");
  setHeader(event, "X-Permitted-Cross-Domain-Policies", "none");
  // Turn off any browser xss protection (insecure in and of itself. Unsupported by most browsers)
  setHeader(event, "X-XSS-Protection", "0");
  // Attempt to have browser run page in own process
  setHeader(event, "Origin-Agent-Cluster", "?1");
  setHeader(event, "Cross-Origin-Resource-Policy", "same-origin");
  setHeader(event, "Cross-Origin-Opener-Policy", "same-origin");
  setHeader(event, "Cross-Origin-Embedder-Policy", "require-corp");
});
