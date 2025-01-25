import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

const CodeBlock = ({ children }: { children: ReactNode }) => {
  return (
    <Card className="p-4 rounded-lg mt-4 overflow-x-auto">
      <code>{children}</code>
    </Card>
  );
};

export default CodeBlock;
