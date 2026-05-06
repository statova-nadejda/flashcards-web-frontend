import type { ComponentProps } from "react";

type InputProps = ComponentProps<"input">;

const Input: React.FC<InputProps> = ({
  className = "",
  type = "text",
  ...props
}) => {
  return (
    <input
      className={`h-11 w-full rounded-2xl bg-stone-50 px-4 text-stone-700 outline-none placeholder:text-stone-400 focus:ring-2 focus:ring-sky-300 ${className}`}
      type={type}
      {...props}
    />
  );
};

export default Input;
