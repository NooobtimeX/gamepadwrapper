// @types/gamepadwrapper.d.ts

export interface ExtendedGamepad extends Gamepad {
  pose?: GamepadPose;
  hapticActuators?: GamepadHapticActuator[];
  hand?: string;
  displayId?: string;
}

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

export type GamepadState = {
  id: string;
  index: number;
  timestamp: number;
  buttons: {
    value: number;
    pressed: boolean;
    name?: string;
    touched?: boolean;
  }[];
  leftStick: { x: number; y: number };
  rightStick: { x: number; y: number };
  mapping: string;
  connected: boolean;
  pose?: GamepadPose;
  hapticActuators?: GamepadHapticActuator[];
  hand?: string;
  displayId?: string;
  rawAxes?: number[];
  vibrationActuator?: any;
};

export type GamepadUpdateCallback = (
  gamepads: Record<number, GamepadState>
) => void;

export type ButtonEvent = {
  gamepadIndex: number;
  buttonIndex: number;
  pressed: boolean;
  value?: number;
  name?: string;
};

export type AxisEvent = {
  gamepadIndex: number;
  axisIndex: number;
  value: number;
};

export type MultiButtonPressEvent = {
  gamepadIndex: number;
  buttonIndices: number[];
  pressed: boolean;
  duration?: number;
};

export class GamepadManager {
  constructor(
    onUpdate?: GamepadUpdateCallback,
    options?: { deadZone?: number; precision?: number }
  );
  start(): void;
  stop(): void;
  setButtonMapping(
    gamepadId: string,
    mappingType: "custom" | "preset",
    mapping: Record<number, { index: number; name: string }>
  ): void;
  setVibration(
    gamepadIndex: number,
    intensity: number,
    type: "soft" | "hard"
  ): void;
}
