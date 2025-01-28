import { ContentLayout } from "@/components/admin-panel/content-layout";
import PlaceholderContent from "@/components/demo/placeholder-content";
import Breadcrumbs from "@/components/section/Breadcrumb";
import NavigationSection from "@/components/section/NavigationSection";

export default function CategoriesPage() {
  return (
    <ContentLayout title="API Reference">
      <Breadcrumbs
        items={[
          { href: "/docs", label: "Document" },
          { href: "/docs/event", label: "Event" },
          { href: "/docs/event/joystick", label: "joystick" },
        ]}
      />
      <PlaceholderContent>
        <h1>JoyStick Event Introduction</h1>
      </PlaceholderContent>
      <NavigationSection
        previous={{
          href: "/docs/event/button",
          label: "Button Event",
        }}
        next={{
          href: "/docs/event/vibration",
          label: "Vibration Event",
        }}
      />
    </ContentLayout>
  );
}
