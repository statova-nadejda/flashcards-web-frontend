import type { ReactNode } from "react";

type FormFieldProps = {
  children: ReactNode;
  className?: string;
  error?: string;
  htmlFor?: string;
  label?: ReactNode;
};

const FormField: React.FC<FormFieldProps> = ({
  children,
  className = "",
  error,
  htmlFor,
  label,
}) => {
  return (
    <div className={`grid gap-2 ${className}`}>
      {label ? (
        <label className="text-sm font-medium text-stone-700" htmlFor={htmlFor}>
          {label}
        </label>
      ) : null}
      {children}
      {error ? <p className="text-sm text-red-700">{error}</p> : null}
    </div>
  );
};

export default FormField;
