import ComponentPreviewer from "@/components/ComponentPreviewer";
import {
  AccordionRoot,
  AccordionItem,
  AccordionItemHeader,
  AccordionItemTrigger,
  AccordionItemContent,
} from "./Accordion";
import { Metadata } from "next";
import { getFileSourceCode } from "@/hooks/useFileSourceCode";
import CodePreview from "@/components/CodePreviewer";
import { SplitPreviewer } from "@/components/SplitPreviewer";

export const metadata: Metadata = {
  title: "Accordion",
  description: "A customizable accordion component",
};

const accordionData = [
  {
    value: "item-1",
    title: "What is Lorem Ipsum?",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text since the 1500s.",
  },
  {
    value: "item-2",
    title: "Why do we use it?",
    content:
      "It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    value: "item-3",
    title: "Where can I get some?",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    value: "item-4",
    title: "Is Lorem Ipsum safe to use?",
    content:
      "Yes, Lorem Ipsum is safe to use as placeholder text for web and print design purposes.",
  },
  {
    value: "item-5",
    title: "What are the origins of Lorem Ipsum?",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
  },
];
const Page = () => {
  const pageSourceCode = getFileSourceCode(
    "src/app/(frontend)/(basicComponents)/accordion/demo.txt",
  );
  const componentSourceCode = getFileSourceCode(
    "src/app/(frontend)/(basicComponents)/accordion/Accordion.tsx",
  );

  const splitPreviewerData = [
    {
      id: "tab-1",
      label: "Accordion.tsx",
      content: <CodePreview code={componentSourceCode} />,
    },
    {
      id: "tab-2",
      label: "Page.tsx",
      content: <CodePreview code={pageSourceCode} />,
    },
  ];

  return (
    <>
      <ComponentPreviewer>
        <AccordionRoot
          allowMultiple={false}
          className="flex max-w-[540px] flex-col gap-y-2"
        >
          {accordionData.map((item) => (
            <AccordionItem key={item.value} className="max-w-[1080px]">
              <AccordionItemHeader>
                <span className="flex-1">{item.title}</span>
                <AccordionItemTrigger
                  value={item.value}
                  strokeColor="currentColor"
                />
              </AccordionItemHeader>
              <AccordionItemContent value={item.value}>
                <p className="">{item.content}</p>
              </AccordionItemContent>
            </AccordionItem>
          ))}
        </AccordionRoot>
      </ComponentPreviewer>
      <SplitPreviewer tabs={splitPreviewerData} defaultValue="tab-1" />
    </>
  );
};

export default Page;
