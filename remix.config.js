/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
  postcss: true,
  assetsBuildDirectory: "./public/web-build",
  serverBuildPath: "./nitro-server/.build/remix-server-build/index.js",
  publicPath: "/web-build/",
};
