import { ContentLayout } from "@/components/admin-panel/content-layout";
import PlaceholderContent from "@/components/demo/placeholder-content";
import Breadcrumbs from "@/components/section/Breadcrumb";
import NavigationSection from "@/components/section/NavigationSection";

export default function CategoriesPage() {
  return (
    <ContentLayout>
      <Breadcrumbs
        items={[
          { href: "/docs", label: "Document" },
          { href: "/docs/customnamemapping", label: "Custom Name Mapping" },
        ]}
      />
      <PlaceholderContent>
        <h1>Custom Name Mapping</h1>
      </PlaceholderContent>
      <NavigationSection
        previous={{
          href: "/docs/event/vibration",
          label: "Vibration Event",
        }}
        next={{
          href: "/docs/browsercompatibility",
          label: "Browser Compatibility",
        }}
      />
    </ContentLayout>
  );
}
