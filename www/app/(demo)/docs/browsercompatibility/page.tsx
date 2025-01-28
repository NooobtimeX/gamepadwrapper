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
          {
            href: "/docs/browsercompatibility",
            label: "Browser Compatibility",
          },
        ]}
      />
      <PlaceholderContent>
        <h1>Browser Compatibility</h1>
      </PlaceholderContent>
      <NavigationSection
        previous={{
          href: "/docs/customnamemapping",
          label: "Custom Name Mapping",
        }}
        next={{
          href: "https://github.com/NooobtimeX/gamepadwrapper",
          label: "GitHub",
        }}
      />
    </ContentLayout>
  );
}
