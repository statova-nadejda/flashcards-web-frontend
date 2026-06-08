import { cn } from "~/utils";

import type { ReactNode } from "react";

import { Label } from "./Label";

type FormFieldProps = {
  children: ReactNode;
  className?: string;
  error?: string;
  htmlFor?: string;
  label?: ReactNode;
};

export function FormField({
  children,
  className = "",
  error,
  htmlFor,
  label,
}: FormFieldProps) {
  return (
    <div className={cn("grid gap-2 text-left", className)}>
      {label ? <Label htmlFor={htmlFor}>{label}</Label> : null}
      {children}
      {error ? <p className="text-sm text-red-700">{error}</p> : null}
    </div>
  );
}
