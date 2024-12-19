import React from "react";
import { Badge } from "./ui/badge";
import type  { FEATURED_COMPS_QUERYResult } from "@/sanity/types";

// TODO: extends types with html div props
type ComponentCardProps  = {
  data: FEATURED_COMPS_QUERYResult[0];
}



const ComponentCard = ({ data  }: ComponentCardProps) => {
  console.log(data.name);

  return (
    <div className="flex flex-col border border-red-400 max-h-[10rem]">
      <Badge variant={data.tags} />
      <h3 className=" text-xl font-bold">{data.name}</h3>
      <div className=" "></div>
      <div>
        <button>View</button>
      </div>
    </div>
  );
};

export default ComponentCard;
