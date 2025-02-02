import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

type NavigationSectionProps = {
  previous: {
    href: string;
    label: string;
  };
  next: {
    href: string;
    label: string;
  };
};

const NavigationSection = ({ previous, next }: NavigationSectionProps) => {
  return (
    <Card className="flex flex-row items-center justify-between p-4 mt-2">
      {/* Previous Section Button */}
      <Link href={previous.href} passHref>
        <Button
          variant="ghost"
          className="inline-flex items-center gap-2 h-9 px-4 py-2 hover:cursor-pointer"
        >
          <ChevronLeft className="shrink-0" />
          {previous.label}
        </Button>
      </Link>

      {/* Next Section Button */}
      <Link href={next.href} passHref>
        <Button
          variant="ghost"
          className="inline-flex items-center gap-2 h-9 px-4 py-2 ml-auto hover:cursor-pointer"
        >
          {next.label}
          <ChevronRight className="shrink-0" />
        </Button>
      </Link>
    </Card>
  );
};

export default NavigationSection;
