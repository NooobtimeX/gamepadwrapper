"use client";

import { GamepadManager, GamepadState } from "@nooobtimex/gamepadwrapper";
import { useEffect, useState } from "react";

const GamepadManagerDemo = () => {
  const [gamepadInfo, setGamepadInfo] = useState<GamepadState[]>([]);

  useEffect(() => {
    const manager = new GamepadManager((gamepads) => {
      setGamepadInfo(Object.values(gamepads));
    });

    return () => {
      manager.stop();
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-5">
          Gamepad Manager Demo
        </h1>

        {gamepadInfo.length === 0 ? (
          <p>No gamepads connected.</p>
        ) : (
          gamepadInfo.map((gamepad) => (
            <div key={gamepad.index}>
              <h2>{gamepad.id}</h2>
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
