import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface PlaceholderContentProps {
  children: ReactNode;
}

const PlaceholderContent: React.FC<PlaceholderContentProps> = ({
  children,
}) => {
  return (
    <Card className="rounded-lg border-none mt-6">
      <CardContent className="p-6">{children}</CardContent>
    </Card>
  );
};
export default PlaceholderContent;
