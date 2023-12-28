import * as security from './config/security';

//https://nitro.unjs.io/config
export default defineNitroConfig({
  preset: "vercel",
  output: {
    dir: ".build/nitro-server-build",
    serverDir: ".build/nitro-server-build/server",
    publicDir: "../public",
  },
  serveStatic: true,
  noPublicDir: true,
  buildDir: ".nitrodev",
  renderer: "routes/index.ts",
  runtimeConfig: {},
  appConfig: {
    security,
  },
  routeRules: {
    "/": {},
  },
});
