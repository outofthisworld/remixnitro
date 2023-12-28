import { toWebRequest, eventHandler } from "#imports";
import * as build from "../.build/remix-server-build/index.mjs";
import { ServerBuild, createRequestHandler } from "../../app/runtime.server";

export default eventHandler(async (event) => {
  return createRequestHandler(build as unknown as ServerBuild)(
    toWebRequest(event),
    event.context
  );
});
