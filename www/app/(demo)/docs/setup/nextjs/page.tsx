import Link from "next/link";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import PlaceholderContent from "@/components/demo/placeholder-content";
import CodeBlock from "@/components/section/CodeBlock";
import NavigationSection from "@/components/section/NavigationSection";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function CategoriesPage() {
  return (
    <ContentLayout title="API Reference">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/document">Document</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/installation">Setup</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>NEXT JS</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <PlaceholderContent>
        <h1 className="text-3xl font-bold">Setup with NEXT JS</h1>

        <h2 className="text-2xl font-semibold mt-6">
          1. Import and Initialize
        </h2>
        <CodeBlock
          language="typescript"
          code={`"use client";
import { GamepadManager, GamepadState } from "@nooobtimex/gamepadwrapper";
import { useEffect, useState } from "react";`}
        />
        <p className="mt-4">
          Import the <code>GamepadManager</code> class into the file where you
          intend to implement gamepad controls.
        </p>
        <h2 className="text-2xl font-semibold mt-6">2. Set Up the State</h2>
        <CodeBlock
          language="typescript"
          code={`const [gamepadInfo, setGamepadInfo] = useState<GamepadState[]>([]);`}
        />
        <p className="mt-4">
          Pass a callback function to handle the gamepad's state changes. This
          function will be called with the current state of connected gamepads.
        </p>
        <h2 className="text-2xl font-semibold mt-6">
          3. Handle Gamepad Events
        </h2>
        <CodeBlock
          language="typescript"
          code={`useEffect(() => {
  const manager = new GamepadManager((gamepads) => {
      setGamepadInfo(Object.values(gamepads));
  });

  return () => {
    manager.stop();
  };
}, []);`}
        />
        <p className="mt-4">
          Use the <code>useEffect</code> hook to initialize and stop the manager
          within your component's lifecycle.
        </p>

        <h2 className="text-2xl font-semibold mt-6">4. Render Gamepad Data</h2>
        <CodeBlock
          language="tsx"
          code={`{
  gamepadInfo.length === 0 ? (
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
  );
}
`}
        />
        <p className="mt-4">
          Update your component's state based on gamepad data and render it as
          required.
        </p>
      </PlaceholderContent>

      <NavigationSection
        previous={{
          href: "/docs/installation",
          label: "Installation",
        }}
        next={{
          href: "/docs/connectionhandling",
          label: "Connection Handling",
        }}
      />
    </ContentLayout>
  );
}
