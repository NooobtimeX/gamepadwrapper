import { GamepadManager } from "../index";

describe("GamepadManager", () => {
  let gamepadManager: GamepadManager;
  let mockOnUpdate: jest.Mock;

  beforeEach(() => {
    mockOnUpdate = jest.fn();
    gamepadManager = new GamepadManager(mockOnUpdate, {
      deadZone: 0.2,
      precision: 2,
    });
  });

  afterEach(() => {
    gamepadManager.stop();
  });

  // 1. Initialization
  it("should initialize with default options", () => {
    expect(gamepadManager).toBeDefined();
  });

  // 2. start Method
  it("should start tracking gamepads", () => {
    const spyAddEventListener = jest.spyOn(window, "addEventListener");
    gamepadManager.start();
    expect(spyAddEventListener).toHaveBeenCalledWith(
      "gamepadconnected",
      expect.any(Function)
    );
    expect(spyAddEventListener).toHaveBeenCalledWith(
      "gamepaddisconnected",
      expect.any(Function)
    );
  });

  // 3. stop Method
  it("should stop tracking gamepads", () => {
    const spyRemoveEventListener = jest.spyOn(window, "removeEventListener");
    gamepadManager.stop();
    expect(spyRemoveEventListener).toHaveBeenCalledWith(
      "gamepadconnected",
      expect.any(Function)
    );
    expect(spyRemoveEventListener).toHaveBeenCalledWith(
      "gamepaddisconnected",
      expect.any(Function)
    );
    expect((gamepadManager as any).animationFrameId).toBeNull();
  });

  // 4. Gamepad Connected Event
  // 5. Gamepad Disconnected Event
  // 6. Dead Zone
  // 7. Button Mapping
  // 8. Vibration
  it("should trigger vibration on a compatible gamepad", () => {
    const mockVibrationActuator = {
      playEffect: jest.fn(),
    };

    const mockGamepad = {
      vibrationActuator: mockVibrationActuator,
    } as unknown as Gamepad;

    jest
      .spyOn(navigator, "getGamepads")
      .mockReturnValue([mockGamepad, null, null, null]);

    gamepadManager.setVibration(0, 1, "hard");

    expect(mockVibrationActuator.playEffect).toHaveBeenCalledWith(
      "dual-rumble",
      {
        startDelay: 0,
        duration: 1000,
        weakMagnitude: 1,
        strongMagnitude: 1,
      }
    );
  });
});
