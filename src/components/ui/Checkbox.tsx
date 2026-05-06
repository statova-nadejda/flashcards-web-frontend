import type { ComponentProps, ReactNode } from "react";

type CheckboxProps = Omit<ComponentProps<"input">, "type"> & {
  label?: ReactNode;
};

const Checkbox: React.FC<CheckboxProps> = ({
  className = "",
  label,
  ...props
}) => {
  return (
    <label className="flex items-center gap-2 text-sm text-stone-700">
      <input
        className={`size-4 rounded accent-sky-400 ${className}`}
        type="checkbox"
        {...props}
      />
      {label ? <span>{label}</span> : null}
    </label>
  );
};

export default Checkbox;
