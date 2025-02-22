"use client";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import PlaceholderContent from "@/components/demo/placeholder-content";
import Breadcrumbs from "@/components/section/Breadcrumb";
import CodeBlock from "@/components/section/CodeBlock";
import NavigationSection from "@/components/section/NavigationSection";
import { useState } from "react";

export default function CategoriesPage() {
  const [nodeManager, setNodeManager] =
    useState<keyof typeof installationCommand>("npm");

  const handleToggle = (manager: keyof typeof installationCommand) => {
    setNodeManager(manager);
  };

  const installationCommand = {
    npm: "npm install @nooobtimex/gamepadwrapper",
    yarn: "yarn add @nooobtimex/gamepadwrapper",
    pnpm: "pnpm add @nooobtimex/gamepadwrapper",
  };

  return (
    <ContentLayout>
      <Breadcrumbs
        items={[
          { href: "/docs", label: "Document" },
          { href: "/docs/installation", label: "Installation" },
        ]}
      />
      <PlaceholderContent>
        <h1 className="text-3xl font-semibold ">Installation</h1>
        <p className="mt-4 text-lg ">
          To get started with GamepadWrapper, you need to install the package
          into your project. Follow the instructions below for a seamless
          installation process.
        </p>

        <h2 className="text-2xl font-medium mt-6">Select Package Manager</h2>
        <div className="mt-4 flex space-x-4">
          <button
            onClick={() => handleToggle("npm")}
            className={`p-2 rounded-lg hover:cursor-pointer ${nodeManager === "npm" ? "bg-black text-white" : "bg-white text-black"}`}
          >
            npm
          </button>
          <button
            onClick={() => handleToggle("yarn")}
            className={`p-2 rounded-lg hover:cursor-pointer ${nodeManager === "yarn" ? "bg-black text-white" : "bg-white text-black"}`}
          >
            yarn
          </button>
          <button
            onClick={() => handleToggle("pnpm")}
            className={`p-2 rounded-lg hover:cursor-pointer ${nodeManager === "pnpm" ? "bg-black text-white" : "bg-white text-black"}`}
          >
            pnpm
          </button>
        </div>

        <h2 className="text-2xl font-medium mt-6">
          Installing via {nodeManager}
        </h2>
        <p className="mt-2 text-lg ">
          If you are using {nodeManager} as your package manager, you can
          install GamepadWrapper by running the following command in your
          project directory:
        </p>
        <CodeBlock language="bash" code={installationCommand[nodeManager]} />

        <h2 className="text-2xl font-medium mt-6">Verifying Installation</h2>
        <p className="mt-2 text-lg ">
          Once the installation is complete, you can verify that GamepadWrapper
          has been added to your dependencies by checking your package.json file
          for the following entry:
        </p>
        <CodeBlock
          language="json"
          code={`"@nooobtimex/gamepadwrapper": "^x.x.x"`}
        />

        <h2 className="text-2xl font-medium mt-6">Usage</h2>
        <p className="mt-2 text-lg ">
          After installation, you&apos;re ready to start using GamepadWrapper in
          your project! Import it into your JavaScript or TypeScript files like
          so:
        </p>
        <CodeBlock
          language="typescript"
          code={`import { GamepadWrapper } from "@nooobtimex/gamepadwrapper";`}
        />
        <p className="mt-2 text-lg ">
          Now you can begin interacting with gamepad devices, detecting buttons
          and axis movements within your application.
        </p>
      </PlaceholderContent>
      <NavigationSection
        previous={{
          href: "/docs/introduction",
          label: "Introduction",
        }}
        next={{ href: "/docs/setup", label: "Setup" }}
      />
    </ContentLayout>
  );
}
