"use client";

import { GamepadManager } from "@nooobtimex/gamepadwrapper";
import { useEffect, useState } from "react";

type GamepadButton = {
  name: string;
  pressed: boolean;
  value: number;
};

type Stick = {
  x: number;
  y: number;
};

type GamepadInfo = {
  id: string;
  index: number;
  mapping: string;
  connected: boolean;
  buttons: GamepadButton[];
  leftStick: Stick;
  rightStick: Stick;
};

const GamepadManagerDemo = () => {
  const [gamepadInfo, setGamepadInfo] = useState<GamepadInfo[]>([]);

  const renderGamepad = (gamepad: any): GamepadInfo => ({
    id: gamepad.id,
    index: gamepad.index,
    mapping: gamepad.mapping,
    connected: gamepad.connected,
    buttons: gamepad.buttons.map((button: any, index: number) => ({
      name: button.name || `Button ${index}`,
      pressed: button.pressed,
      value: button.value,
    })),
    leftStick: { ...gamepad.leftStick },
    rightStick: { ...gamepad.rightStick },
  });

  useEffect(() => {
    const manager = new GamepadManager((gamepads: any) => {
      setGamepadInfo(Object.values(gamepads).map(renderGamepad));
    });

    return () => {
      manager.disconnect();
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-5">
          Gamepad Manager Demo
        </h1>

        {gamepadInfo.length === 0 ? (
          <div className="p-5 bg-gray-800 rounded-lg shadow-lg">
            <p>Connect a gamepad to see its status.</p>
          </div>
        ) : (
          gamepadInfo.map((gamepad) => (
            <div
              key={gamepad.index}
              className="mb-4 p-4 border border-gray-700 rounded-lg bg-gray-800"
            >
              <h2 className="text-xl font-semibold">Gamepad: {gamepad.id}</h2>
              <p>Index: {gamepad.index}</p>
              <p>Mapping: {gamepad.mapping}</p>
              <p>Connected: {gamepad.connected ? "Yes" : "No"}</p>

              <h3 className="mt-2 text-lg font-semibold">Buttons:</h3>
              <ul className="list-disc pl-5">
                {gamepad.buttons.map((button, index) => (
                  <li key={index}>
                    {button.name}: {button.pressed ? "Pressed" : "Released"}
                    (Value: {button.value})
                  </li>
                ))}
              </ul>

              <h3 className="mt-2 text-lg font-semibold">Left Stick:</h3>
              <p>
                X: {gamepad.leftStick.x}, Y: {gamepad.leftStick.y}
              </p>

              <h3 className="mt-2 text-lg font-semibold">Right Stick:</h3>
              <p>
                X: {gamepad.rightStick.x}, Y: {gamepad.rightStick.y}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GamepadManagerDemo;
