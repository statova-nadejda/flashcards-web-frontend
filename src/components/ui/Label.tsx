import { cn } from "~/utils";

import type { ComponentProps } from "react";

type LabelProps = ComponentProps<"label">;

export function Label({ className = "", ...props }: LabelProps) {
  return (
    <label
      className={cn(
        "text-sm font-medium leading-none text-stone-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className,
      )}
      {...props}
    />
  );
}
