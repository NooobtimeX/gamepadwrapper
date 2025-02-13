// src/index.ts
import type {
  ExtendedGamepad,
  GamepadState,
  GamepadUpdateCallback,
} from "../@types/gamepadwrapper";

export class GamepadManager {
  private gamepads: Record<number, GamepadState> = {};
  private animationFrameId: number | null = null;
  private onUpdate: GamepadUpdateCallback;
  private deadZone: number;
  private precision: number;
  private vibrationDuration: number = 1000;
  private buttonMappings: Record<
    string,
    Record<number, { index: number; name: string }>
  > = {
    xbox: {
      0: { index: 0, name: "A" },
      1: { index: 1, name: "B" },
      2: { index: 2, name: "X" },
      3: { index: 3, name: "Y" },
      4: { index: 4, name: "LB" },
      5: { index: 5, name: "RB" },
      6: { index: 6, name: "LT" },
      7: { index: 7, name: "RT" },
      8: { index: 8, name: "View" },
      9: { index: 9, name: "Menu" },
      10: { index: 10, name: "Left Stick" },
      11: { index: 11, name: "Right Stick" },
    },
  };

  constructor(
    onUpdate: GamepadUpdateCallback = (gamepads) =>
      console.log("Gamepads updated", gamepads),
    options: { deadZone?: number; precision?: number } = {}
  ) {
    this.onUpdate = onUpdate;
    this.deadZone = options.deadZone ?? 0.1;
    this.precision = options.precision ?? 2;
    // Automatically start tracking gamepads
    this.start();
  }

  public start(): void {
    if (this.animationFrameId !== null) return;
    window.addEventListener("gamepadconnected", this.handleConnect);
    window.addEventListener("gamepaddisconnected", this.handleDisconnect);
    this.updateGamepads();
  }

  public stop(): void {
    window.removeEventListener("gamepadconnected", this.handleConnect);
    window.removeEventListener("gamepaddisconnected", this.handleDisconnect);
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
    this.gamepads = {};
  }

  public setButtonMapping(
    gamepadId: string,
    mappingType: "custom" | "preset",
    mapping: Record<number, { index: number; name: string }>
  ): void {
    if (mappingType === "custom") {
      this.buttonMappings[gamepadId] = mapping;
    } else if (mappingType === "preset") {
      const presetMapping = this.buttonMappings[mapping as unknown as string];
      if (presetMapping) {
        this.buttonMappings[gamepadId] = { ...presetMapping };
      } else {
        console.warn(`Preset '${mapping}' not found.`);
      }
    }
  }

  public setVibration(
    gamepadIndex: number,
    intensity: number,
    type: "soft" | "hard"
  ): void {
    const gamepad = navigator.getGamepads()[gamepadIndex] as ExtendedGamepad;
    if (gamepad?.vibrationActuator) {
      const magnitude = intensity * (type === "soft" ? 0.5 : 1);
      gamepad.vibrationActuator.playEffect("dual-rumble", {
        startDelay: 0,
        duration: this.vibrationDuration,
        weakMagnitude: magnitude,
        strongMagnitude: magnitude,
      });
    }
  }

  private handleConnect = (event: GamepadEvent): void => {
    const gamepad = event.gamepad as ExtendedGamepad;
    this.gamepads[gamepad.index] = this.mapGamepadState(gamepad);
  };

  private handleDisconnect = (event: GamepadEvent): void => {
    delete this.gamepads[event.gamepad.index];
  };

  private updateGamepads = (): void => {
    const rawGamepads = navigator.getGamepads();
    if (rawGamepads) {
      for (const gamepad of rawGamepads) {
        if (!gamepad) continue;
        const currentState = this.mapGamepadState(gamepad as ExtendedGamepad);
        this.gamepads[gamepad.index] = currentState;
      }
      this.onUpdate(this.gamepads);
    }
    this.animationFrameId = requestAnimationFrame(this.updateGamepads);
  };

  private mapGamepadState(gamepad: ExtendedGamepad): GamepadState {
    const buttonMapping =
      this.buttonMappings[gamepad.id] || this.defaultButtonMapping();
    return {
      id: gamepad.id,
      index: gamepad.index,
      timestamp: gamepad.timestamp,
      rawAxes: gamepad.axes.map((axis) => this.applyDeadZone(axis)),
      buttons: gamepad.buttons.map((button, originalIndex) => {
        const mapping = buttonMapping[originalIndex] || {
          index: originalIndex,
          name: `Button ${originalIndex}`,
        };
        return {
          value: button.value,
          pressed: button.pressed,
          touched: button.touched,
          name: mapping.name,
        };
      }),
      leftStick: {
        x: this.applyDeadZone(gamepad.axes[0] ?? 0),
        y: this.applyDeadZone(gamepad.axes[1] ?? 0),
      },
      rightStick: {
        x: this.applyDeadZone(gamepad.axes[2] ?? 0),
        y: this.applyDeadZone(gamepad.axes[3] ?? 0),
      },
      mapping: gamepad.mapping,
      connected: gamepad.connected,
      pose: gamepad.pose,
      hapticActuators: gamepad.hapticActuators,
      hand: gamepad.hand,
      displayId: gamepad.displayId,
      vibrationActuator: gamepad.vibrationActuator,
    };
  }

  private defaultButtonMapping(): Record<
    number,
    { index: number; name: string }
  > {
    return {}; // Default mapping (1:1)
  }

  private applyDeadZone(value: number): number {
    return Math.abs(value) < this.deadZone
      ? 0
      : parseFloat(value.toFixed(this.precision));
  }
}
