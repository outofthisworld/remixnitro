import { FunctionComponent } from "react";
import Component from "~/components/component";

const Footer: FunctionComponent<{}> = () => (
  <Component as="footer">Footer</Component>
);

Footer.displayName = "Footer";

export default Footer;
