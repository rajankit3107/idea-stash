import type { ReactElement, ReactNode } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: ReactNode | string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
}

const Variants = {
  primary: "bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800",
  secondary:
    "bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100 active:bg-gray-200",
};

const SizeStyles = {
  sm: "py-2 px-4 text-sm",
  md: "py-3 px-6 text-base",
  lg: "py-3 px-8 text-base",
};

const defaultStyles =
  "rounded-lg flex items-center justify-center font-medium cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-purple-500";

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`${Variants[props.variant]} ${defaultStyles} ${
        SizeStyles[props.size]
      }`}
    >
      {props.startIcon && (
        <div className="flex items-center justify-center mr-2">
          {props.startIcon}
        </div>
      )}
      <span>{props.text}</span>
      {props.endIcon && (
        <div className="flex items-center justify-center ml-2">
          {props.endIcon}
        </div>
      )}
    </button>
  );
};
