import type { ComponentProps } from "react";

type ButtonProps = Omit<ComponentProps<"button">, "type"> & {
  isSubmit?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  className = "",
  isSubmit = false,
  ...props
}) => {
  return (
    <button
      className={`h-11 w-full rounded-2xl bg-sky-400 px-5 font-semibold text-white hover:bg-sky-500 disabled:opacity-60 ${className}`}
      type={isSubmit ? "submit" : "button"}
      {...props}
    />
  );
};

export default Button;
