import Link from "next/link";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import PlaceholderContent from "@/components/demo/placeholder-content";
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
              <Link href="/event">Event</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>JoyStick</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <PlaceholderContent>
        <h1>JoyStick Event Introduction</h1>
      </PlaceholderContent>
      <NavigationSection
        previous={{
          href: "/docs/event/button",
          label: "Button Event",
        }}
        next={{
          href: "/docs/event/customnamemapping",
          label: "Custom Name Mapping",
        }}
      />
    </ContentLayout>
  );
}
