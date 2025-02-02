import React from "react";
import { Badge } from "./ui/badge";
import type { FEATURED_COMPS_QUERYResult } from "@/sanity/types";
import Link from "next/link";
import { MoveRight } from "lucide-react";

// TODO: extends types with html div props
type ComponentCardProps = {
  data: FEATURED_COMPS_QUERYResult[0];
};

const ComponentCard = ({ data }: ComponentCardProps) => {
  console.log(data.name);

  return (
    <div className="flex max-h-[6rem] flex-col justify-between rounded-lg border border-slate-100 p-2">
      <div className="flex w-full justify-between">
        <h3 className="text-xl font-bold">{data.name}</h3>
        <Badge variant={data.tags} className="px-4 font-bold">
          {data.tags}
        </Badge>
      </div>
      <div className=" "></div>
      <div>
        <Link href={data.pageLink != null ? data.pageLink : ""}>
          <button className="flex items-center gap-x-2 text-sm text-slate-400">
            <span>View</span>
            <MoveRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ComponentCard;
