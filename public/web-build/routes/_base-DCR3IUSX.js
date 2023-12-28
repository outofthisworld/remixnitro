import {
  button_default,
  component_default,
  cx
} from "/web-build/_shared/chunk-YIRP5TTX.js";
import {
  css
} from "/web-build/_shared/chunk-BYYZ3FTR.js";
import {
  Form,
  Link,
  Outlet
} from "/web-build/_shared/chunk-CYX77SAR.js";
import {
  require_jsx_dev_runtime
} from "/web-build/_shared/chunk-3WWGPOW6.js";
import "/web-build/_shared/chunk-3ZPYNNDY.js";
import {
  createHotContext
} from "/web-build/_shared/chunk-XRNTFBSK.js";
import "/web-build/_shared/chunk-GGJ6JYPR.js";
import {
  __toESM
} from "/web-build/_shared/chunk-P43HLL2N.js";

// app/components/container.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/container.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/container.tsx"
  );
  import.meta.hot.lastModified = "1703570771569.5913";
}
function Container({
  children,
  center = true,
  fluid = false,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(component_default, { className: cx("container", !fluid ? classes.root : void 0, className), margin: center ? "0 auto" : "0px", children }, void 0, false, {
    fileName: "app/components/container.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c = Container;
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
var _c;
$RefreshReg$(_c, "Container");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_base/footer.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_base/footer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_base/footer.tsx"
  );
  import.meta.hot.lastModified = "1703570386938.4797";
}
var Footer = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(component_default, { as: "footer", children: "Footer" }, void 0, false, {
  fileName: "app/routes/_base/footer.tsx",
  lineNumber: 22,
  columnNumber: 22
}, this);
_c2 = Footer;
Footer.displayName = "Footer";
var footer_default = Footer;
var _c2;
$RefreshReg$(_c2, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_base/header.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_base/header.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_base/header.tsx"
  );
  import.meta.hot.lastModified = "1703585428712.3528";
}
var Header = () => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(component_default, { as: "header", display: "flex", justifyContent: "space-between", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(component_default, { as: "h1", children: "ProxyList" }, void 0, false, {
    fileName: "app/routes/_base/header.tsx",
    lineNumber: 26,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/_base/header.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form, { method: "GET", action: "/login", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(button_default, { type: "submit", children: "Login" }, void 0, false, {
    fileName: "app/routes/_base/header.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_base/header.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/routes/_base/header.tsx",
  lineNumber: 24,
  columnNumber: 22
}, this);
_c3 = Header;
Header.displayName = "Header";
var header_default = Header;
var _c3;
$RefreshReg$(_c3, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_base/route.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_base/route.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_base/route.tsx"
  );
  import.meta.hot.lastModified = "1703590187142.5647";
}
var meta = () => [{
  title: "ProxyList"
}];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Container, { className: classes2.container, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(header_default, {}, void 0, false, {
      fileName: "app/routes/_base/route.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { className: classes2.main, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/_base/route.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_base/route.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(footer_default, {}, void 0, false, {
      fileName: "app/routes/_base/route.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_base/route.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_c4 = App;
var classes2 = {
  container: css({
    height: "100%",
    padding: "4rem 2rem"
  }),
  main: css({
    padding: "2rem 0rem",
    height: "100%"
  })
};
var _c4;
$RefreshReg$(_c4, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  meta
};
//# sourceMappingURL=/web-build/routes/_base-DCR3IUSX.js.map
