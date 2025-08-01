import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SideBarItem } from "./Sidebar-Item";

export function SideBar() {
  return (
    <div className="h-screen bg-white border-r w-60 fixed left-0 top-0 pl-6">
      <div className="flex text-2xl pt-4">Idea-Stash</div>
      <div className="pt-4">
        <SideBarItem text="Twitter" icon={<TwitterIcon />} />
        <SideBarItem text="Youtube" icon={<YoutubeIcon />} />
      </div>
    </div>
  );
}
