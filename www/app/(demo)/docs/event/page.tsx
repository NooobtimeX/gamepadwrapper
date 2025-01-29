import { ContentLayout } from "@/components/admin-panel/content-layout";
import PlaceholderContent from "@/components/demo/placeholder-content";
import Breadcrumbs from "@/components/section/Breadcrumb";
import NavigationSection from "@/components/section/NavigationSection";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function CategoriesPage() {
  const cardItems = [
    {
      title: "Button Event",
      description:
        "This is the full description for card 1, providing more details.",
      link: "/docs/event/button",
    },
    {
      title: "JoyStick Event",
      description:
        "This is the full description for card 2, providing more details.",
      link: "/docs/event/joystick",
    },
    {
      title: "Vibration Event",
      description:
        "This is the full description for card 2, providing more details.",
      link: "/docs/event/vibration",
    },
  ];
  return (
    <ContentLayout title="API Reference">
      <Breadcrumbs
        items={[
          { href: "/docs", label: "Document" },
          { href: "/docs/event", label: "Event" },
        ]}
      />
      <PlaceholderContent>
        <h1>Event Introduction</h1>
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
          href: "/docs/gamepadinformation",
          label: "Gamepad Information",
        }}
        next={{ href: "/docs/event/button", label: "Button Event" }}
      />
    </ContentLayout>
  );
}
