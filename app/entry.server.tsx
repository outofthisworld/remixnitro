import { RemixServer } from "@remix-run/react";
import type { EntryContext, HandleDataRequestFunction } from "~/runtime.server";
import { handleRequest } from "~/runtime.server";
import { withETag, withSecurityHeaders, xssProtection } from "./helpers.server";

export default async function (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const remixServer = <RemixServer context={remixContext} url={request.url} />;

  const response = (await handleRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixServer
  )) as Response;

  return await withETag(request, response);
}

export let handleDataRequest: HandleDataRequestFunction = async (
  response: Response,
  { request }
) => {
  return withETag(request, response);
};
