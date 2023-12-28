export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:response", (response, { event }) => {
    setResponseHeader(event, "X-Nitro-Plugin", "1");
  });
});
