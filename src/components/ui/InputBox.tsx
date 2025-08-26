import { forwardRef } from "react";

interface InputProps {
  placeholder: string;
}

export const InputBox = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder }, ref) => {
    return (
      <div className="w-full">
        <input
          placeholder={placeholder}
          type={"text"}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200 placeholder-gray-400"
          ref={ref}
        ></input>
      </div>
    );
  }
);
