import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import type { LinkDescriptor, LinksFunction } from "~/runtime.server";
import styles from "./index.css";
import * as classes from './root.classes';

export const config = { runtime: "edge" };

export const links: LinksFunction = () => {
  return [
    { rel: "preload", href: styles, as: "style" },
    { rel: "stylesheet", href: styles },
    cssBundleHref
      ? { rel: "preload", href: cssBundleHref, as: "style" }
      : undefined,
    cssBundleHref ? { rel: "stylesheet", href: cssBundleHref! } : undefined,
    { rel: "mask-icon", href: "/favicons/mask-icon.svg" },
    {
      rel: "alternate icon",
      type: "image/png",
      href: "/favicons/favicon-32x32.png",
    },
    { rel: "apple-touch-icon", href: "/favicons/apple-touch-icon.png" },
    {
      rel: "manifest",
      href: "/site.webmanifest",
      crossOrigin: "use-credentials",
    } as const, // necessary to make typescript happy
    //These should match the css preloads above to avoid css as render blocking resource
    { rel: "icon", type: "image/svg+xml", href: "/favicons/favicon.svg" },
  ].filter(Boolean) as LinkDescriptor[];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="A kiwi developer in incognito mode." />
        <meta
          name="description"
          content="ProxyList. Find all the proxies you need. Http(s), Socks4 & Socks5."
        />
        <meta
          name="keywords"
          content="Http, Https, Socks4, Socks5, Proxy, ProxyList, Proxies, Anonymous, Hide, I.P, IP, Address, Incognito, VPN, Virtual, Private, Network, Virtual Private Network, Stealth, Hidden"
        />
        <Meta />
        <Links />
      </head>
      <body className={classes.root}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Analytics />
      </body>
    </html>
  );
}
