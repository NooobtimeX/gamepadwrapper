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
import Link from "next/link";

export default function CategoriesPage() {
  const gamepadStateCode = `{
  id: 'Xbox Controller',
  index: 0,
  buttons: [
    { value: 1, pressed: true, name: 'A' },
    { value: 0, pressed: false, name: 'B' },
  ],
  leftStick: { x: 0.5, y: -0.3 },
  rightStick: { x: 0, y: 0 },
  mapping: 'standard',
  connected: true,
  hapticActuators: [{ type: 'vibration', active: true, intensity: 0.5 }],
}`;

  return (
    <ContentLayout title="GamepadManager Documentation">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/document">Document</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>GamepadManager Usage</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <PlaceholderContent>
        <h1 className="text-xl font-semibold">How to Use GamepadManager</h1>
        <p>
          The <strong>GamepadManager</strong> library helps you easily manage
          gamepads in your applications. This page explains the key features and
          how you can use them in your projects.
        </p>

        <section className="mt-6">
          <h2 className="text-lg font-semibold">Gamepad State</h2>
          <p>
            Gamepad states are updated dynamically and passed to your callback.
            Here's an example of what a gamepad state might look like:
          </p>
          <CodeBlock language="typescript" code={gamepadStateCode} />
        </section>
      </PlaceholderContent>
      <NavigationSection
        previous={{
          href: "/docs/setup",
          label: "Setup",
        }}
        next={{ href: "/docs/event", label: "Event" }}
      />
    </ContentLayout>
  );
}
