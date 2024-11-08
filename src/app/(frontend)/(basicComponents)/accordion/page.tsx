import {
  AccordionRoot,
  AccordionItem,
  AccordionItemHeader,
  AccordionItemTrigger,
  AccordionItemContent,
} from "./Accordion";

const accordionData = [
  {
    value: "item-1",
    tittle:
      "ලොරම් ඉප්සම් දොලොර් සිට් අමෙට්, කොන්සෙක්ටේටුර් අඩිපිස්සිං එලිට්, සෙඩ් ඩො ?",
    content:
      "  ලොරම් ඉප්සම් දොලොර් සිට් අමෙට්, කොන්සෙක්ටේටුර් අඩිපිස්සිං එලිට්, සෙඩ්ඩො. ලොරම් ඉප්සම් දොලොර් සිට් අමෙට්, කොන්සෙක්ටේටුර් අඩිපිස්සිං එලිට්,සෙඩ් ඩො ?",
  },
  {
    value: "item-2",
    tittle:
      "ලොරම් ඉප්සම් දොලොර් සිට් අමෙට්, කොන්සෙක්ටේටුර් අඩිපිස්සිං එලිට්, සෙඩ් ඩො ?",
    content:
      "  ලොරම් ඉප්සම් දොලොර් සිට් අමෙට්, කොන්සෙක්ටේටුර් අඩිපිස්සිං එලිට්, සෙඩ්ඩො. ලොරම් ඉප්සම් දොලොර් සිට් අමෙට්, කොන්සෙක්ටේටුර් අඩිපිස්සිං එලිට්,සෙඩ් ඩො ?",
  },
  {
    value: "item-3",
    tittle:
      "ලොරම් ඉප්සම් දොලොර් සිට් අමෙට්, කොන්සෙක්ටේටුර් අඩිපිස්සිං එලිට්, සෙඩ් ඩො ?",
    content:
      "  ලොරම් ඉප්සම් දොලොර් සිට් අමෙට්, කොන්සෙක්ටේටුර් අඩිපිස්සිං එලිට්, සෙඩ්ඩො. ලොරම් ඉප්සම් දොලොර් සිට් අමෙට්, කොන්සෙක්ටේටුර් අඩිපිස්සිං එලිට්,සෙඩ් ඩො ?",
  },
];
const Page = () => (
  <div className="w-full border p-8">
    <AccordionRoot allowMultiple={false} className="flex flex-col gap-y-4">
      {accordionData.map((item) => (
        <AccordionItem
          key={item.value}
          style={{
            backgroundColor: "rgba(255, 166, 98, 0.08)",
          }}
          className="max-w-[1080px]"
        >
          <AccordionItemHeader>
            <span className="flex-1 text-[#FCCEB5]">{item.tittle}</span>
            <AccordionItemTrigger value={item.value} strokeColor="#FCCEB5" />
          </AccordionItemHeader>
          <AccordionItemContent value={item.value}>
            <p className="text-[#FFFEFE]">{item.content}</p>
          </AccordionItemContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  </div>
);

export default Page;
