import { cn } from "~/utils";

import type { ComponentProps } from "react";

type InputVariant = "default" | "unstyled";

export function Input({
  className = "",
  type = "text",
  variant = "default",
  ...props
}: ComponentProps<"input"> & { variant?: InputVariant }) {
  return (
    <input
      className={cn(
        "flex w-full min-w-0 text-stone-900 outline-none transition-colors placeholder:text-stone-400 disabled:cursor-not-allowed disabled:opacity-50",
        variant === "default"
          ? "h-11 rounded-md border border-stone-200 bg-white px-3 py-2 text-sm shadow-sm focus-visible:border-sky-400 focus-visible:ring-2 focus-visible:ring-sky-200 aria-invalid:border-red-500 aria-invalid:ring-red-200"
          : "bg-transparent",
        className,
      )}
      type={type}
      {...props}
    />
  );
}
