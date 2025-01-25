declare module "@nooobtimex/gamepadwrapper" {
  export interface GamepadState {
    id: string;
    index: number;
    buttons: { value: number; pressed: boolean; name: string }[];
    leftStick: { x: number; y: number };
    rightStick: { x: number; y: number };
    mapping?: string;
    connected: boolean;
    pose?: {
      hasOrientation: boolean;
      orientation: number[];
      hasPosition: boolean;
      position: number[];
    };
    hapticActuators?: any[];
    hand?: string;
    displayId?: string;
  }

  interface ButtonMapping {
    index: number;
    name: string;
  }

  interface GamepadManagerOptions {
    deadZone?: number;
    precision?: number;
  }

  export class GamepadManager {
    constructor(
      onUpdate?: (gamepads: Record<number, GamepadState>) => void,
      options?: GamepadManagerOptions
    );
    start(): void;
    stop(): void;
    setButtonMapping(
      gamepadId: string,
      mappingType: "custom" | "preset",
      mapping: Record<number, ButtonMapping>
    ): void;
    setVibration(
      gamepadIndex: number,
      intensity: number,
      type: "soft" | "hard"
    ): void;
  }
}
