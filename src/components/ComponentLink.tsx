"use client";

import Link from "next/link";

import { Badge } from "./ui/badge";

interface ComponentLinkProps {
  name: string | null;
  pageLink?: string | null;
  tags?: "soon" | "new" | "updated" | null;
}

const ComponentLink: React.FC<ComponentLinkProps> = ({
  name,
  pageLink,
  tags,
}) => {
  const isDisabled = tags === "soon";

  return (
    <>
      {pageLink && !isDisabled ? (
        <Link href={pageLink} className="flex w-full select-none gap-0.5">
          <span className="text-xl">{name}</span>
          {tags && (
            <Badge
              variant={tags}
              className="h-fit flex-grow-0 text-[0.75rem] leading-[1]"
            >
              {tags}
            </Badge>
          )}
        </Link>
      ) : (
        <span className="flex w-full cursor-default select-none gap-0.5">
          <span className="text-xl text-slate-400">{name}</span>
          {tags && (
            <Badge
              variant={tags}
              className="h-fit flex-grow-0 text-[0.75rem] leading-[1]"
            >
              {tags}
            </Badge>
          )}
        </span>
      )}
    </>
  );
};

export default ComponentLink;
