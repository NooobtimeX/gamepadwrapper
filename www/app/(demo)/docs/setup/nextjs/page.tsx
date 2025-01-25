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
        <h1>Setup with NEXT JS</h1>
        <h2>2. Import and Initialize</h2>
        <CodeBlock>
          import &#123; GamepadManager &#123; from "@nooobtimex/gamepadwrapper";
        </CodeBlock>
        <CodeBlock>
          import &#123; useEffect, useState &#123; from "react";
        </CodeBlock>
        <p>
          Import the GamepadManager class into the file where you intend to
          implement gamepad controls.
        </p>

        <h2>3. Set Up the Manager</h2>
        <CodeBlock>const manager = new GamepadManager(callback);</CodeBlock>
        <p>
          Pass a callback function to handle the gamepad's state changes. This
          function will be called with the current state of connected gamepads.
        </p>

        <h2>4. Handle Gamepad Events</h2>
        <CodeBlock>
          useEffect(() =&gt; {"{"}
          const manager = new GamepadManager((gamepads) =&gt; {"{"}
          // Handle gamepad data
          {"}"}); return () =&gt; {"{"}
          manager.stop();
          {"}"};{"}"}, []);
        </CodeBlock>
        <p>
          Use the `useEffect` hook to initialize and stop the manager within
          your component's lifecycle.
        </p>

        <h2>5. Render Gamepad Data</h2>
        <CodeBlock>
          <div>
            {" "}
            {"{"} /* Render gamepad information here */ {"}"}
          </div>
        </CodeBlock>
        <p>
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
