import Link from "next/link";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import PlaceholderContent from "@/components/demo/placeholder-content";
import Breadcrumbs from "@/components/section/Breadcrumb";
import NavigationSection from "@/components/section/NavigationSection";
import { Card } from "@/components/ui/card";

export default function CategoriesPage() {
  const cardItems = [
    {
      title: "NEXT JS",
      description:
        "This is the full description for card 1, providing more details.",
      link: "/docs/setup/nextjs",
    },
  ];

  return (
    <ContentLayout title="API Reference">
      <Breadcrumbs
        items={[
          { href: "/docs", label: "Document" },
          { href: "/docs/setup", label: "Setup" },
        ]}
      />
      <PlaceholderContent>
        <h1>Setup</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {cardItems.map((item, index) => (
            <Link key={index} href={item.link}>
              <Card className="p-4 h-full">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-500">{item.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </PlaceholderContent>
      <NavigationSection
        previous={{
          href: "/docs/installation",
          label: "Installation",
        }}
        next={{
          href: "/docs/gamepadinformation",
          label: "Gamepad Information",
        }}
      />
    </ContentLayout>
  );
}
