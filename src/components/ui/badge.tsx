import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2 py-0.5 text-[0.75rem] ",
  {
    variants: {
      variant: {
        default:
          "border-transparent  hover:bg-primary/80",
        new: "border-transparent bg-lime-400 text-slate-800",
        updated: "border-transparent  bg-yellow-400 text-slate-800",
        soon: "border-transparent  bg-yellow-400 text-slate-800",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
