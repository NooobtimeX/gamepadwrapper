import { ContentLayout } from "@/components/admin-panel/content-layout";
import PlaceholderContent from "@/components/demo/placeholder-content";
import Breadcrumbs from "@/components/section/Breadcrumb";
import CodeBlock from "@/components/section/CodeBlock";
import NavigationSection from "@/components/section/NavigationSection";

export default function CategoriesPage() {
  const softVibrationCode = `manager.setVibration(0, 0.8, 'soft');`;
  const hardVibrationCode = `manager.setVibration(2, 0.8, 'hard');`;
  return (
    <ContentLayout>
      <Breadcrumbs
        items={[
          { href: "/docs", label: "Document" },
          { href: "/docs/event", label: "Event" },
        ]}
      />
      <PlaceholderContent>
        <h1>Event Handling</h1>
        <section className="mt-6">
          <h2>Button Event</h2>
        </section>
        <section className="mt-6">
          <h2>JoyStick Event</h2>
        </section>
        <section className="mt-6">
          <h2>Vibration Event</h2>
          <h3>Soft Vibration</h3>
          <CodeBlock language="typescript" code={softVibrationCode} />
          <h3>Hard Vibration</h3>
          <CodeBlock language="typescript" code={hardVibrationCode} />
        </section>
      </PlaceholderContent>
      <NavigationSection
        previous={{
          href: "/docs/gamepadinformation",
          label: "Gamepad Information",
        }}
        next={{ href: "/docs/customnamemapping", label: "Custom Name Mapping" }}
      />
    </ContentLayout>
  );
}
