"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Check, Copy } from "lucide-react";

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
    <div className={`relative rounded-md p-4  ${className}`}>
        <div className="mx-auto max-w-[1080px] rounded-lg  py-4">
            <h3 className=" text-4xl">Source Code</h3>
        </div>
      <div className="relative mx-auto max-w-[1080px] rounded-lg border">
        <SyntaxHighlighter language={language} style={atomDark}>
          {code.trim()}
        </SyntaxHighlighter>
        <button
          onClick={handleCopy}
          className="absolute right-2 top-2 flex items-center space-x-1 rounded bg-slate-500 py-1 px-2 text-white transition hover:bg-slate-600"
        >
          {copied ? <Check /> : <Copy />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
    </div>
  );
};

export default CodePreview;
