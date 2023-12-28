globalThis._importMeta_={url:import.meta.url,env:process.env};import { Server } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { promises, mkdirSync } from 'node:fs';
import { parentPort, threadId } from 'node:worker_threads';
import { provider, isWindows } from 'file:///Users/imac/Desktop/DalesProjects/Playground/remixpractice/remixproxylistfinal/nitro-server/node_modules/.pnpm/std-env@3.7.0/node_modules/std-env/dist/index.mjs';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseStatus, setResponseHeader, send, removeResponseHeader, createError, getResponseHeader, setHeader, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler, toWebRequest } from 'file:///Users/imac/Desktop/DalesProjects/Playground/remixpractice/remixproxylistfinal/nitro-server/node_modules/.pnpm/h3@1.9.0/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file:///Users/imac/Desktop/DalesProjects/Playground/remixpractice/remixproxylistfinal/nitro-server/node_modules/.pnpm/ofetch@1.3.3/node_modules/ofetch/dist/node.mjs';
import destr from 'file:///Users/imac/Desktop/DalesProjects/Playground/remixpractice/remixproxylistfinal/nitro-server/node_modules/.pnpm/destr@2.0.2/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file:///Users/imac/Desktop/DalesProjects/Playground/remixpractice/remixproxylistfinal/nitro-server/node_modules/.pnpm/unenv@1.8.0/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///Users/imac/Desktop/DalesProjects/Playground/remixpractice/remixproxylistfinal/nitro-server/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file:///Users/imac/Desktop/DalesProjects/Playground/remixpractice/remixproxylistfinal/nitro-server/node_modules/.pnpm/scule@1.1.1/node_modules/scule/dist/index.mjs';
import { klona } from 'file:///Users/imac/Desktop/DalesProjects/Playground/remixpractice/remixproxylistfinal/nitro-server/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file:///Users/imac/Desktop/DalesProjects/Playground/remixpractice/remixproxylistfinal/nitro-server/node_modules/.pnpm/defu@6.1.3/node_modules/defu/dist/defu.mjs';
import { hash } from 'file:///Users/imac/Desktop/DalesProjects/Playground/remixpractice/remixproxylistfinal/nitro-server/node_modules/.pnpm/ohash@1.1.3/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, decodePath, withLeadingSlash, withoutTrailingSlash } from 'file:///Users/imac/Desktop/DalesProjects/Playground/remixpractice/remixproxylistfinal/nitro-server/node_modules/.pnpm/ufo@1.3.2/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///Users/imac/Desktop/DalesProjects/Playground/remixpractice/remixproxylistfinal/nitro-server/node_modules/.pnpm/unstorage@1.10.1/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/imac/Desktop/DalesProjects/Playground/remixpractice/remixproxylistfinal/nitro-server/node_modules/.pnpm/unstorage@1.10.1/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/imac/Desktop/DalesProjects/Playground/remixpractice/remixproxylistfinal/nitro-server/node_modules/.pnpm/radix3@1.1.0/node_modules/radix3/dist/index.mjs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file:///Users/imac/Desktop/DalesProjects/Playground/remixpractice/remixproxylistfinal/nitro-server/node_modules/.pnpm/pathe@1.1.1/node_modules/pathe/dist/index.mjs';
import { RemixServer, Meta, Links, Outlet, ScrollRestoration, Scripts, LiveReload, useLoaderData, useFetcher, Await, Link, Form } from 'file:///Users/imac/Desktop/DalesProjects/Playground/remixpractice/remixproxylistfinal/node_modules/.pnpm/@remix-run+react@2.0.0_react-dom@18.2.0_react@18.2.0_typescript@5.1.6/node_modules/@remix-run/react/dist/index.js';
import * as default2 from 'file:///Users/imac/Desktop/DalesProjects/Playground/remixpractice/remixproxylistfinal/node_modules/.pnpm/@vercel+remix@2.0.0_react-dom@18.2.0_react@18.2.0_typescript@5.1.6/node_modules/@vercel/remix/dist/index.js';
import default2__default, { createRequestHandler } from 'file:///Users/imac/Desktop/DalesProjects/Playground/remixpractice/remixproxylistfinal/node_modules/.pnpm/@vercel+remix@2.0.0_react-dom@18.2.0_react@18.2.0_typescript@5.1.6/node_modules/@vercel/remix/dist/index.js';
import { createHash } from 'file:///Users/imac/Desktop/DalesProjects/Playground/remixpractice/remixproxylistfinal/node_modules/.pnpm/etag-hash@1.1.3/node_modules/etag-hash/main/index.js';
import { jsxDEV, Fragment } from 'file:///Users/imac/Desktop/DalesProjects/Playground/remixpractice/remixproxylistfinal/node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js';
import { Analytics } from 'file:///Users/imac/Desktop/DalesProjects/Playground/remixpractice/remixproxylistfinal/node_modules/.pnpm/@vercel+analytics@1.0.2/node_modules/@vercel/analytics/dist/react/index.js';
import { Suspense, forwardRef, useMemo, createElement } from 'file:///Users/imac/Desktop/DalesProjects/Playground/remixpractice/remixproxylistfinal/node_modules/.pnpm/react@18.2.0/node_modules/react/index.js';

const inlineAppConfig = {
  "security": {
    "enabled": true,
    "headers": {
      "crossOriginResourcePolicy": "same-origin",
      "crossOriginOpenerPolicy": "same-origin",
      "crossOriginEmbedderPolicy": "require-corp",
      "contentSecurityPolicy": {
        "base-uri": [
          "'none'"
        ],
        "font-src": [
          "'self'",
          "https:",
          "data:"
        ],
        "form-action": [
          "'self'"
        ],
        "frame-ancestors": [
          "'self'"
        ],
        "img-src": [
          "'self'",
          "data:"
        ],
        "object-src": [
          "'none'"
        ],
        "script-src-attr": [
          "'none'"
        ],
        "style-src": [
          "'self'",
          "https:",
          "'unsafe-inline'"
        ],
        "script-src": [
          "'self'",
          "https:",
          "'unsafe-inline'",
          "'strict-dynamic'",
          "'nonce-{{nonce}}'"
        ],
        "upgrade-insecure-requests": true
      },
      "originAgentCluster": "?1",
      "referrerPolicy": "no-referrer",
      "strictTransportSecurity": {
        "maxAge": 15552000,
        "includeSubdomains": true
      },
      "xContentTypeOptions": "nosniff",
      "xDNSPrefetchControl": "off",
      "xDownloadOptions": "noopen",
      "xFrameOptions": "SAMEORIGIN",
      "xPermittedCrossDomainPolicies": "none",
      "xXSSProtection": "0",
      "permissionsPolicy": {
        "camera": [],
        "display-capture": [],
        "fullscreen": [],
        "geolocation": [],
        "microphone": []
      }
    },
    "rateLimiter": {
      "tokensPerInterval": 150,
      "interval": 300000,
      "headers": false,
      "driver": {
        "name": "lruCache"
      },
      "throwError": true
    },
    "requestSizeLimiter": {
      "maxRequestSizeInBytes": 2000000,
      "maxUploadFileRequestInBytes": 8000000,
      "throwError": true
    },
    "xssValidator": {
      "throwError": true
    }
  }
};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/"
  },
  "nitro": {
    "routeRules": {
      "/": {}
    }
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
const _sharedAppConfig = _deepFreeze(klona(appConfig));
function useAppConfig(event) {
  if (!event) {
    return _sharedAppConfig;
  }
  if (event.context.nitro.appConfig) {
    return event.context.nitro.appConfig;
  }
  const appConfig$1 = klona(appConfig);
  event.context.nitro.appConfig = appConfig$1;
  return appConfig$1;
}
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"/Users/imac/Desktop/DalesProjects/Playground/remixpractice/remixproxylistfinal/nitro-server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/imac/Desktop/DalesProjects/Playground/remixpractice/remixproxylistfinal/nitro-server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/imac/Desktop/DalesProjects/Playground/remixpractice/remixproxylistfinal/nitro-server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/imac/Desktop/DalesProjects/Playground/remixpractice/remixproxylistfinal/nitro-server/.nitrodev","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/imac/Desktop/DalesProjects/Playground/remixpractice/remixproxylistfinal/nitro-server/.nitrodev/cache","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/imac/Desktop/DalesProjects/Playground/remixpractice/remixproxylistfinal/nitro-server/.data/kv","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config$1 = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config$1.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function defineNitroPlugin(def) {
  return def;
}

function defineNitroErrorHandler(handler) {
  return handler;
}
const errorHandler = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const { stack, statusCode, statusMessage, message } = normalizeError(error);
    const showDetails = statusCode !== 404;
    const errorObject = {
      url: event.path || "",
      statusCode,
      statusMessage,
      message,
      stack: showDetails ? stack.map((i) => i.text) : void 0
    };
    if (error.unhandled || error.fatal) {
      const tags = [
        "[nitro]",
        "[request error]",
        error.unhandled && "[unhandled]",
        error.fatal && "[fatal]"
      ].filter(Boolean).join(" ");
      console.error(
        tags,
        error.message + "\n" + stack.map((l) => "  " + l.text).join("  \n")
      );
    }
    setResponseStatus(event, statusCode, statusMessage);
    if (isJsonRequest(event)) {
      setResponseHeader(event, "Content-Type", "application/json");
      return send(event, JSON.stringify(errorObject));
    } else {
      setResponseHeader(event, "Content-Type", "text/html");
      return send(event, renderHTMLError(errorObject));
    }
  }
);
function renderHTMLError(error) {
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Request Error";
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${statusCode} ${statusMessage}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico/css/pico.min.css">
  </head>
  <body>
    <main class="container">
      <dialog open>
        <article>
          <header>
            <h2>${statusCode} ${statusMessage}</h2>
          </header>
          <code>
            ${error.message}<br><br>
            ${"\n" + (error.stack || []).map((i) => `&nbsp;&nbsp;${i}`).join("<br>")}
          </code>
          <footer>
            <a href="/" onclick="event.preventDefault();history.back();">Go Back</a>
          </footer>
        </article>
      </dialog>
    </main>
  </body>
</html>
`;
}

const _dourmRBxPK = defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:response", (response, { event }) => {
    setResponseHeader(event, "X-Nitro-Plugin", "1");
  });
});

const plugins = [
  _dourmRBxPK
];

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"3c2e-FPMQDGRXutj0xqatoCPWGasFNaw\"",
    "mtime": "2023-12-28T09:03:46.880Z",
    "size": 15406,
    "path": "../../../../public/favicon.ico"
  },
  "/site.webmanifest": {
    "type": "application/manifest+json",
    "etag": "\"180-V+ySc85QZFcKAVotJCwAEdElwRo\"",
    "mtime": "2023-12-28T09:03:46.889Z",
    "size": 384,
    "path": "../../../../public/site.webmanifest"
  },
  "/favicons/README.md": {
    "type": "text/markdown; charset=utf-8",
    "etag": "\"1bc-CASNyQVU505dX2VmfdD9TjoIVLc\"",
    "mtime": "2023-12-28T09:03:55.129Z",
    "size": 444,
    "path": "../../../../public/favicons/README.md"
  },
  "/favicons/android-chrome-192x192.png": {
    "type": "image/png",
    "etag": "\"2739-tkLqnQ3CHmgh5yolTwkWgYUP/YI\"",
    "mtime": "2023-12-28T09:03:55.130Z",
    "size": 10041,
    "path": "../../../../public/favicons/android-chrome-192x192.png"
  },
  "/favicons/android-chrome-512x512.png": {
    "type": "image/png",
    "etag": "\"6c8b-o84aA3jtsY+2wd0DqTG5BjE3bDM\"",
    "mtime": "2023-12-28T09:03:55.131Z",
    "size": 27787,
    "path": "../../../../public/favicons/android-chrome-512x512.png"
  },
  "/favicons/apple-touch-icon.png": {
    "type": "image/png",
    "etag": "\"231a-Qp06bdwWbyrVe4qXpICm8I717fk\"",
    "mtime": "2023-12-28T09:03:55.131Z",
    "size": 8986,
    "path": "../../../../public/favicons/apple-touch-icon.png"
  },
  "/favicons/favicon-16x16.png": {
    "type": "image/png",
    "etag": "\"29d-WMNcA3m7zFIQmksQNiuN5gKKVMU\"",
    "mtime": "2023-12-28T09:03:55.131Z",
    "size": 669,
    "path": "../../../../public/favicons/favicon-16x16.png"
  },
  "/favicons/favicon-32x32.png": {
    "type": "image/png",
    "etag": "\"59b-IelbfSLwT4gq9hI6CFVfOwM5i8M\"",
    "mtime": "2023-12-28T09:03:55.132Z",
    "size": 1435,
    "path": "../../../../public/favicons/favicon-32x32.png"
  },
  "/favicons/favicon.svg": {
    "type": "image/svg+xml",
    "etag": "\"1d5-4cwoqbDpiwh9uR5E8dJugpKYnoY\"",
    "mtime": "2023-12-28T09:03:55.132Z",
    "size": 469,
    "path": "../../../../public/favicons/favicon.svg"
  },
  "/favicons/mask-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"14e-v0OtfNZdlXRUSfsGckTf4s7hA/o\"",
    "mtime": "2023-12-28T09:03:55.133Z",
    "size": 334,
    "path": "../../../../public/favicons/mask-icon.svg"
  },
  "/web-build/__remix_entry_dev-QPVCTLDT.js": {
    "type": "application/javascript",
    "etag": "\"2fa-/kpJI3IaxePzb0r3ygZ+WVRzviQ\"",
    "mtime": "2023-12-28T12:32:46.171Z",
    "size": 762,
    "path": "../../../../public/web-build/__remix_entry_dev-QPVCTLDT.js"
  },
  "/web-build/__remix_entry_dev-QPVCTLDT.js.map": {
    "type": "application/json",
    "etag": "\"2dc-PmvCwpOLtHoCsPCfKEYK0VlKRNs\"",
    "mtime": "2023-12-28T12:32:46.170Z",
    "size": 732,
    "path": "../../../../public/web-build/__remix_entry_dev-QPVCTLDT.js.map"
  },
  "/web-build/entry.client-EYSU3X4S.js": {
    "type": "application/javascript",
    "etag": "\"4c7-En5mxUwVjQqmQSfdpqqr126yYws\"",
    "mtime": "2023-12-28T12:32:46.134Z",
    "size": 1223,
    "path": "../../../../public/web-build/entry.client-EYSU3X4S.js"
  },
  "/web-build/entry.client-EYSU3X4S.js.map": {
    "type": "application/json",
    "etag": "\"347-66kRNE5lWIIaN2DW3suBy4x2VPo\"",
    "mtime": "2023-12-28T12:32:46.134Z",
    "size": 839,
    "path": "../../../../public/web-build/entry.client-EYSU3X4S.js.map"
  },
  "/web-build/manifest-12FDFB1B.js": {
    "type": "application/javascript",
    "etag": "\"569-hEDZACGaJHeDMXTiOt+yCApL400\"",
    "mtime": "2023-12-28T12:32:46.124Z",
    "size": 1385,
    "path": "../../../../public/web-build/manifest-12FDFB1B.js"
  },
  "/web-build/root-HSC7DHWS.js": {
    "type": "application/javascript",
    "etag": "\"2149-CgmtkUzBAxlh4Yqr69IiYNmyXTQ\"",
    "mtime": "2023-12-28T12:32:46.139Z",
    "size": 8521,
    "path": "../../../../public/web-build/root-HSC7DHWS.js"
  },
  "/web-build/root-HSC7DHWS.js.map": {
    "type": "application/json",
    "etag": "\"4217-SPygvnPu8FhJLhmBzUMY3sy1QTI\"",
    "mtime": "2023-12-28T12:32:46.139Z",
    "size": 16919,
    "path": "../../../../public/web-build/root-HSC7DHWS.js.map"
  },
  "/web-build/_assets/index-5NALE6JZ.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6888-UhY1YqOvx1fWAqk666xj2trfi4Y\"",
    "mtime": "2023-12-28T12:32:46.138Z",
    "size": 26760,
    "path": "../../../../public/web-build/_assets/index-5NALE6JZ.css"
  },
  "/web-build/_assets/index-YUHC7X4E.css.map": {
    "type": "application/json",
    "etag": "\"d80-iGza4YvgfTJlGCOA4WeJfJQ3DYA\"",
    "mtime": "2023-12-28T12:32:45.971Z",
    "size": 3456,
    "path": "../../../../public/web-build/_assets/index-YUHC7X4E.css.map"
  },
  "/web-build/routes/_base-DCR3IUSX.js": {
    "type": "application/javascript",
    "etag": "\"1ecc-cWEmSSoBdtJvy+yOAm3xMQBYzQA\"",
    "mtime": "2023-12-28T12:32:46.142Z",
    "size": 7884,
    "path": "../../../../public/web-build/routes/_base-DCR3IUSX.js"
  },
  "/web-build/routes/_base-DCR3IUSX.js.map": {
    "type": "application/json",
    "etag": "\"241e-6gYHrMRa4YGmvwk+0kYLdSwMDk8\"",
    "mtime": "2023-12-28T12:32:46.141Z",
    "size": 9246,
    "path": "../../../../public/web-build/routes/_base-DCR3IUSX.js.map"
  },
  "/web-build/routes/_base._index-ORXHIWQB.js": {
    "type": "application/javascript",
    "etag": "\"1181-XYHhZr2lzMIKsG5TPy/dONwHK0U\"",
    "mtime": "2023-12-28T12:32:46.141Z",
    "size": 4481,
    "path": "../../../../public/web-build/routes/_base._index-ORXHIWQB.js"
  },
  "/web-build/routes/_base._index-ORXHIWQB.js.map": {
    "type": "application/json",
    "etag": "\"103d-X7G8xYMdADJhQz84m4dpDbcPV0E\"",
    "mtime": "2023-12-28T12:32:46.140Z",
    "size": 4157,
    "path": "../../../../public/web-build/routes/_base._index-ORXHIWQB.js.map"
  },
  "/web-build/routes/test-ZQ44Z5QO.js": {
    "type": "application/javascript",
    "etag": "\"154-HsBZAf8zo6XYGT97rhQFKBGQYEg\"",
    "mtime": "2023-12-28T12:32:46.165Z",
    "size": 340,
    "path": "../../../../public/web-build/routes/test-ZQ44Z5QO.js"
  },
  "/web-build/routes/test-ZQ44Z5QO.js.map": {
    "type": "application/json",
    "etag": "\"cd-wuCcSAws2jEoFbXDoAlc/nh9IoE\"",
    "mtime": "2023-12-28T12:32:46.163Z",
    "size": 205,
    "path": "../../../../public/web-build/routes/test-ZQ44Z5QO.js.map"
  },
  "/web-build/_shared/chunk-3WWGPOW6.js": {
    "type": "application/javascript",
    "etag": "\"8cfe-HCL2crExbTtSf6SLd4cGAmVpAdg\"",
    "mtime": "2023-12-28T12:32:46.147Z",
    "size": 36094,
    "path": "../../../../public/web-build/_shared/chunk-3WWGPOW6.js"
  },
  "/web-build/_shared/chunk-3WWGPOW6.js.map": {
    "type": "application/json",
    "etag": "\"e967-II24L9vjh3MJJBjJ8SjBqt1u3l8\"",
    "mtime": "2023-12-28T12:32:46.146Z",
    "size": 59751,
    "path": "../../../../public/web-build/_shared/chunk-3WWGPOW6.js.map"
  },
  "/web-build/_shared/chunk-3ZPYNNDY.js": {
    "type": "application/javascript",
    "etag": "\"13061-wKE/Az1em8WHceEYUBpbHQlzqFA\"",
    "mtime": "2023-12-28T12:32:46.148Z",
    "size": 77921,
    "path": "../../../../public/web-build/_shared/chunk-3ZPYNNDY.js"
  },
  "/web-build/_shared/chunk-3ZPYNNDY.js.map": {
    "type": "application/json",
    "etag": "\"1eadf-DzppjB6nR4Dd+B/FHUQYIpmUTOs\"",
    "mtime": "2023-12-28T12:32:46.147Z",
    "size": 125663,
    "path": "../../../../public/web-build/_shared/chunk-3ZPYNNDY.js.map"
  },
  "/web-build/_shared/chunk-BYYZ3FTR.js": {
    "type": "application/javascript",
    "etag": "\"4313-IciyYRouSPEc/jiEC18ouQOzIio\"",
    "mtime": "2023-12-28T12:32:46.144Z",
    "size": 17171,
    "path": "../../../../public/web-build/_shared/chunk-BYYZ3FTR.js"
  },
  "/web-build/_shared/chunk-BYYZ3FTR.js.map": {
    "type": "application/json",
    "etag": "\"69ac-gIFv9hpL1GAuImmotv8IwFnIEdY\"",
    "mtime": "2023-12-28T12:32:46.144Z",
    "size": 27052,
    "path": "../../../../public/web-build/_shared/chunk-BYYZ3FTR.js.map"
  },
  "/web-build/_shared/chunk-CYX77SAR.js": {
    "type": "application/javascript",
    "etag": "\"407c0-VpeTNlRvYi5aczdNMXS9qqefsdE\"",
    "mtime": "2023-12-28T12:32:46.146Z",
    "size": 264128,
    "path": "../../../../public/web-build/_shared/chunk-CYX77SAR.js"
  },
  "/web-build/_shared/chunk-CYX77SAR.js.map": {
    "type": "application/json",
    "etag": "\"93d72-a9ZLYtMqDClAQ99GGzKpLGqkSS8\"",
    "mtime": "2023-12-28T12:32:46.145Z",
    "size": 605554,
    "path": "../../../../public/web-build/_shared/chunk-CYX77SAR.js.map"
  },
  "/web-build/_shared/chunk-GGJ6JYPR.js": {
    "type": "application/javascript",
    "etag": "\"4736-MMtAOaAX8yCh2ImgtZNB9wryKZk\"",
    "mtime": "2023-12-28T12:32:46.191Z",
    "size": 18230,
    "path": "../../../../public/web-build/_shared/chunk-GGJ6JYPR.js"
  },
  "/web-build/_shared/chunk-GGJ6JYPR.js.map": {
    "type": "application/json",
    "etag": "\"76f0-3lFHgxr0lkZMe3OrpqX53eY9yW8\"",
    "mtime": "2023-12-28T12:32:46.190Z",
    "size": 30448,
    "path": "../../../../public/web-build/_shared/chunk-GGJ6JYPR.js.map"
  },
  "/web-build/_shared/chunk-MTQCEVDR.js": {
    "type": "application/javascript",
    "etag": "\"46c-BrXq1c1FmLoyb5bFUWA9XC2TEUo\"",
    "mtime": "2023-12-28T12:32:46.135Z",
    "size": 1132,
    "path": "../../../../public/web-build/_shared/chunk-MTQCEVDR.js"
  },
  "/web-build/_shared/chunk-MTQCEVDR.js.map": {
    "type": "application/json",
    "etag": "\"4fd-I/wV2+BqSlAk8Kw2cfohjbxHJYk\"",
    "mtime": "2023-12-28T12:32:46.135Z",
    "size": 1277,
    "path": "../../../../public/web-build/_shared/chunk-MTQCEVDR.js.map"
  },
  "/web-build/_shared/chunk-P43HLL2N.js": {
    "type": "application/javascript",
    "etag": "\"703-VsrzTcg4poL38loWf/WBcZQK+XM\"",
    "mtime": "2023-12-28T12:32:46.194Z",
    "size": 1795,
    "path": "../../../../public/web-build/_shared/chunk-P43HLL2N.js"
  },
  "/web-build/_shared/chunk-P43HLL2N.js.map": {
    "type": "application/json",
    "etag": "\"5d-RerH+vGB7MrTt8+1iQnbs3+RoXk\"",
    "mtime": "2023-12-28T12:32:46.192Z",
    "size": 93,
    "path": "../../../../public/web-build/_shared/chunk-P43HLL2N.js.map"
  },
  "/web-build/_shared/chunk-TX4Z5MKK.js": {
    "type": "application/javascript",
    "etag": "\"e1fe1-lkHb/8KpRokptqaI0TQp9pd160U\"",
    "mtime": "2023-12-28T12:32:46.137Z",
    "size": 925665,
    "path": "../../../../public/web-build/_shared/chunk-TX4Z5MKK.js"
  },
  "/web-build/_shared/chunk-TX4Z5MKK.js.map": {
    "type": "application/json",
    "etag": "\"16b738-oG/pDnpEADdFN2Akv7Ah6SHNQSo\"",
    "mtime": "2023-12-28T12:32:46.136Z",
    "size": 1488696,
    "path": "../../../../public/web-build/_shared/chunk-TX4Z5MKK.js.map"
  },
  "/web-build/_shared/chunk-XRNTFBSK.js": {
    "type": "application/javascript",
    "etag": "\"774-LjHLetuWB2a9o2v0MXt+6nM85/s\"",
    "mtime": "2023-12-28T12:32:46.189Z",
    "size": 1908,
    "path": "../../../../public/web-build/_shared/chunk-XRNTFBSK.js"
  },
  "/web-build/_shared/chunk-XRNTFBSK.js.map": {
    "type": "application/json",
    "etag": "\"d47-RSbdsGDmpGn8w+ROCRBkoaIrgWI\"",
    "mtime": "2023-12-28T12:32:46.187Z",
    "size": 3399,
    "path": "../../../../public/web-build/_shared/chunk-XRNTFBSK.js.map"
  },
  "/web-build/_shared/chunk-YIRP5TTX.js": {
    "type": "application/javascript",
    "etag": "\"5457-VGCY0g8qkEryJuYCDEo/c+QJAXQ\"",
    "mtime": "2023-12-28T12:32:46.143Z",
    "size": 21591,
    "path": "../../../../public/web-build/_shared/chunk-YIRP5TTX.js"
  },
  "/web-build/_shared/chunk-YIRP5TTX.js.map": {
    "type": "application/json",
    "etag": "\"6bf9-Jyi94p/TNwdCHypz08WXfC28tf8\"",
    "mtime": "2023-12-28T12:32:46.142Z",
    "size": 27641,
    "path": "../../../../public/web-build/_shared/chunk-YIRP5TTX.js.map"
  },
  "/web-build/_shared/client-PPFL46SK.js": {
    "type": "application/javascript",
    "etag": "\"136-tjr6w45uQTOSnHTNR9Knx92TjGY\"",
    "mtime": "2023-12-28T12:32:46.129Z",
    "size": 310,
    "path": "../../../../public/web-build/_shared/client-PPFL46SK.js"
  },
  "/web-build/_shared/client-PPFL46SK.js.map": {
    "type": "application/json",
    "etag": "\"5d-RerH+vGB7MrTt8+1iQnbs3+RoXk\"",
    "mtime": "2023-12-28T12:32:46.129Z",
    "size": 93,
    "path": "../../../../public/web-build/_shared/client-PPFL46SK.js.map"
  },
  "/web-build/_shared/esm-N4TLSUO5.js": {
    "type": "application/javascript",
    "etag": "\"702-9Yxkh44FCyK++jTcfPfia1CwRfU\"",
    "mtime": "2023-12-28T12:32:46.127Z",
    "size": 1794,
    "path": "../../../../public/web-build/_shared/esm-N4TLSUO5.js"
  },
  "/web-build/_shared/esm-N4TLSUO5.js.map": {
    "type": "application/json",
    "etag": "\"5d-RerH+vGB7MrTt8+1iQnbs3+RoXk\"",
    "mtime": "2023-12-28T12:32:46.126Z",
    "size": 93,
    "path": "../../../../public/web-build/_shared/esm-N4TLSUO5.js.map"
  },
  "/web-build/_shared/jsx-dev-runtime-E4OQ56PQ.js": {
    "type": "application/javascript",
    "etag": "\"122-e0iHZvNBPLJe+c5SJZbkAYoUFXM\"",
    "mtime": "2023-12-28T12:32:46.131Z",
    "size": 290,
    "path": "../../../../public/web-build/_shared/jsx-dev-runtime-E4OQ56PQ.js"
  },
  "/web-build/_shared/jsx-dev-runtime-E4OQ56PQ.js.map": {
    "type": "application/json",
    "etag": "\"5d-RerH+vGB7MrTt8+1iQnbs3+RoXk\"",
    "mtime": "2023-12-28T12:32:46.130Z",
    "size": 93,
    "path": "../../../../public/web-build/_shared/jsx-dev-runtime-E4OQ56PQ.js.map"
  },
  "/web-build/_shared/jsx-runtime-OBCRR6OH.js": {
    "type": "application/javascript",
    "etag": "\"8e5e-uiEJPm/23LFs6zQKA3p9jty+P98\"",
    "mtime": "2023-12-28T12:32:46.133Z",
    "size": 36446,
    "path": "../../../../public/web-build/_shared/jsx-runtime-OBCRR6OH.js"
  },
  "/web-build/_shared/jsx-runtime-OBCRR6OH.js.map": {
    "type": "application/json",
    "etag": "\"eca2-xS5LgGxC1qI6wTQJ1OoTWDPg2kg\"",
    "mtime": "2023-12-28T12:32:46.132Z",
    "size": 60578,
    "path": "../../../../public/web-build/_shared/jsx-runtime-OBCRR6OH.js.map"
  },
  "/web-build/_shared/react-TBGRD6UE.js": {
    "type": "application/javascript",
    "etag": "\"d5-/RtoLQjsmMQqISgnkOYSvENqHOk\"",
    "mtime": "2023-12-28T12:32:46.125Z",
    "size": 213,
    "path": "../../../../public/web-build/_shared/react-TBGRD6UE.js"
  },
  "/web-build/_shared/react-TBGRD6UE.js.map": {
    "type": "application/json",
    "etag": "\"5d-RerH+vGB7MrTt8+1iQnbs3+RoXk\"",
    "mtime": "2023-12-28T12:32:46.125Z",
    "size": 93,
    "path": "../../../../public/web-build/_shared/react-TBGRD6UE.js.map"
  },
  "/web-build/_shared/react-dom-G2NVOMLP.js": {
    "type": "application/javascript",
    "etag": "\"110-KqcXmYYOUb8wDBiK617GtuCkzZk\"",
    "mtime": "2023-12-28T12:32:46.128Z",
    "size": 272,
    "path": "../../../../public/web-build/_shared/react-dom-G2NVOMLP.js"
  },
  "/web-build/_shared/react-dom-G2NVOMLP.js.map": {
    "type": "application/json",
    "etag": "\"5d-RerH+vGB7MrTt8+1iQnbs3+RoXk\"",
    "mtime": "2023-12-28T12:32:46.128Z",
    "size": 93,
    "path": "../../../../public/web-build/_shared/react-dom-G2NVOMLP.js.map"
  },
  "/web-build/_shared/remix_hmr-DAWRLO3F.js": {
    "type": "application/javascript",
    "etag": "\"10a-xu4doVjmobaZrH7pEbP5GE1lKiw\"",
    "mtime": "2023-12-28T12:32:46.180Z",
    "size": 266,
    "path": "../../../../public/web-build/_shared/remix_hmr-DAWRLO3F.js"
  },
  "/web-build/_shared/remix_hmr-DAWRLO3F.js.map": {
    "type": "application/json",
    "etag": "\"5d-RerH+vGB7MrTt8+1iQnbs3+RoXk\"",
    "mtime": "2023-12-28T12:32:46.175Z",
    "size": 93,
    "path": "../../../../public/web-build/_shared/remix_hmr-DAWRLO3F.js.map"
  },
  "/web-build/_shared/runtime-DXGEGKPR.js": {
    "type": "application/javascript",
    "etag": "\"db-kKEEeE5s7ClwpQZAHY47Ke1gQeM\"",
    "mtime": "2023-12-28T12:32:46.173Z",
    "size": 219,
    "path": "../../../../public/web-build/_shared/runtime-DXGEGKPR.js"
  },
  "/web-build/_shared/runtime-DXGEGKPR.js.map": {
    "type": "application/json",
    "etag": "\"5d-RerH+vGB7MrTt8+1iQnbs3+RoXk\"",
    "mtime": "2023-12-28T12:32:46.172Z",
    "size": 93,
    "path": "../../../../public/web-build/_shared/runtime-DXGEGKPR.js.map"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _x1Z8W1 = defineEventHandler((event) => {
  var _a;
  const routeRules = getRouteRules(event);
  const appConfig = useAppConfig(event);
  const { security } = appConfig;
  defu((_a = routeRules.security) != null ? _a : {}, security != null ? security : {});
  console.log("App Config:: ", appConfig);
  setHeader(event, "X-Nitro-Middleware", "1");
  setHeader(event, "X-Powered-By", "ProxyList");
  setHeader(event, "Referrer-Policy", "no-referrer");
  setHeader(
    event,
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload"
  );
  setHeader(event, "X-Content-Type-Options", "nosniff");
  setHeader(event, "X-Download-Options", "noopen");
  setHeader(event, "X-Frame-Options", "SAMEORIGIN");
  setHeader(event, "X-Permitted-Cross-Domain-Policies", "none");
  setHeader(event, "X-XSS-Protection", "0");
  setHeader(event, "Origin-Agent-Cluster", "?1");
  setHeader(event, "Cross-Origin-Resource-Policy", "same-origin");
  setHeader(event, "Cross-Origin-Opener-Policy", "same-origin");
  setHeader(event, "Cross-Origin-Embedder-Policy", "require-corp");
});

const _lazy_UDxZVk = () => Promise.resolve().then(function () { return index$1; });
const _lazy_6JBGTu = () => Promise.resolve().then(function () { return index$1; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '', handler: _x1Z8W1, lazy: false, middleware: true, method: undefined },
  { route: '/', handler: _lazy_UDxZVk, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_6JBGTu, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (provider === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET || process.versions.bun) {
    return 0;
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (isWindows) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
trapUnhandledNodeErrors();
async function onShutdown(signal) {
  await nitroApp.hooks.callHook("close");
}
parentPort.on("message", async (msg) => {
  if (msg && msg.event === "shutdown") {
    await onShutdown();
    parentPort.postMessage({ event: "exit" });
  }
});

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
}, __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => entry_server_default,
  handleDataRequest: () => handleDataRequest
});

// app/runtime.server.ts
var runtime_server_exports = {};
__export(runtime_server_exports, {
  default: () => default2__default
});
__reExport(runtime_server_exports, default2);
var withETag = async (request, response, { chunkSizeMb } = { chunkSizeMb: 5 }) => {
  if (!(response instanceof Response) || !(request instanceof Request) || request.method !== "GET" || !response.body)
    return response;
  let hash = createHash(chunkSizeMb), reader = response.clone().body.getReader(), data;
  for (; (data = await reader.read()) && !data.done; )
    hash.update(data.value);
  let tag = `"${hash.digest()}"`;
  return request.headers.get("If-None-Match") === tag ? new Response(null, { status: 304, statusText: "Not Modified" }) : (response.headers.set("ETag", tag), response);
};
async function entry_server_default(request, responseStatusCode, responseHeaders, remixContext) {
  let remixServer = /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
    fileName: "app/entry.server.tsx",
    lineNumber: 12,
    columnNumber: 23
  }, this), response = await (0, runtime_server_exports.handleRequest)(
    request,
    responseStatusCode,
    responseHeaders,
    remixServer
  );
  return await withETag(request, response);
}
var handleDataRequest = async (response, { request }) => withETag(request, response);

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  config: () => config,
  default: () => App,
  links: () => links
});

// app/index.css
var app_default = "/web-build/_assets/index-5NALE6JZ.css";

// styled-system/helpers.js
function isObject(value) {
  return typeof value == "object" && value != null && !Array.isArray(value);
}
function compact(value) {
  return Object.fromEntries(Object.entries(value ?? {}).filter(([_, value2]) => value2 !== void 0));
}
var isBaseCondition = (v) => v === "base";
function filterBaseConditions(c) {
  return c.slice().filter((v) => !isBaseCondition(v));
}
var importantRegex = /!(important)?/;
function isImportant(value) {
  return typeof value == "string" ? importantRegex.test(value) : !1;
}
function withoutImportant(value) {
  return typeof value == "string" ? value.replace(importantRegex, "").trim() : value;
}
function withoutSpace(str) {
  return typeof str == "string" ? str.replaceAll(" ", "_") : str;
}
function toChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
}
function toName(code) {
  let name = "", x;
  for (x = Math.abs(code); x > 52; x = x / 52 | 0)
    name = toChar(x % 52) + name;
  return toChar(x % 52) + name;
}
function toPhash(h, x) {
  let i = x.length;
  for (; i; )
    h = h * 33 ^ x.charCodeAt(--i);
  return h;
}
function toHash(value) {
  return toName(toPhash(5381, value) >>> 0);
}
function mergeProps(...sources) {
  return sources.filter(Boolean).reduce((prev, obj) => (Object.keys(obj).forEach((key) => {
    let prevValue = prev[key], value = obj[key];
    isObject(prevValue) && isObject(value) ? prev[key] = mergeProps(prevValue, value) : prev[key] = value;
  }), prev), {});
}
var isNotNullish = (element) => element != null;
function walkObject(target, predicate, options = {}) {
  let { stop, getKey } = options;
  function inner(value, path = []) {
    if (isObject(value) || Array.isArray(value)) {
      let result = {};
      for (let [prop, child] of Object.entries(value)) {
        let key = getKey?.(prop) ?? prop, childPath = [...path, key];
        if (stop?.(value, childPath))
          return predicate(value, path);
        let next = inner(child, childPath);
        isNotNullish(next) && (result[key] = next);
      }
      return result;
    }
    return predicate(value, path);
  }
  return inner(target);
}
function toResponsiveObject(values, breakpoints) {
  return values.reduce((acc, current, index) => {
    let key = breakpoints[index];
    return current != null && (acc[key] = current), acc;
  }, {});
}
function normalizeShorthand(styles, context2) {
  let { hasShorthand, resolveShorthand: resolveShorthand2 } = context2.utility;
  return walkObject(styles, (v) => v, {
    getKey: (prop) => hasShorthand ? resolveShorthand2(prop) : prop
  });
}
function normalizeStyleObject(styles, context2, shorthand = !0) {
  let { utility, conditions: conditions2 } = context2, { hasShorthand, resolveShorthand: resolveShorthand2 } = utility;
  return walkObject(
    styles,
    (value) => Array.isArray(value) ? toResponsiveObject(value, conditions2.breakpoints.keys) : value,
    {
      stop: (value) => Array.isArray(value),
      getKey: shorthand ? (prop) => hasShorthand ? resolveShorthand2(prop) : prop : void 0
    }
  );
}
var fallbackCondition = {
  shift: (v) => v,
  finalize: (v) => v,
  breakpoints: { keys: [] }
}, sanitize = (value) => typeof value == "string" ? value.replaceAll(/[\n\s]+/g, " ") : value;
function createCss(context2) {
  let { utility, hash, conditions: conds = fallbackCondition } = context2, formatClassName = (str) => [utility.prefix, str].filter(Boolean).join("-"), hashFn = (conditions2, className) => {
    let result;
    if (hash) {
      let baseArray = [...conds.finalize(conditions2), className];
      result = formatClassName(toHash(baseArray.join(":")));
    } else
      result = [...conds.finalize(conditions2), formatClassName(className)].join(":");
    return result;
  };
  return (styleObject = {}) => {
    let normalizedObject = normalizeStyleObject(styleObject, context2), classNames = /* @__PURE__ */ new Set();
    return walkObject(normalizedObject, (value, paths) => {
      let important = isImportant(value);
      if (value == null)
        return;
      let [prop, ...allConditions] = conds.shift(paths), conditions2 = filterBaseConditions(allConditions), transformed = utility.transform(prop, withoutImportant(sanitize(value))), className = hashFn(conditions2, transformed.className);
      important && (className = `${className}!`), classNames.add(className);
    }), Array.from(classNames).join(" ");
  };
}
function compactStyles(...styles) {
  return styles.filter((style) => isObject(style) && Object.keys(compact(style)).length > 0);
}
function createMergeCss(context2) {
  function resolve(styles) {
    let allStyles = compactStyles(...styles);
    return allStyles.length === 1 ? allStyles : allStyles.map((style) => normalizeShorthand(style, context2));
  }
  function mergeCss2(...styles) {
    return mergeProps(...resolve(styles));
  }
  function assignCss2(...styles) {
    return Object.assign({}, ...resolve(styles));
  }
  return { mergeCss: mergeCss2, assignCss: assignCss2 };
}
var memo = (fn) => {
  let cache = /* @__PURE__ */ new Map();
  return (...args) => {
    let key = JSON.stringify(args);
    if (cache.has(key))
      return cache.get(key);
    let result = fn(...args);
    return cache.set(key, result), result;
  };
}, wordRegex = /([A-Z])/g, msRegex = /^ms-/, hypenateProperty = memo((property) => property.startsWith("--") ? property : property.replace(wordRegex, "-$1").replace(msRegex, "-ms-").toLowerCase());
function splitProps(props, ...keys) {
  let descriptors = Object.getOwnPropertyDescriptors(props), dKeys = Object.keys(descriptors), split = (k) => {
    let clone = {};
    for (let i = 0; i < k.length; i++) {
      let key = k[i];
      descriptors[key] && (Object.defineProperty(clone, key, descriptors[key]), delete descriptors[key]);
    }
    return clone;
  }, fn = (key) => split(Array.isArray(key) ? key : dKeys.filter(key));
  return keys.map(fn).concat(split(dKeys));
}
var uniq = (...items) => items.filter(Boolean).reduce((acc, item) => Array.from(/* @__PURE__ */ new Set([...acc, ...item])), []);
var htmlProps = ["htmlSize", "htmlTranslate", "htmlWidth", "htmlHeight"];
function convert(key) {
  return htmlProps.includes(key) ? key.replace("html", "").toLowerCase() : key;
}
function normalizeHTMLProps(props) {
  return Object.fromEntries(Object.entries(props).map(([key, value]) => [convert(key), value]));
}
normalizeHTMLProps.keys = htmlProps;

// styled-system/css/conditions.js
var conditionsStr = "_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_default,_optional,_open,_closed,_fullscreen,_loading,_currentPage,_currentStep,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,smToMd,smToLg,smToXl,smTo2xl,mdToLg,mdToXl,mdTo2xl,lgToXl,lgTo2xl,xlTo2xl,base", conditions = new Set(conditionsStr.split(","));
function isCondition(value) {
  return conditions.has(value) || /^@|&|&$/.test(value);
}
var underscoreRegex = /^_/, conditionsSelectorRegex = /&|@/;
function finalizeConditions(paths) {
  return paths.map((path) => conditions.has(path) ? path.replace(underscoreRegex, "") : conditionsSelectorRegex.test(path) ? `[${withoutSpace(path.trim())}]` : path);
}
function sortConditions(paths) {
  return paths.sort((a, b) => {
    let aa = isCondition(a), bb = isCondition(b);
    return aa && !bb ? 1 : !aa && bb ? -1 : 0;
  });
}

// styled-system/css/css.js
var utilities = "aspectRatio:aspect,boxDecorationBreak:decoration,zIndex:z,boxSizing:box,objectPosition:object,objectFit:object,overscrollBehavior:overscroll,overscrollBehaviorX:overscroll-x,overscrollBehaviorY:overscroll-y,position:pos/1,top:top,left:left,insetInline:inset-x,insetBlock:inset-y,inset:inset,insetBlockEnd:inset-b,insetBlockStart:inset-t,insetInlineEnd:end/insetEnd/1,insetInlineStart:start/insetStart/1,right:right,bottom:bottom,insetX:inset-x,insetY:inset-y,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:basis,flex:flex,flexDirection:flex/flexDir,flexGrow:grow,flexShrink:shrink,gridTemplateColumns:grid-cols,gridTemplateRows:grid-rows,gridColumn:col-span,gridRow:row-span,gridColumnStart:col-start,gridColumnEnd:col-end,gridAutoFlow:grid-flow,gridAutoColumns:auto-cols,gridAutoRows:auto-rows,gap:gap,gridGap:gap,gridRowGap:gap-x,gridColumnGap:gap-y,rowGap:gap-x,columnGap:gap-y,justifyContent:justify,alignContent:content,alignItems:items,alignSelf:self,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pb,paddingBlockStart:pt,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mb,marginBlockStart:mt,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,outlineWidth:ring/ringWidth,outlineColor:ring/ringColor,outline:ring/1,outlineOffset:ring/ringOffset,divideX:divide-x,divideY:divide-y,divideColor:divide,divideStyle:divide,width:w/1,inlineSize:w,minWidth:min-w/minW,minInlineSize:min-w,maxWidth:max-w/maxW,maxInlineSize:max-w,height:h/1,blockSize:h,minHeight:min-h/minH,minBlockSize:min-h,maxHeight:max-h/maxH,maxBlockSize:max-b,color:text,fontFamily:font,fontSize:fs,fontWeight:font,fontSmoothing:smoothing,fontVariantNumeric:numeric,letterSpacing:tracking,lineHeight:leading,textAlign:text,textDecoration:text-decor,textDecorationColor:text-decor,textEmphasisColor:text-emphasis,textDecorationStyle:decoration,textDecorationThickness:decoration,textUnderlineOffset:underline-offset,textTransform:text,textIndent:indent,textShadow:text-shadow,textOverflow:text,verticalAlign:align,wordBreak:break,textWrap:text,truncate:truncate,lineClamp:clamp,listStyleType:list,listStylePosition:list,listStyleImage:list-img,backgroundPosition:bg/bgPosition,backgroundPositionX:bg-x/bgPositionX,backgroundPositionY:bg-y/bgPositionY,backgroundAttachment:bg/bgAttachment,backgroundClip:bg-clip/bgClip,background:bg/1,backgroundColor:bg/bgColor,backgroundOrigin:bg-origin/bgOrigin,backgroundImage:bg-img/bgImage,backgroundRepeat:bg-repeat/bgRepeat,backgroundBlendMode:bg-blend/bgBlendMode,backgroundSize:bg/bgSize,backgroundGradient:bg-gradient/bgGradient,textGradient:text-gradient,gradientFrom:from,gradientTo:to,gradientVia:via,borderRadius:rounded/1,borderTopLeftRadius:rounded-tl/roundedTopLeft,borderTopRightRadius:rounded-tr/roundedTopRight,borderBottomRightRadius:rounded-br/roundedBottomRight,borderBottomLeftRadius:rounded-bl/roundedBottomLeft,borderTopRadius:rounded-t/roundedTop,borderRightRadius:rounded-r/roundedRight,borderBottomRadius:rounded-b/roundedBottom,borderLeftRadius:rounded-l/roundedLeft,borderStartStartRadius:rounded-ss/roundedStartStart,borderStartEndRadius:rounded-se/roundedStartEnd,borderStartRadius:rounded-s/roundedStart,borderEndStartRadius:rounded-es/roundedEndStart,borderEndEndRadius:rounded-ee/roundedEndEnd,borderEndRadius:rounded-e/roundedEnd,border:border,borderWidth:border-w,borderTopWidth:border-tw,borderLeftWidth:border-lw,borderRightWidth:border-rw,borderBottomWidth:border-bw,borderColor:border,borderInline:border-x/borderX,borderInlineWidth:border-x/borderXWidth,borderInlineColor:border-x/borderXColor,borderBlock:border-y/borderY,borderBlockWidth:border-y/borderYWidth,borderBlockColor:border-y/borderYColor,borderLeft:border-l,borderLeftColor:border-l,borderInlineStart:border-s/borderStart,borderInlineStartWidth:border-s/borderStartWidth,borderInlineStartColor:border-s/borderStartColor,borderRight:border-r,borderRightColor:border-r,borderInlineEnd:border-e/borderEnd,borderInlineEndWidth:border-e/borderEndWidth,borderInlineEndColor:border-e/borderEndColor,borderTop:border-t,borderTopColor:border-t,borderBottom:border-b,borderBottomColor:border-b,borderBlockEnd:border-be,borderBlockEndColor:border-be,borderBlockStart:border-bs,borderBlockStartColor:border-bs,boxShadow:shadow/1,boxShadowColor:shadow/shadowColor,mixBlendMode:mix-blend,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:backdrop,backdropBlur:backdrop-blur,backdropBrightness:backdrop-brightness,backdropContrast:backdrop-contrast,backdropGrayscale:backdrop-grayscale,backdropHueRotate:backdrop-hue-rotate,backdropInvert:backdrop-invert,backdropOpacity:backdrop-opacity,backdropSaturate:backdrop-saturate,backdropSepia:backdrop-sepia,borderCollapse:border,borderSpacing:border-spacing,borderSpacingX:border-spacing-x,borderSpacingY:border-spacing-y,tableLayout:table,transitionTimingFunction:ease,transitionDelay:delay,transitionDuration:duration,transitionProperty:transition-prop,transition:transition,animation:animation,animationName:animation-name,animationDelay:animation-delay,transformOrigin:origin,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,accentColor:accent,caretColor:caret,scrollBehavior:scroll,scrollbar:scrollbar,scrollMargin:scroll-m,scrollMarginX:scroll-mx,scrollMarginY:scroll-my,scrollMarginLeft:scroll-ml,scrollMarginRight:scroll-mr,scrollMarginTop:scroll-mt,scrollMarginBottom:scroll-mb,scrollMarginBlock:scroll-my,scrollMarginBlockEnd:scroll-mb,scrollMarginBlockStart:scroll-mt,scrollMarginInline:scroll-mx,scrollMarginInlineEnd:scroll-me,scrollMarginInlineStart:scroll-ms,scrollPadding:scroll-p,scrollPaddingBlock:scroll-pb,scrollPaddingBlockStart:scroll-pt,scrollPaddingBlockEnd:scroll-pb,scrollPaddingInline:scroll-px,scrollPaddingInlineEnd:scroll-pe,scrollPaddingInlineStart:scroll-ps,scrollPaddingX:scroll-px,scrollPaddingY:scroll-py,scrollPaddingLeft:scroll-pl,scrollPaddingRight:scroll-pr,scrollPaddingTop:scroll-pt,scrollPaddingBottom:scroll-pb,scrollSnapAlign:snap,scrollSnapStop:snap,scrollSnapType:snap,scrollSnapStrictness:strictness,scrollSnapMargin:snap-m,scrollSnapMarginTop:snap-mt,scrollSnapMarginBottom:snap-mb,scrollSnapMarginLeft:snap-ml,scrollSnapMarginRight:snap-mr,touchAction:touch,userSelect:select,fill:fill,stroke:stroke,strokeWidth:stroke-w,srOnly:sr,debug:debug,appearance:appearance,backfaceVisibility:backface,clipPath:clip-path,hyphens:hyphens,mask:mask,maskImage:mask-image,maskSize:mask-size,textSizeAdjust:text-size-adjust,textStyle:textStyle", classNameByProp = /* @__PURE__ */ new Map(), shorthands = /* @__PURE__ */ new Map();
utilities.split(",").forEach((utility) => {
  let [prop, meta3] = utility.split(":"), [className, ...shorthandList] = meta3.split("/");
  classNameByProp.set(prop, className), shorthandList.length && shorthandList.forEach((shorthand) => {
    shorthands.set(shorthand === "1" ? className : shorthand, prop);
  });
});
var resolveShorthand = (prop) => shorthands.get(prop) || prop, context = {
  conditions: {
    shift: sortConditions,
    finalize: finalizeConditions,
    breakpoints: { keys: ["base", "sm", "md", "lg", "xl", "2xl"] }
  },
  utility: {
    prefix: "__proxylist__",
    transform: (prop, value) => {
      let key = resolveShorthand(prop);
      return { className: `${classNameByProp.get(key) || hypenateProperty(key)}_${withoutSpace(value)}` };
    },
    hasShorthand: !0,
    resolveShorthand
  }
}, cssFn = createCss(context), css = (...styles) => cssFn(mergeCss(...styles));
css.raw = (...styles) => mergeCss(...styles);
var { mergeCss, assignCss } = createMergeCss(context);

// styled-system/css/cx.js
function cx() {
  let str = "", i = 0, arg;
  for (; i < arguments.length; )
    (arg = arguments[i++]) && typeof arg == "string" && (str && (str += " "), str += arg);
  return str;
}

// styled-system/css/cva.js
var defaults = (conf) => ({
  base: {},
  variants: {},
  defaultVariants: {},
  compoundVariants: [],
  ...conf
});
function cva(config4) {
  let { base, variants, defaultVariants, compoundVariants } = defaults(config4);
  function resolve(props = {}) {
    let computedVariants = { ...defaultVariants, ...compact(props) }, variantCss = { ...base };
    for (let [key, value] of Object.entries(computedVariants))
      variants[key]?.[value] && (variantCss = mergeCss(variantCss, variants[key][value]));
    let compoundVariantCss = getCompoundVariantCss(compoundVariants, computedVariants);
    return mergeCss(variantCss, compoundVariantCss);
  }
  function merge(__cva) {
    let override = defaults(__cva.config), variantKeys2 = uniq(__cva.variantKeys, Object.keys(variants));
    return cva({
      base: mergeCss(base, override.base),
      variants: Object.fromEntries(
        variantKeys2.map((key) => [key, mergeCss(variants[key], override.variants[key])])
      ),
      defaultVariants: mergeProps(defaultVariants, override.defaultVariants),
      compoundVariants: [...compoundVariants, ...override.compoundVariants]
    });
  }
  function cvaFn(props) {
    return css(resolve(props));
  }
  let variantKeys = Object.keys(variants);
  function splitVariantProps(props) {
    return splitProps(props, variantKeys);
  }
  let variantMap = Object.fromEntries(Object.entries(variants).map(([key, value]) => [key, Object.keys(value)]));
  return Object.assign(cvaFn, {
    __cva__: !0,
    variantMap,
    variantKeys,
    raw: resolve,
    config: config4,
    merge,
    splitVariantProps
  });
}
function getCompoundVariantCss(compoundVariants, variantMap) {
  let result = {};
  return compoundVariants.forEach((compoundVariant) => {
    Object.entries(compoundVariant).every(([key, value]) => key === "css" ? !0 : (Array.isArray(value) ? value : [value]).some((value2) => variantMap[key] === value2)) && (result = mergeCss(result, compoundVariant.css));
  }), result;
}

// app/root.classes.ts
var root = css({
  background: "linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%);",
  color: "white",
  height: "100%",
  overflowY: "scroll"
});
var config = { runtime: "edge" }, links = () => [
  { rel: "preload", href: app_default, as: "style" },
  { rel: "stylesheet", href: app_default },
  void 0,
  void 0,
  { rel: "mask-icon", href: "/favicons/mask-icon.svg" },
  {
    rel: "alternate icon",
    type: "image/png",
    href: "/favicons/favicon-32x32.png"
  },
  { rel: "apple-touch-icon", href: "/favicons/apple-touch-icon.png" },
  {
    rel: "manifest",
    href: "/site.webmanifest",
    crossOrigin: "use-credentials"
  },
  // necessary to make typescript happy
  //These should match the css preloads above to avoid css as render blocking resource
  { rel: "icon", type: "image/svg+xml", href: "/favicons/favicon.svg" }
].filter(Boolean);
function App() {
  return /* @__PURE__ */ jsxDEV("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV("head", { children: [
      /* @__PURE__ */ jsxDEV("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("meta", { name: "author", content: "A kiwi developer in incognito mode." }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "description",
          content: "ProxyList. Find all the proxies you need. Http(s), Socks4 & Socks5."
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 49,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "keywords",
          content: "Http, Https, Socks4, Socks5, Proxy, ProxyList, Proxies, Anonymous, Hide, I.P, IP, Address, Incognito, VPN, Virtual, Private, Network, Virtual Private Network, Stealth, Hidden"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 53,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("body", { className: root, children: [
      /* @__PURE__ */ jsxDEV(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Analytics, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}

// app/routes/_base._index.tsx
var base_index_exports = {};
__export(base_index_exports, {
  config: () => config2,
  default: () => Index,
  headers: () => headers,
  loader: () => loader,
  meta: () => meta
});

// styled-system/jsx/is-valid-prop.js
var userGeneratedStr = "css,pos,insetEnd,end,insetStart,start,flexDir,p,pl,pr,pt,pb,py,paddingY,paddingX,px,pe,paddingEnd,ps,paddingStart,ml,mr,mt,mb,m,my,marginY,mx,marginX,me,marginEnd,ms,marginStart,ringWidth,ringColor,ring,ringOffset,w,minW,maxW,h,minH,maxH,bgPosition,bgPositionX,bgPositionY,bgAttachment,bgClip,bg,bgColor,bgOrigin,bgImage,bgRepeat,bgBlendMode,bgSize,bgGradient,rounded,roundedTopLeft,roundedTopRight,roundedBottomRight,roundedBottomLeft,roundedTop,roundedRight,roundedBottom,roundedLeft,roundedStartStart,roundedStartEnd,roundedStart,roundedEndStart,roundedEndEnd,roundedEnd,borderX,borderXWidth,borderXColor,borderY,borderYWidth,borderYColor,borderStart,borderStartWidth,borderStartColor,borderEnd,borderEndWidth,borderEndColor,shadow,shadowColor,x,y,aspectRatio,boxDecorationBreak,zIndex,boxSizing,objectPosition,objectFit,overscrollBehavior,overscrollBehaviorX,overscrollBehaviorY,position,top,left,insetInline,insetBlock,inset,insetBlockEnd,insetBlockStart,insetInlineEnd,insetInlineStart,right,bottom,insetX,insetY,float,visibility,display,hideFrom,hideBelow,flexBasis,flex,flexDirection,flexGrow,flexShrink,gridTemplateColumns,gridTemplateRows,gridColumn,gridRow,gridColumnStart,gridColumnEnd,gridAutoFlow,gridAutoColumns,gridAutoRows,gap,gridGap,gridRowGap,gridColumnGap,rowGap,columnGap,justifyContent,alignContent,alignItems,alignSelf,padding,paddingLeft,paddingRight,paddingTop,paddingBottom,paddingBlock,paddingBlockEnd,paddingBlockStart,paddingInline,paddingInlineEnd,paddingInlineStart,marginLeft,marginRight,marginTop,marginBottom,margin,marginBlock,marginBlockEnd,marginBlockStart,marginInline,marginInlineEnd,marginInlineStart,outlineWidth,outlineColor,outline,outlineOffset,divideX,divideY,divideColor,divideStyle,width,inlineSize,minWidth,minInlineSize,maxWidth,maxInlineSize,height,blockSize,minHeight,minBlockSize,maxHeight,maxBlockSize,color,fontFamily,fontSize,fontWeight,fontSmoothing,fontVariantNumeric,letterSpacing,lineHeight,textAlign,textDecoration,textDecorationColor,textEmphasisColor,textDecorationStyle,textDecorationThickness,textUnderlineOffset,textTransform,textIndent,textShadow,textOverflow,verticalAlign,wordBreak,textWrap,truncate,lineClamp,listStyleType,listStylePosition,listStyleImage,backgroundPosition,backgroundPositionX,backgroundPositionY,backgroundAttachment,backgroundClip,background,backgroundColor,backgroundOrigin,backgroundImage,backgroundRepeat,backgroundBlendMode,backgroundSize,backgroundGradient,textGradient,gradientFrom,gradientTo,gradientVia,borderRadius,borderTopLeftRadius,borderTopRightRadius,borderBottomRightRadius,borderBottomLeftRadius,borderTopRadius,borderRightRadius,borderBottomRadius,borderLeftRadius,borderStartStartRadius,borderStartEndRadius,borderStartRadius,borderEndStartRadius,borderEndEndRadius,borderEndRadius,border,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,borderColor,borderInline,borderInlineWidth,borderInlineColor,borderBlock,borderBlockWidth,borderBlockColor,borderLeft,borderLeftColor,borderInlineStart,borderInlineStartWidth,borderInlineStartColor,borderRight,borderRightColor,borderInlineEnd,borderInlineEndWidth,borderInlineEndColor,borderTop,borderTopColor,borderBottom,borderBottomColor,borderBlockEnd,borderBlockEndColor,borderBlockStart,borderBlockStartColor,opacity,boxShadow,boxShadowColor,mixBlendMode,filter,brightness,contrast,grayscale,hueRotate,invert,saturate,sepia,dropShadow,blur,backdropFilter,backdropBlur,backdropBrightness,backdropContrast,backdropGrayscale,backdropHueRotate,backdropInvert,backdropOpacity,backdropSaturate,backdropSepia,borderCollapse,borderSpacing,borderSpacingX,borderSpacingY,tableLayout,transitionTimingFunction,transitionDelay,transitionDuration,transitionProperty,transition,animation,animationName,animationDelay,transformOrigin,scale,scaleX,scaleY,translate,translateX,translateY,accentColor,caretColor,scrollBehavior,scrollbar,scrollMargin,scrollMarginX,scrollMarginY,scrollMarginLeft,scrollMarginRight,scrollMarginTop,scrollMarginBottom,scrollMarginBlock,scrollMarginBlockEnd,scrollMarginBlockStart,scrollMarginInline,scrollMarginInlineEnd,scrollMarginInlineStart,scrollPadding,scrollPaddingBlock,scrollPaddingBlockStart,scrollPaddingBlockEnd,scrollPaddingInline,scrollPaddingInlineEnd,scrollPaddingInlineStart,scrollPaddingX,scrollPaddingY,scrollPaddingLeft,scrollPaddingRight,scrollPaddingTop,scrollPaddingBottom,scrollSnapAlign,scrollSnapStop,scrollSnapType,scrollSnapStrictness,scrollSnapMargin,scrollSnapMarginTop,scrollSnapMarginBottom,scrollSnapMarginLeft,scrollSnapMarginRight,touchAction,userSelect,fill,stroke,strokeWidth,srOnly,debug,appearance,backfaceVisibility,clipPath,hyphens,mask,maskImage,maskSize,textSizeAdjust,colorPalette,textStyle,_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_default,_optional,_open,_closed,_fullscreen,_loading,_currentPage,_currentStep,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,smToMd,smToLg,smToXl,smTo2xl,mdToLg,mdToXl,mdTo2xl,lgToXl,lgTo2xl,xlTo2xl", userGenerated = userGeneratedStr.split(","), cssPropertiesStr = "WebkitAppearance,WebkitBorderBefore,WebkitBorderBeforeColor,WebkitBorderBeforeStyle,WebkitBorderBeforeWidth,WebkitBoxReflect,WebkitLineClamp,WebkitMask,WebkitMaskAttachment,WebkitMaskClip,WebkitMaskComposite,WebkitMaskImage,WebkitMaskOrigin,WebkitMaskPosition,WebkitMaskPositionX,WebkitMaskPositionY,WebkitMaskRepeat,WebkitMaskRepeatX,WebkitMaskRepeatY,WebkitMaskSize,WebkitOverflowScrolling,WebkitTapHighlightColor,WebkitTextFillColor,WebkitTextStroke,WebkitTextStrokeColor,WebkitTextStrokeWidth,WebkitTouchCallout,WebkitUserModify,accentColor,alignContent,alignItems,alignSelf,alignTracks,all,animation,animationComposition,animationDelay,animationDirection,animationDuration,animationFillMode,animationIterationCount,animationName,animationPlayState,animationTimingFunction,animationTimeline,appearance,aspectRatio,azimuth,backdropFilter,backfaceVisibility,background,backgroundAttachment,backgroundBlendMode,backgroundClip,backgroundColor,backgroundImage,backgroundOrigin,backgroundPosition,backgroundPositionX,backgroundPositionY,backgroundRepeat,backgroundSize,blockOverflow,blockSize,border,borderBlock,borderBlockColor,borderBlockStyle,borderBlockWidth,borderBlockEnd,borderBlockEndColor,borderBlockEndStyle,borderBlockEndWidth,borderBlockStart,borderBlockStartColor,borderBlockStartStyle,borderBlockStartWidth,borderBottom,borderBottomColor,borderBottomLeftRadius,borderBottomRightRadius,borderBottomStyle,borderBottomWidth,borderCollapse,borderColor,borderEndEndRadius,borderEndStartRadius,borderImage,borderImageOutset,borderImageRepeat,borderImageSlice,borderImageSource,borderImageWidth,borderInline,borderInlineEnd,borderInlineColor,borderInlineStyle,borderInlineWidth,borderInlineEndColor,borderInlineEndStyle,borderInlineEndWidth,borderInlineStart,borderInlineStartColor,borderInlineStartStyle,borderInlineStartWidth,borderLeft,borderLeftColor,borderLeftStyle,borderLeftWidth,borderRadius,borderRight,borderRightColor,borderRightStyle,borderRightWidth,borderSpacing,borderStartEndRadius,borderStartStartRadius,borderStyle,borderTop,borderTopColor,borderTopLeftRadius,borderTopRightRadius,borderTopStyle,borderTopWidth,borderWidth,bottom,boxAlign,boxDecorationBreak,boxDirection,boxFlex,boxFlexGroup,boxLines,boxOrdinalGroup,boxOrient,boxPack,boxShadow,boxSizing,breakAfter,breakBefore,breakInside,captionSide,caret,caretColor,caretShape,clear,clip,clipPath,color,colorScheme,columnCount,columnFill,columnGap,columnRule,columnRuleColor,columnRuleStyle,columnRuleWidth,columnSpan,columnWidth,columns,contain,containIntrinsicSize,containIntrinsicBlockSize,containIntrinsicHeight,containIntrinsicInlineSize,containIntrinsicWidth,container,containerName,containerType,content,contentVisibility,counterIncrement,counterReset,counterSet,cursor,direction,display,emptyCells,filter,flex,flexBasis,flexDirection,flexFlow,flexGrow,flexShrink,flexWrap,float,font,fontFamily,fontFeatureSettings,fontKerning,fontLanguageOverride,fontOpticalSizing,fontPalette,fontVariationSettings,fontSize,fontSizeAdjust,fontSmooth,fontStretch,fontStyle,fontSynthesis,fontVariant,fontVariantAlternates,fontVariantCaps,fontVariantEastAsian,fontVariantEmoji,fontVariantLigatures,fontVariantNumeric,fontVariantPosition,fontWeight,forcedColorAdjust,gap,grid,gridArea,gridAutoColumns,gridAutoFlow,gridAutoRows,gridColumn,gridColumnEnd,gridColumnGap,gridColumnStart,gridGap,gridRow,gridRowEnd,gridRowGap,gridRowStart,gridTemplate,gridTemplateAreas,gridTemplateColumns,gridTemplateRows,hangingPunctuation,height,hyphenateCharacter,hyphenateLimitChars,hyphens,imageOrientation,imageRendering,imageResolution,imeMode,initialLetter,initialLetterAlign,inlineSize,inputSecurity,inset,insetBlock,insetBlockEnd,insetBlockStart,insetInline,insetInlineEnd,insetInlineStart,isolation,justifyContent,justifyItems,justifySelf,justifyTracks,left,letterSpacing,lineBreak,lineClamp,lineHeight,lineHeightStep,listStyle,listStyleImage,listStylePosition,listStyleType,margin,marginBlock,marginBlockEnd,marginBlockStart,marginBottom,marginInline,marginInlineEnd,marginInlineStart,marginLeft,marginRight,marginTop,marginTrim,mask,maskBorder,maskBorderMode,maskBorderOutset,maskBorderRepeat,maskBorderSlice,maskBorderSource,maskBorderWidth,maskClip,maskComposite,maskImage,maskMode,maskOrigin,maskPosition,maskRepeat,maskSize,maskType,masonryAutoFlow,mathDepth,mathShift,mathStyle,maxBlockSize,maxHeight,maxInlineSize,maxLines,maxWidth,minBlockSize,minHeight,minInlineSize,minWidth,mixBlendMode,objectFit,objectPosition,offset,offsetAnchor,offsetDistance,offsetPath,offsetPosition,offsetRotate,opacity,order,orphans,outline,outlineColor,outlineOffset,outlineStyle,outlineWidth,overflow,overflowAnchor,overflowBlock,overflowClipBox,overflowClipMargin,overflowInline,overflowWrap,overflowX,overflowY,overscrollBehavior,overscrollBehaviorBlock,overscrollBehaviorInline,overscrollBehaviorX,overscrollBehaviorY,padding,paddingBlock,paddingBlockEnd,paddingBlockStart,paddingBottom,paddingInline,paddingInlineEnd,paddingInlineStart,paddingLeft,paddingRight,paddingTop,page,pageBreakAfter,pageBreakBefore,pageBreakInside,paintOrder,perspective,perspectiveOrigin,placeContent,placeItems,placeSelf,pointerEvents,position,printColorAdjust,quotes,resize,right,rotate,rowGap,rubyAlign,rubyMerge,rubyPosition,scale,scrollbarColor,scrollbarGutter,scrollbarWidth,scrollBehavior,scrollMargin,scrollMarginBlock,scrollMarginBlockStart,scrollMarginBlockEnd,scrollMarginBottom,scrollMarginInline,scrollMarginInlineStart,scrollMarginInlineEnd,scrollMarginLeft,scrollMarginRight,scrollMarginTop,scrollPadding,scrollPaddingBlock,scrollPaddingBlockStart,scrollPaddingBlockEnd,scrollPaddingBottom,scrollPaddingInline,scrollPaddingInlineStart,scrollPaddingInlineEnd,scrollPaddingLeft,scrollPaddingRight,scrollPaddingTop,scrollSnapAlign,scrollSnapCoordinate,scrollSnapDestination,scrollSnapPointsX,scrollSnapPointsY,scrollSnapStop,scrollSnapType,scrollSnapTypeX,scrollSnapTypeY,scrollTimeline,scrollTimelineAxis,scrollTimelineName,shapeImageThreshold,shapeMargin,shapeOutside,tabSize,tableLayout,textAlign,textAlignLast,textCombineUpright,textDecoration,textDecorationColor,textDecorationLine,textDecorationSkip,textDecorationSkipInk,textDecorationStyle,textDecorationThickness,textEmphasis,textEmphasisColor,textEmphasisPosition,textEmphasisStyle,textIndent,textJustify,textOrientation,textOverflow,textRendering,textShadow,textSizeAdjust,textTransform,textUnderlineOffset,textUnderlinePosition,top,touchAction,transform,transformBox,transformOrigin,transformStyle,transition,transitionDelay,transitionDuration,transitionProperty,transitionTimingFunction,translate,unicodeBidi,userSelect,verticalAlign,viewTransitionName,visibility,whiteSpace,widows,width,willChange,wordBreak,wordSpacing,wordWrap,writingMode,zIndex,zoom,alignmentBaseline,baselineShift,clipRule,colorInterpolation,colorRendering,dominantBaseline,fill,fillOpacity,fillRule,floodColor,floodOpacity,glyphOrientationVertical,lightingColor,marker,markerEnd,markerMid,markerStart,shapeRendering,stopColor,stopOpacity,stroke,strokeDasharray,strokeDashoffset,strokeLinecap,strokeLinejoin,strokeMiterlimit,strokeOpacity,strokeWidth,textAnchor,vectorEffect", allCssProperties = cssPropertiesStr.split(",").concat(userGenerated), properties = new Map(allCssProperties.map((prop) => [prop, !0])), cssPropertySelectorRegex = /&|@/, isCssProperty = /* @__PURE__ */ memo((prop) => properties.has(prop) || prop.startsWith("--") || cssPropertySelectorRegex.test(prop));

// styled-system/jsx/factory-helper.js
var defaultShouldForwardProp = (prop, variantKeys) => !variantKeys.includes(prop) && !isCssProperty(prop), composeShouldForwardProps = (tag, shouldForwardProp) => tag.__shouldForwardProps__ && shouldForwardProp ? (propName) => tag.__shouldForwardProps__(propName) && shouldForwardProp(propName) : shouldForwardProp, composeCvaFn = (cvaA, cvaB) => {
  if (cvaA && !cvaB)
    return cvaA;
  if (!cvaA && cvaB)
    return cvaB;
  if (cvaA.__cva__ && cvaB.__cva__ || cvaA.__recipe__ && cvaB.__recipe__)
    return cvaA.merge(cvaB);
  let error = new TypeError("Cannot merge cva with recipe. Please use either cva or recipe.");
  throw TypeError.captureStackTrace?.(error), error;
}, getDisplayName = (Component) => typeof Component == "string" ? Component : Component?.displayName || Component?.name || "Component";

// styled-system/jsx/factory.js
function styledFn(Dynamic, configOrCva = {}, options = {}) {
  let cvaFn = configOrCva.__cva__ || configOrCva.__recipe__ ? configOrCva : cva(configOrCva), forwardFn = options.shouldForwardProp || defaultShouldForwardProp, shouldForwardProp = (prop) => forwardFn(prop, cvaFn.variantKeys), defaultProps = Object.assign(
    options.dataAttr && configOrCva.__name__ ? { "data-recipe": configOrCva.__name__ } : {},
    options.defaultProps
  ), StyledComponent = /* @__PURE__ */ forwardRef(function(props, ref) {
    let { as: Element = Dynamic.__base__ || Dynamic, children, ...restProps } = props, __cvaFn__ = composeCvaFn(Dynamic.__cva__, cvaFn), __shouldForwardProps__ = composeShouldForwardProps(Dynamic, shouldForwardProp), combinedProps = useMemo(() => Object.assign({}, defaultProps, restProps), [restProps]), [htmlProps2, forwardedProps, variantProps, styleProps, elementProps] = useMemo(() => splitProps(combinedProps, normalizeHTMLProps.keys, __shouldForwardProps__, __cvaFn__.variantKeys, isCssProperty), [combinedProps]);
    function recipeClass() {
      let { css: cssStyles, ...propStyles } = styleProps, compoundVariantStyles = __cvaFn__.__getCompoundVariantCss__?.(variantProps);
      return cx(__cvaFn__(variantProps, !1), css(compoundVariantStyles, propStyles, cssStyles), combinedProps.className);
    }
    function cvaClass() {
      let { css: cssStyles, ...propStyles } = styleProps, cvaStyles = __cvaFn__.raw(variantProps);
      return cx(css(cvaStyles, propStyles, cssStyles), combinedProps.className);
    }
    let classes3 = configOrCva.__recipe__ ? recipeClass : cvaClass;
    return createElement(Element, {
      ref,
      ...forwardedProps,
      ...elementProps,
      ...normalizeHTMLProps(htmlProps2),
      className: classes3()
    }, combinedProps.children ?? children);
  }), name = getDisplayName(Dynamic);
  return StyledComponent.displayName = `styled.${name}`, StyledComponent.__cva__ = cvaFn, StyledComponent.__base__ = Dynamic, StyledComponent.__shouldForwardProps__ = shouldForwardProp, StyledComponent;
}
function createJsxFactory() {
  let cache = /* @__PURE__ */ new Map();
  return new Proxy(styledFn, {
    apply(_, __, args) {
      return styledFn(...args);
    },
    get(_, el) {
      return cache.has(el) || cache.set(el, styledFn(el)), cache.get(el);
    }
  });
}
var styled = /* @__PURE__ */ createJsxFactory();

// app/components/component.tsx
var component_default = styled("div");
var button_default = styled((props) => /* @__PURE__ */ jsxDEV(component_default, { as: "button", ...props }, void 0, !1, {
  fileName: "app/components/button.tsx",
  lineNumber: 4,
  columnNumber: 34
}, undefined));
var config2 = { runtime: "edge" }, meta = () => [{ title: "ProxyList - Home" }], headers = (headers2) => ({
  "Cache-Control": headers2.loaderHeaders.get("Cache-Control"),
  ETag: headers2.loaderHeaders.get("ETag")
}), loader = ({
  request,
  context: context2,
  params
}) => (0, runtime_server_exports.defer)(
  {
    myData: new Promise((res) => {
      setTimeout(
        () => res({
          myData: [1, 2, 3, 4, 5, 6]
        }),
        800
      );
    })
  }
);
function Index() {
  let { myData } = useLoaderData(), fetcher = useFetcher();
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(component_default, { children: "Hello" }, void 0, !1, {
      fileName: "app/routes/_base._index.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Suspense, { fallback: /* @__PURE__ */ jsxDEV("p", { children: "...Loading" }, void 0, !1, {
      fileName: "app/routes/_base._index.tsx",
      lineNumber: 57,
      columnNumber: 27
    }, this), children: /* @__PURE__ */ jsxDEV(Await, { resolve: myData, children: (myData2) => /* @__PURE__ */ jsxDEV("p", { children: JSON.stringify(myData2) }, void 0, !1, {
      fileName: "app/routes/_base._index.tsx",
      lineNumber: 59,
      columnNumber: 24
    }, this) }, void 0, !1, {
      fileName: "app/routes/_base._index.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_base._index.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Link, { to: "/", children: "Self" }, void 0, !1, {
      fileName: "app/routes/_base._index.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("a", { href: "/", children: "Refresh" }, void 0, !1, {
      fileName: "app/routes/_base._index.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(fetcher.Form, { method: "post", action: "/test", children: /* @__PURE__ */ jsxDEV(button_default, { type: "submit", width: "200px", backgroundColor: "red", mt: 4, children: "Invalidate Cache" }, void 0, !1, {
      fileName: "app/routes/_base._index.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_base._index.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_base._index.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

// app/routes/_base/route.tsx
var route_exports = {};
__export(route_exports, {
  config: () => config3,
  default: () => App2,
  meta: () => meta2
});
function Container({
  children,
  center = !0,
  fluid = !1,
  className
}) {
  return /* @__PURE__ */ jsxDEV(
    component_default,
    {
      className: cx("container", fluid ? void 0 : classes.root, className),
      margin: center ? "0 auto" : "0px",
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/container.tsx",
      lineNumber: 17,
      columnNumber: 5
    },
    this
  );
}
var classes = {
  root: css({
    maxWidth: {
      sm: "token(sizes.breakpoint-sm)",
      md: "token(sizes.breakpoint-md)",
      lg: "token(sizes.breakpoint-lg)",
      xl: "token(sizes.breakpoint-xl)",
      "2xl": "token(sizes.breakpoint-2xl)"
    }
    // boxShadow: "token(shadows.sm)"
  })
};
var Footer = () => /* @__PURE__ */ jsxDEV(component_default, { as: "footer", children: "Footer" }, void 0, !1, {
  fileName: "app/routes/_base/footer.tsx",
  lineNumber: 5,
  columnNumber: 3
}, undefined);
Footer.displayName = "Footer";
var footer_default = Footer;
var Header = () => /* @__PURE__ */ jsxDEV(component_default, { as: "header", display: "flex", justifyContent: "space-between", children: [
  /* @__PURE__ */ jsxDEV(Link, { to: "/", children: /* @__PURE__ */ jsxDEV(component_default, { as: "h1", children: "ProxyList" }, void 0, !1, {
    fileName: "app/routes/_base/header.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, undefined) }, void 0, !1, {
    fileName: "app/routes/_base/header.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, undefined),
  /* @__PURE__ */ jsxDEV(Form, { method: "GET", action: "/login", children: /* @__PURE__ */ jsxDEV(button_default, { type: "submit", children: "Login" }, void 0, !1, {
    fileName: "app/routes/_base/header.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, undefined) }, void 0, !1, {
    fileName: "app/routes/_base/header.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, undefined)
] }, void 0, !0, {
  fileName: "app/routes/_base/header.tsx",
  lineNumber: 7,
  columnNumber: 3
}, undefined);
Header.displayName = "Header";
var header_default = Header;
var config3 = { runtime: "edge" }, meta2 = () => [{ title: "ProxyList" }];
function App2() {
  return /* @__PURE__ */ jsxDEV(Container, { className: classes2.container, children: [
    /* @__PURE__ */ jsxDEV(header_default, {}, void 0, !1, {
      fileName: "app/routes/_base/route.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: classes2.main, children: /* @__PURE__ */ jsxDEV(Outlet, {}, void 0, !1, {
      fileName: "app/routes/_base/route.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_base/route.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(footer_default, {}, void 0, !1, {
      fileName: "app/routes/_base/route.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_base/route.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
var classes2 = {
  container: css({ height: "100%", padding: "4rem 2rem" }),
  main: css({
    padding: "2rem 0rem",
    height: "100%"
  })
};

// app/routes/test.ts
var test_exports = {};
__export(test_exports, {
  action: () => action
});
async function action({ request, params }) {
  return (0, runtime_server_exports.json)(
    {},
    {
      status: 200,
      headers: {
        Location: "/?_data=routes/_base._index",
        "Content-Location": "/?_data=routes/_base._index"
      }
    }
  );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/web-build/entry.client-EYSU3X4S.js", imports: ["/web-build/_shared/chunk-MTQCEVDR.js", "/web-build/_shared/chunk-TX4Z5MKK.js", "/web-build/_shared/chunk-CYX77SAR.js", "/web-build/_shared/chunk-3WWGPOW6.js", "/web-build/_shared/chunk-3ZPYNNDY.js", "/web-build/_shared/chunk-XRNTFBSK.js", "/web-build/_shared/chunk-GGJ6JYPR.js", "/web-build/_shared/chunk-P43HLL2N.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/web-build/root-HSC7DHWS.js", imports: ["/web-build/_shared/chunk-BYYZ3FTR.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_base": { id: "routes/_base", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/web-build/routes/_base-DCR3IUSX.js", imports: ["/web-build/_shared/chunk-YIRP5TTX.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_base._index": { id: "routes/_base._index", parentId: "routes/_base", path: void 0, index: !0, caseSensitive: void 0, module: "/web-build/routes/_base._index-ORXHIWQB.js", imports: ["/web-build/_shared/chunk-BYYZ3FTR.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/test": { id: "routes/test", parentId: "root", path: "test", index: void 0, caseSensitive: void 0, module: "/web-build/routes/test-ZQ44Z5QO.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 } }, version: "12fdfb1b", hmr: { runtime: "/web-build/_shared/chunk-XRNTFBSK.js", timestamp: 1703766766121 }, url: "/web-build/manifest-12FDFB1B.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "./public/web-build", future = {}, publicPath = "/web-build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_base._index": {
    id: "routes/_base._index",
    parentId: "routes/_base",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: base_index_exports
  },
  "routes/_base": {
    id: "routes/_base",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: route_exports
  },
  "routes/test": {
    id: "routes/test",
    parentId: "root",
    path: "test",
    index: void 0,
    caseSensitive: void 0,
    module: test_exports
  }
};

const build = /*#__PURE__*/Object.freeze({
  __proto__: null,
  assets: assets_manifest_default,
  assetsBuildDirectory: assetsBuildDirectory,
  entry: entry,
  future: future,
  mode: mode,
  publicPath: publicPath,
  routes: routes
});

const index = eventHandler(async (event) => {
  return createRequestHandler(build)(
    toWebRequest(event),
    event.context
  );
});

const index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index
});
//# sourceMappingURL=index.mjs.map
