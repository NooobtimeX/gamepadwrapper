import { ContentLayout } from "@/components/admin-panel/content-layout";
import PlaceholderContent from "@/components/demo/placeholder-content";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function CategoriesPage() {
  const cardItems = [
    {
      title: "Introduction",
      description:
        "This is the full description for card 1, providing more details.",
      link: "/docs/introduction",
    },
    {
      title: "Installation",
      description:
        "This is the full description for card 2, providing more details.",
      link: "/docs/installation",
    },
    {
      title: "Setup",
      description:
        "This is the full description for card 3, providing more details.",
      link: "/docs/setup",
    },
    {
      title: "Gamepad Information",
      description:
        "This is the full description for card 3, providing more details.",
      link: "/docs/gamepadinformation",
    },
    {
      title: "Event Handling",
      description:
        "This is the full description for card 3, providing more details.",
      link: "/docs/event",
    },
    {
      title: "Browser Compatibility",
      description:
        "This is the full description for card 3, providing more details.",
      link: "/docs/browsercompatibility",
    },
  ];

  return (
    <ContentLayout>
      <PlaceholderContent>
        <h1>Getting Started</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
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
    </ContentLayout>
  );
}
