import { css, cx } from "@styled-system/css";
import { ReactNode } from "react";
import Component from "./component";

export default function Container({
  children,
  center = true,
  fluid = false,
  className,
}: {
  children: ReactNode;
  center?: boolean;
  className?: string;
  fluid?: boolean;
}) {
  return (
    <Component
      className={cx("container", !fluid ? classes.root : undefined, className)}
      margin={center ? "0 auto" : "0px"}
    >
      {children}
    </Component>
  );
}

const classes = {
  root: css({
    maxWidth: {
      sm: "token(sizes.breakpoint-sm)",
      md: "token(sizes.breakpoint-md)",
      lg: "token(sizes.breakpoint-lg)",
      xl: "token(sizes.breakpoint-xl)",
      "2xl": "token(sizes.breakpoint-2xl)",
    },
    // boxShadow: "token(shadows.sm)"
  }),
};
