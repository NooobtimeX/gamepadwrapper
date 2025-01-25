declare module "@nooobtimex/gamepadwrapper" {
  // Define your types here
  export class GamepadManager {
    gamepads: Record<number, any>;
    animationFrameId: number | null;
    onUpdate: (gamepads: Record<number, any>) => void;
    deadZone: number;
    precision: number;
    vibrationDuration: number;

    constructor(
      onUpdate: (gamepads: Record<number, any>) => void,
      options?: { deadZone?: number; precision?: number }
    );

    start(): void;
    stop(): void;
    setButtonMapping(
      gamepadId: string,
      mappingType: string,
      mapping: any
    ): void;
    setVibration(
      gamepadIndex: number,
      intensity: number,
      type: "soft" | "hard"
    ): void;
  }

  export type GamepadState = {
    id: string;
    index: number;
    buttons: { value: number; pressed: boolean; name?: string }[];
    leftStick: { x: number; y: number };
    rightStick: { x: number; y: number };
    mapping: string;
    connected: boolean;
    pose?: GamepadPose;
    hapticActuators?: GamepadHapticActuator[];
    hand?: string;
    displayId?: string;
  };

  export type GamepadPose = {
    hasOrientation: boolean;
    orientation: [number, number, number, number];
    hasPosition: boolean;
    position: [number, number, number];
  };

  export type GamepadHapticActuator = {
    type: string;
    active: boolean;
    intensity: number;
  };
}
