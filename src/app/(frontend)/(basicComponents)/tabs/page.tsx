import ComponentPreviewer from "@/components/ComponentPreviewer";
import { Tabs } from "./Tabs";
import { getFileSourceCode } from "@/hooks/useFileSourceCode";
import CodePreview from "@/components/CodePreviewer";
import { SplitPreviewer } from "@/components/SplitPreviewer";

const Page = () => {
  const tabItems = [
    {
      id: "tab1",
      label: "Tab 1",
      content: (
        <>
          <h3 className="border-b text-xl font-bold">Tab 01</h3>
          <p className="pt-2 text-slate-500 dark:text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            aut.
          </p>
          <p className="text-slate-500 dark:text-slate-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            culpa ut vitae repudiandae rem facere.
          </p>
        </>
      ),
    },
    {
      id: "tab2",
      label: "Tab 2",
      content: (
        <>
          <h3 className="border-b text-xl font-bold">Tab 02</h3>
          <p className="pt-2 text-slate-500 dark:text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            aut.
          </p>
          <p className="text-slate-500 dark:text-slate-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            culpa ut vitae repudiandae rem facere.
          </p>
        </>
      ),
    },
    {
      id: "tab3",
      label: "Tab 3",
      content: (
        <>
          <h3 className="border-b text-xl font-bold">Tab 03</h3>
          <p className="pt-2 text-slate-500 dark:text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            aut.
          </p>
          <p className="text-slate-500 dark:text-slate-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            culpa ut vitae repudiandae rem facere.
          </p>
        </>
      ),
    },
  ];

  const sourceCode = getFileSourceCode(
    "src/app/(frontend)/(basicComponents)/tabs/Tabs.tsx",
  );
  const componentSourceCode = getFileSourceCode(
    "src/app/(frontend)/(basicComponents)/tabs/Demo.txt",
  );

  const splitPreviewerData = [
    {
      id: "tab-1",
      label: "Preview",
      content: (
        <ComponentPreviewer>
          <Tabs tabs={tabItems} defaultValue="tab1" className="w-[320px]" />
        </ComponentPreviewer>
      ),
    },
    {
      id: "tab-2",
      label: "Code",
      content: <CodePreview code={componentSourceCode} />,
    },
  ];

  return (
    <>
      <SplitPreviewer tabs={splitPreviewerData} defaultValue="tab-1" />
      <h3 className="mt-8 text-2xl">Source Code</h3>
      <div className="mt-4 rounded-lg border">
        <CodePreview code={sourceCode} />,
      </div>
    </>
  );
};
export default Page;
