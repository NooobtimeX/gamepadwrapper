import { Card, CardContent } from "@/components/ui/card";
import React, { ReactNode } from "react";
interface PlaceholderContentProps {
  children: ReactNode;
}

const PlaceholderContent: React.FC<PlaceholderContentProps> = ({
  children,
}) => {
  return (
    <Card>
      <CardContent className="p-6">{children}</CardContent>
    </Card>
  );
};
export default PlaceholderContent;
