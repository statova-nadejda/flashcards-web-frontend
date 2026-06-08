import { cn } from "~/utils";

import type { ComponentProps } from "react";

type ButtonVariant =
  | "default"
  | "ghost"
  | "link"
  | "outline"
  | "secondary"
  | "unstyled";

type ButtonSize = "default" | "icon" | "lg" | "sm";

type ButtonProps = Omit<ComponentProps<"button">, "type"> & {
  isSubmit?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

const buttonVariantClassName: Record<ButtonVariant, string> = {
  default: "bg-sky-500 text-white shadow-sm hover:bg-sky-600",
  ghost:
    "bg-transparent text-stone-700 hover:bg-stone-100 hover:text-stone-900",
  link: "h-auto p-0 text-sky-700 underline-offset-4 hover:underline",
  outline:
    "border border-stone-300 bg-white text-stone-700 shadow-sm hover:bg-stone-50",
  secondary: "bg-stone-100 text-stone-900 shadow-sm hover:bg-stone-200",
  unstyled: "",
};

const buttonSizeClassName: Record<ButtonSize, string> = {
  default: "h-11 px-5 py-2",
  icon: "size-10",
  lg: "h-12 px-8",
  sm: "h-9 px-3",
};

export function Button({
  className = "",
  isSubmit = false,
  size = "default",
  variant = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-sky-300 disabled:pointer-events-none disabled:opacity-60",
        variant === "link"
          ? "rounded-none"
          : size === "icon"
            ? "rounded-full"
            : "rounded-md",
        buttonVariantClassName[variant],
        buttonSizeClassName[size],
        className,
      )}
      type={isSubmit ? "submit" : "button"}
      {...props}
    />
  );
}
