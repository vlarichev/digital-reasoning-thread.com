declare module 'vanta/dist/vanta.net.min' {
  import { Object3D } from 'three';

  interface VantaNetOptions {
    el: HTMLElement;
    THREE: any;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    points?: number;
    maxDistance?: number;
    spacing?: number;
    showDots?: boolean;
    backgroundColor?: number;
    color?: number;
  }

  interface VantaEffect {
    destroy: () => void;
  }

  function VANTA(options: VantaNetOptions): VantaEffect;
  export default VANTA;
}
