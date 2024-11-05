import React from "react";
import { AnimatedDock, AnimatedDockItem } from "./AnimatedDock";
import ComponentPreviewer from "@/components/ComponentPreviewer";
import { getFileSourceCode } from "@/hooks/useFileSourceCode";
import { SplitPreviewer } from "@/components/SplitPreviewer";
import CodePreview from "@/components/CodePreviewer";

const animatedDockData = [
  {
    tag: "Notion",
    icon: "/animated-dock/notion-icon.png",
  },
  {
    tag: "After Effects",
    icon: "/animated-dock/ae-icon.png",
  },
  {
    tag: "Figma",
    icon: "/animated-dock/figma-icon.png",
  },
  {
    tag: "Slack",
    icon: "/animated-dock/slack-icon.png",
  },
  {
    tag: "Spotify",
    icon: "/animated-dock/spotify-icon.png",
  },
  {
    tag: "VS Code",
    icon: "/animated-dock/vscode-icon.png",
  },
  {
    tag: "Photoshop",
    icon: "/animated-dock/ps-icon.png",
  },
  {
    tag: "Obsidian",
    icon: "/animated-dock/obsidian-icon.png",
  },
  {
    tag: "Discord",
    icon: "/animated-dock/discord-icon.png",
  },
  {
    tag: "Davinci Resolve",
    icon: "/animated-dock/dr-icon.png",
  },
];

const Page = () => {
  const componentSourceCode = getFileSourceCode(
    "src/app/(frontend)/(magicComponents)/animated-dock/AnimatedDock.tsx",
  );
  const pageSourceCode = getFileSourceCode(
    "src/app/(frontend)/(magicComponents)/animated-dock/Demo.txt",
  );
  const TailwindCode = getFileSourceCode(
    "src/app/(frontend)/(magicComponents)/animated-dock/Tailwind.txt",
  );

  const splitPreviewerData = [
    {
      id: "tab-1",
      label: "Page.tsx",
      content: <CodePreview code={pageSourceCode} />,
    },
    {
      id: "tab-2",
      label: "AnimatedDock.tsx",
      content: <CodePreview code={componentSourceCode} />,
    },
    {
      id: "tab-3",
      label: "global.css",
      content: <CodePreview code={TailwindCode} language="css" />,
    },
  ];

  return (
    <div>
      <ComponentPreviewer className="lg:max-w-[1080px]">
        <AnimatedDock>
          {animatedDockData.map((item, index) => (
            <AnimatedDockItem key={index} icon={item.icon} tag={item.tag} />
          ))}
        </AnimatedDock>
      </ComponentPreviewer>
      <SplitPreviewer tabs={splitPreviewerData} defaultValue="tab-1" />
    </div>
  );
};

export default Page;
