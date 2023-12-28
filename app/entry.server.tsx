import { RemixServer } from "@remix-run/react";
import type { EntryContext, HandleDataRequestFunction } from "~/runtime.server";
import { handleRequest } from "~/runtime.server";

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

  return response;
}

export let handleDataRequest: HandleDataRequestFunction = async (
  response: Response,
  { request }
) => {
  return response;
};
