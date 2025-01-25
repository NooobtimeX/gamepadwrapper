import { GamepadManager } from "@nooobtimex/gamepadwrapper";

document.addEventListener("DOMContentLoaded", () => {
  const gamepadInfo = document.getElementById("gamepad-info");

  const gamepadManager = new GamepadManager((gamepads) => {
    gamepadInfo.innerHTML = Object.values(gamepads)
      .map((gamepad) => renderGamepad(gamepad))
      .join("");
  });

  function renderGamepad(gamepad) {
    return `
      <div class="mb-4 p-4 border border-gray-700 rounded-lg">
        <h2 class="text-xl font-semibold">Gamepad: ${gamepad.id}</h2>
        <p>Index: ${gamepad.index}</p>
        <p>Mapping: ${gamepad.mapping}</p>
        <p>Connected: ${gamepad.connected}</p>
        <h3 class="mt-2 text-lg font-semibold">Buttons:</h3>
        <ul class="list-disc pl-5">
          ${gamepad.buttons
            .map(
              (button, index) =>
                `<li>${button.name || `Button ${index}`}: ${
                  button.pressed ? "Pressed" : "Released"
                } (Value: ${button.value})</li>`
            )
            .join("")}
        </ul>
        <h3 class="mt-2 text-lg font-semibold">Left Stick:</h3>
        <p>X: ${gamepad.leftStick.x}, Y: ${gamepad.leftStick.y}</p>
        <h3 class="mt-2 text-lg font-semibold">Right Stick:</h3>
        <p>X: ${gamepad.rightStick.x}, Y: ${gamepad.rightStick.y}</p>
      </div>
    `;
  }
});
