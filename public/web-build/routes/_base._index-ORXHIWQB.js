import {
  button_default,
  component_default
} from "/web-build/_shared/chunk-YIRP5TTX.js";
import "/web-build/_shared/chunk-BYYZ3FTR.js";
import {
  Await,
  Link,
  useFetcher,
  useLoaderData
} from "/web-build/_shared/chunk-CYX77SAR.js";
import {
  require_jsx_dev_runtime
} from "/web-build/_shared/chunk-3WWGPOW6.js";
import {
  require_react
} from "/web-build/_shared/chunk-3ZPYNNDY.js";
import {
  createHotContext
} from "/web-build/_shared/chunk-XRNTFBSK.js";
import "/web-build/_shared/chunk-GGJ6JYPR.js";
import {
  __commonJS,
  __toESM
} from "/web-build/_shared/chunk-P43HLL2N.js";

// empty-module:~/runtime.server
var require_runtime = __commonJS({
  "empty-module:~/runtime.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/_base._index.tsx
var import_runtime = __toESM(require_runtime(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_base._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_base._index.tsx"
  );
  import.meta.hot.lastModified = "1703652900605.5874";
}
var meta = () => {
  return [{
    title: "ProxyList - Home"
  }];
};
function Index() {
  _s();
  const {
    myData
  } = useLoaderData();
  const fetcher = useFetcher();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, { children: "Hello" }, void 0, false, {
      fileName: "app/routes/_base._index.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "...Loading" }, void 0, false, {
      fileName: "app/routes/_base._index.tsx",
      lineNumber: 64,
      columnNumber: 27
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Await, { resolve: myData, children: (myData2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: JSON.stringify(myData2) }, void 0, false, {
      fileName: "app/routes/_base._index.tsx",
      lineNumber: 66,
      columnNumber: 22
    }, this) }, void 0, false, {
      fileName: "app/routes/_base._index.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_base._index.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: "Self" }, void 0, false, {
      fileName: "app/routes/_base._index.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/", children: "Refresh" }, void 0, false, {
      fileName: "app/routes/_base._index.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { method: "post", action: "/test", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, { type: "submit", width: "200px", backgroundColor: "red", mt: 4, children: "Invalidate Cache" }, void 0, false, {
      fileName: "app/routes/_base._index.tsx",
      lineNumber: 72,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_base._index.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_base._index.tsx",
    lineNumber: 62,
    columnNumber: 10
  }, this);
}
_s(Index, "dQsbPc8xtd543oXd0tEqDxcr0ZI=", false, function() {
  return [useLoaderData, useFetcher];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/web-build/routes/_base._index-ORXHIWQB.js.map
