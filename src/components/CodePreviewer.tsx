"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodePreviewProps {
  code: string;
  language?: string;
  className?: string;
}

const CodePreview: React.FC<CodePreviewProps> = ({
  code,
  language = "tsx",
  className,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className={cn("relative rounded-md p-0.5 md:p-4 border w-full overflow-scroll", className)}>
      <div className="relative mx-auto max-h-[720px] lg:max-w-[720px] xl:max-w-[100%] overflow-scroll rounded-lg">
        <SyntaxHighlighter
          language={language}
          style={atomDark}
          lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}}
          wrapLines={true}
          wrapLongLines={true}
          showLineNumbers={true}
          useInlineStyles={true}
        >
          {code.trim()}
        </SyntaxHighlighter>
        <button
          onClick={handleCopy}
          className="absolute right-2 top-4 flex items-center space-x-1 rounded bg-slate-500 py-1 text-white transition hover:bg-slate-600 md:px-2"
        >
          {copied ? <Check /> : <Copy />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
    </div>
  );
};

export default CodePreview;
