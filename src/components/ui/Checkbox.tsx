import { cn } from "~/utils";

import type { ComponentProps } from "react";

type CheckboxProps = Omit<ComponentProps<"input">, "type">;

export function Checkbox({ className = "", ...props }: CheckboxProps) {
  return (
    <input
      className={cn(
        "size-4 shrink-0 rounded-sm border border-stone-300 bg-white accent-sky-500 shadow-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-sky-300 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      type="checkbox"
      {...props}
    />
  );
}
