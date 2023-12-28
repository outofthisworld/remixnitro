import { Outlet } from "@remix-run/react";
import { css } from "@styled-system/css";
import Container from "~/components/container";
import type { MetaFunction } from "~/runtime.server";
import Footer from "./footer";
import Header from "./header";

export const meta: MetaFunction = () => [{ title: "ProxyList" }];

export default function App() {
  return (
    <Container className={classes.container}>
      <Header />
      <main className={classes.main}>
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
}

const classes = {
  container: css({ height: "100%", padding: "4rem 2rem" }),
  main: css({
    padding: "2rem 0rem",
    height: "100%",
  }),
};
