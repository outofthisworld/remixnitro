import { styled } from "../../styled-system/jsx";

declare global {
  namespace JSX {
    export interface IntrinsicAttributes{
      as?: string;
    }
  }
}

export default styled("div");
