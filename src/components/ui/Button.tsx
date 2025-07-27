import type { ReactElement, ReactNode } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: ReactNode | string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick: () => void;
}

const Variants = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-100 text-purple-600",
};

const SizeStyles = {
  sm: "py-1 px-4",
  md: "py-2 px-6",
  lg: "py-2 px-10",
};

const defaultStyles = "rounded-md flex items-center font-light cursor-pointer";

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${Variants[props.variant]} ${defaultStyles} ${
        SizeStyles[props.size]
      }`}
    >
      {props.startIcon}
      <div className="pl-3 pr-3">{props.text}</div>
      {props.endIcon}
    </button>
  );
};
