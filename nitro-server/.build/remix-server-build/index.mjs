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
import { RemixServer } from "@remix-run/react";

// app/runtime.server.ts
var runtime_server_exports = {};
__export(runtime_server_exports, {
  default: () => default2
});
__reExport(runtime_server_exports, remix_star);
import * as remix_star from "@vercel/remix";
import { default as default2 } from "@vercel/remix";

// app/helpers.server.ts
import { createHash } from "etag-hash";
import { filterXSS } from "xss";
var withETag = async (request, response, { chunkSizeMb } = { chunkSizeMb: 5 }) => {
  if (!(response instanceof Response) || !(request instanceof Request) || request.method !== "GET" || !response.body)
    return response;
  let hash = createHash(chunkSizeMb), reader = response.clone().body.getReader(), data;
  for (; (data = await reader.read()) && !data.done; )
    hash.update(data.value);
  let tag = `"${hash.digest()}"`;
  return request.headers.get("If-None-Match") === tag ? new Response(null, { status: 304, statusText: "Not Modified" }) : (response.headers.set("ETag", tag), response);
};

// app/entry.server.tsx
import { jsxDEV } from "react/jsx-dev-runtime";
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
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";

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

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var config = { runtime: "edge" }, links = () => [
  { rel: "preload", href: app_default, as: "style" },
  { rel: "stylesheet", href: app_default },
  void 0 ? { rel: "preload", href: void 0, as: "style" } : void 0,
  void 0 ? { rel: "stylesheet", href: void 0 } : void 0,
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
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "author", content: "A kiwi developer in incognito mode." }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(
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
      /* @__PURE__ */ jsxDEV2(
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
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { className: root, children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Analytics, {}, void 0, !1, {
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
import { Await, Link, useFetcher, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";

// styled-system/jsx/factory.js
import { createElement, forwardRef, useMemo } from "react";

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

// app/components/button.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var button_default = styled((props) => /* @__PURE__ */ jsxDEV3(component_default, { as: "button", ...props }, void 0, !1, {
  fileName: "app/components/button.tsx",
  lineNumber: 4,
  columnNumber: 34
}, this));

// app/routes/_base._index.tsx
import { Fragment, jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
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
  return /* @__PURE__ */ jsxDEV4(Fragment, { children: [
    /* @__PURE__ */ jsxDEV4(component_default, { children: "Hello" }, void 0, !1, {
      fileName: "app/routes/_base._index.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4(Suspense, { fallback: /* @__PURE__ */ jsxDEV4("p", { children: "...Loading" }, void 0, !1, {
      fileName: "app/routes/_base._index.tsx",
      lineNumber: 57,
      columnNumber: 27
    }, this), children: /* @__PURE__ */ jsxDEV4(Await, { resolve: myData, children: (myData2) => /* @__PURE__ */ jsxDEV4("p", { children: JSON.stringify(myData2) }, void 0, !1, {
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
    /* @__PURE__ */ jsxDEV4(Link, { to: "/", children: "Self" }, void 0, !1, {
      fileName: "app/routes/_base._index.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("a", { href: "/", children: "Refresh" }, void 0, !1, {
      fileName: "app/routes/_base._index.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4(fetcher.Form, { method: "post", action: "/test", children: /* @__PURE__ */ jsxDEV4(button_default, { type: "submit", width: "200px", backgroundColor: "red", mt: 4, children: "Invalidate Cache" }, void 0, !1, {
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
import { Outlet as Outlet2 } from "@remix-run/react";

// app/components/container.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function Container({
  children,
  center = !0,
  fluid = !1,
  className
}) {
  return /* @__PURE__ */ jsxDEV5(
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

// app/routes/_base/footer.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var Footer = () => /* @__PURE__ */ jsxDEV6(component_default, { as: "footer", children: "Footer" }, void 0, !1, {
  fileName: "app/routes/_base/footer.tsx",
  lineNumber: 5,
  columnNumber: 3
}, this);
Footer.displayName = "Footer";
var footer_default = Footer;

// app/routes/_base/header.tsx
import { Form, Link as Link2 } from "@remix-run/react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var Header = () => /* @__PURE__ */ jsxDEV7(component_default, { as: "header", display: "flex", justifyContent: "space-between", children: [
  /* @__PURE__ */ jsxDEV7(Link2, { to: "/", children: /* @__PURE__ */ jsxDEV7(component_default, { as: "h1", children: "ProxyList" }, void 0, !1, {
    fileName: "app/routes/_base/header.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/_base/header.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV7(Form, { method: "GET", action: "/login", children: /* @__PURE__ */ jsxDEV7(button_default, { type: "submit", children: "Login" }, void 0, !1, {
    fileName: "app/routes/_base/header.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_base/header.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/_base/header.tsx",
  lineNumber: 7,
  columnNumber: 3
}, this);
Header.displayName = "Header";
var header_default = Header;

// app/routes/_base/route.tsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var config3 = { runtime: "edge" }, meta2 = () => [{ title: "ProxyList" }];
function App2() {
  return /* @__PURE__ */ jsxDEV8(Container, { className: classes2.container, children: [
    /* @__PURE__ */ jsxDEV8(header_default, {}, void 0, !1, {
      fileName: "app/routes/_base/route.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8("main", { className: classes2.main, children: /* @__PURE__ */ jsxDEV8(Outlet2, {}, void 0, !1, {
      fileName: "app/routes/_base/route.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_base/route.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8(footer_default, {}, void 0, !1, {
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
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.mjs.map
