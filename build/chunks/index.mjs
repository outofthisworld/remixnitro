import { e as eventHandler, t as toWebRequest } from './nitro/vercel.mjs';
import { broadcastDevReady, createRequestHandler } from '@vercel/remix';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

let build = null;

async function importBuild() {
  if (build) {
    return build;
  }
  const dir = process.env.INIT_CWD ?? process.cwd();

  build = await import(`${dir}/remix/index.js`);

  await broadcastDevReady(build);
  return build;
}

/**
 * Serve remix.
 */
const index = eventHandler(async (event) => {
  return createRequestHandler(await importBuild())(toWebRequest(event), event.context);
});

export { index as default };
//# sourceMappingURL=index.mjs.map
