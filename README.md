# GamepadManager

`GamepadManager` is a TypeScript class that simplifies the process of managing gamepads in the browser using the Gamepad API. It provides features for gamepad state tracking, dead zone handling, custom button mappings, vibration control, and more. This implementation is perfect for projects requiring gamepad input such as games, simulations, or interactive web applications.

## Features

- **Gamepad State Tracking**: Continuously monitor connected gamepads and their state.
- **Custom Button Mapping**: Map button indices to meaningful names for different controllers.
- **Dead Zone Handling**: Configure dead zones for analog sticks to avoid unintentional drift.
- **Haptic Feedback**: Control gamepad vibration with configurable intensity and duration.
- **Automatic Connection Handling**: Detect and manage gamepad connection and disconnection events.

---

## Installation

Ensure you have TypeScript set up in your project. Then, add the `GamepadManager` class to your project files.

---

## Usage

### Import and Instantiate

```typescript
import { GamepadManager } from "./GamepadManager";

const manager = new GamepadManager(
  (gamepads) => {
    console.log("Gamepads updated:", gamepads);
  },
  {
    deadZone: 0.1,
    precision: 2,
  }
);
```

### Start and Stop

Start and stop the `GamepadManager` to manage the gamepads.

```typescript
manager.start(); // Start tracking gamepads
manager.stop(); // Stop tracking gamepads
```

### Set Custom Button Mapping

You can provide custom button mappings for specific gamepads.

```typescript
manager.setButtonMapping("xbox", "preset", {
  0: { index: 0, name: "A" },
  1: { index: 1, name: "B" },
  2: { index: 2, name: "X" },
  3: { index: 3, name: "Y" },
});
```

### Set Vibration

Control the vibration of a gamepad.

```typescript
manager.setVibration(0, 0.8, "soft"); // Vibrate gamepad 0 with 80% intensity in soft mode
```

---

## GamepadManager API

### Constructor

```typescript
constructor(
  onUpdate: GamepadUpdateCallback,
  options?: { deadZone?: number; precision?: number }
)
```

- **`onUpdate`** _(required)_: A callback function triggered whenever gamepad states are updated.
- **`options.deadZone`** _(optional)_: Threshold for dead zone filtering. Default is `0.1`.
- **`options.precision`** _(optional)_: Number of decimal places for stick values. Default is `2`.

### Methods

#### `start()`

Start tracking gamepads and register event listeners for `gamepadconnected` and `gamepaddisconnected`.

#### `stop()`

Stop tracking gamepads and remove event listeners.

#### `setButtonMapping(gamepadId: string, mappingType: 'custom' | 'preset', mapping: Record<number, { index: number; name: string }>)`

Set button mappings for a specific gamepad.

- **`gamepadId`**: The ID of the gamepad.
- **`mappingType`**: `'custom'` for custom mappings or `'preset'` for predefined mappings.
- **`mapping`**: An object mapping button indices to `{ index: number; name: string }`.

#### `setVibration(gamepadIndex: number, intensity: number, type: 'soft' | 'hard')`

Control the vibration of a gamepad.

- **`gamepadIndex`**: The index of the gamepad.
- **`intensity`**: A value between `0` and `1` representing vibration intensity.
- **`type`**: `'soft'` or `'hard'` vibration type.

---

## Internal Methods

### `mapGamepadState(gamepad: ExtendedGamepad): GamepadState`

Maps the raw gamepad object to a structured `GamepadState` object.

### `applyDeadZone(value: number): number`

Applies dead zone logic to an axis value.

### `defaultButtonMapping(): Record<number, { index: number; name: string }>`

Provides a default 1:1 button mapping.

---

## Types

### `GamepadState`

A structured representation of a gamepad state.

```typescript
{
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
}
```

### `GamepadPose`

Details the pose of the gamepad.

```typescript
{
  hasOrientation: boolean;
  orientation: [number, number, number, number];
  hasPosition: boolean;
  position: [number, number, number];
}
```

### `GamepadHapticActuator`

Defines a haptic actuator's type and state.

```typescript
{
  type: string;
  active: boolean;
  intensity: number;
}
```

### `ButtonEvent`

Represents an event for button presses.

```typescript
{
  gamepadIndex: number;
  buttonIndex: number;
  pressed: boolean;
  value?: number;
  name?: string;
}
```

---

## Browser Compatibility

`GamepadManager` uses the [Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API), supported in most modern browsers. Ensure your target browser supports this API before using.

---

## License

This project is licensed under the MIT License.

---
