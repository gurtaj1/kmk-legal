declare module "lenis/dist/lenis-react" {
  import { ComponentType, ReactNode } from "react";

  interface LenisProps {
    children: ReactNode;
    root?: boolean;
    options?: any;
  }

  export const ReactLenis: ComponentType<LenisProps>;
}
