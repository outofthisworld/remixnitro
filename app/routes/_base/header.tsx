import { Form, Link } from "@remix-run/react";
import { FunctionComponent } from "react";
import Button from "~/components/button";
import Component from "~/components/component";

const Header: FunctionComponent<{}> = () => (
  <Component as="header" display="flex" justifyContent="space-between">
    <Link to="/">
        <Component as="h1">ProxyList</Component>
    </Link>
    <Form method="GET" action="/login">
      <Button type="submit">Login</Button>
    </Form>
  </Component>
);

Header.displayName = "Header";

export default Header;
