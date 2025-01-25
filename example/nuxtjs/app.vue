<template>
  <div class="bg-gray-900 text-white">
    <div class="container mx-auto py-10">
      <h1 class="text-3xl font-bold text-center mb-5">Gamepad Manager Demo</h1>

      <div
        v-if="gamepadInfo.length === 0"
        class="p-5 bg-gray-800 rounded-lg shadow-lg"
      >
        <p>Connect a gamepad to see its status.</p>
      </div>

      <div
        v-for="gamepad in gamepadInfo"
        :key="gamepad.index"
        class="mb-4 p-4 border border-gray-700 rounded-lg bg-gray-800"
      >
        <h2 class="text-xl font-semibold">Gamepad: {{ gamepad.id }}</h2>
        <p>Index: {{ gamepad.index }}</p>
        <p>Mapping: {{ gamepad.mapping }}</p>
        <p>Connected: {{ gamepad.connected }}</p>

        <h3 class="mt-2 text-lg font-semibold">Buttons:</h3>
        <ul class="list-disc pl-5">
          <li v-for="(button, index) in gamepad.buttons" :key="index">
            {{ button.name }}:
            {{ button.pressed ? "Pressed" : "Released" }} (Value:
            {{ button.value }})
          </li>
        </ul>

        <h3 class="mt-2 text-lg font-semibold">Left Stick:</h3>
        <p>X: {{ gamepad.leftStick.x }}, Y: {{ gamepad.leftStick.y }}</p>

        <h3 class="mt-2 text-lg font-semibold">Right Stick:</h3>
        <p>X: {{ gamepad.rightStick.x }}, Y: {{ gamepad.rightStick.y }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { GamepadManager } from "@nooobtimex/gamepadwrapper";
import { ref, onMounted } from "vue";

const gamepadInfo = ref([]);

const renderGamepad = (gamepad) => ({
  id: gamepad.id,
  index: gamepad.index,
  mapping: gamepad.mapping,
  connected: gamepad.connected,
  buttons: gamepad.buttons.map((button, index) => ({
    name: button.name || `Button ${index}`,
    pressed: button.pressed,
    value: button.value,
  })),
  leftStick: { ...gamepad.leftStick },
  rightStick: { ...gamepad.rightStick },
});

onMounted(() => {
  const manager = new GamepadManager((gamepads) => {
    gamepadInfo.value = Object.values(gamepads).map(renderGamepad);
  });
});
</script>
