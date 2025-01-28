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
  const explainVibrationCode = `manager.setVibration(which gamepad, intensity, 'soft/hard');`;
  const vibrationCode = `manager.setVibration(0, 0.8, 'soft');`;

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
              <Link href="/event">Event</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Vibration</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <PlaceholderContent>
        <h1>Vibration Event</h1>
        <section className="mt-6">
          <h2 className="text-lg font-semibold">Soft Feedback</h2>
          <p>
            Trigger vibration on a gamepad using the <code>setVibration</code>{" "}
            method. You can control the intensity and vibration type (soft or
            hard).
          </p>
          <CodeBlock language="typescript" code={explainVibrationCode} />
          <CodeBlock language="typescript" code={vibrationCode} />
        </section>
      </PlaceholderContent>
      <NavigationSection
        previous={{
          href: "/docs/event/joystick",
          label: "JoyStick Event",
        }}
        next={{
          href: "/docs/customnamemapping",
          label: "Custom Name Mapping",
        }}
      />
    </ContentLayout>
  );
}