// components/CodeBlock.tsx
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";

type CodeBlockProps = {
  language: string;
  code: string;
};

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code }) => {
  return (
    <section className="rounded-lg">
      <SyntaxHighlighter language={language} style={materialOceanic}>
        {code}
      </SyntaxHighlighter>
    </section>
  );
};

export default CodeBlock;
