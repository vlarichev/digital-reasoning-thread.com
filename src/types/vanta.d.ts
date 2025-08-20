export interface VantaEffect {
  destroy: () => void;
}

declare module 'vanta/dist/vanta.net.min' {
  interface VantaNetOptions {
    el: HTMLElement;
    THREE: typeof import('three');
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

  const VANTA: (options: VantaNetOptions) => VantaEffect;
  export default VANTA;
}
