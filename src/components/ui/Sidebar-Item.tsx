import type { ReactElement } from "react";

interface SideBarItemProps {
  text: string;
  icon: ReactElement;
}

export function SideBarItem({ text, icon }: SideBarItemProps) {
  return (
    <div className="group relative">
      <div className="flex items-center px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:shadow-md hover:scale-[1.02] border border-transparent hover:border-gray-200">
        <div className="flex items-center justify-center w-8 h-8 mr-3 text-gray-600 group-hover:text-blue-600 transition-colors duration-200">
          {icon}
        </div>
        <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
          {text}
        </span>
        <div className="absolute left-0 top-0 w-1 h-full bg-blue-500 rounded-r-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-y-0 group-hover:scale-y-100 origin-left"></div>
      </div>
    </div>
  );
}
