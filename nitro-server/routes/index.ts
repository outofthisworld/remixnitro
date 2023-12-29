import { toWebRequest, eventHandler } from "#imports";
import { ServerBuild, createRequestHandler } from "@vercel/remix";

/**
 * Remix server build as entrypoint.
 */
import * as build from "../.build/remix-server-build/index";

/**
 * Serve remix.
 */
export default eventHandler(async (event) => {
  return createRequestHandler(build as unknown as ServerBuild)(
    toWebRequest(event),
    event.context
  );
});
