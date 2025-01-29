"use client";
// components/CodeBlock.tsx
import { Card } from "@/components/ui/card";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";

type CodeBlockProps = {
  language: string;
  code: string;
};

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <Card className="relative rounded-lg bg-gray-100 dark:bg-gray-800">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 px-2 py-1 text-sm text-white bg-gray-600 rounded shadow-sm hover:bg-gray-700 focus:outline-hidden"
      >
        {isCopied ? "Copied!" : "Copy"}
      </button>
      <SyntaxHighlighter
        language={language}
        style={darcula}
        customStyle={{
          background: "transparent", // Tailwind card background will show
          fontSize: "0.875rem", // Matches Tailwind's text-sm
        }}
        PreTag="div" // Ensure the PreTag element inherits parent styles
        codeTagProps={{
          style: { backgroundColor: "transparent" }, // Remove inline background
        }}
      >
        {code}
      </SyntaxHighlighter>
    </Card>
  );
};

export default CodeBlock;
