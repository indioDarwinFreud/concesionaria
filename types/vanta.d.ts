declare module "vanta" {
  export interface VantaEffect {
    destroy(): void;
  }
}

declare module "vanta/dist/vanta.net.min" {
  import { VantaEffect } from "vanta";
  const NET: (options: object) => VantaEffect;
  export default NET;
}
