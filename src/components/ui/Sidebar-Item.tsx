import type { ReactElement } from "react";

interface SideBarItemProps {
  text: string;
  icon: ReactElement;
}

export function SideBarItem({ text, icon }: SideBarItemProps) {
  return (
    <div className="flex cursor-pointer hover:bg-gray-100 rounded max-w-48 pl-4 transition-all duration-200">
      <div className="p-2">{icon}</div>
      <div className="p-2">{text}</div>
    </div>
  );
}
