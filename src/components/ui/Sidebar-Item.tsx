import type { ReactElement } from "react";

interface SideBarItemProps {
  text: string;
  icon: ReactElement;
}

export function SideBarItem({ text, icon }: SideBarItemProps) {
  return (
    <div className="flex">
      <div className="p-2">{icon}</div>
      <div className="p-2">{text}</div>
    </div>
  );
}
