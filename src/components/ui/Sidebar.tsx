import { Logo } from "../../icons/Logo";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SideBarItem } from "./Sidebar-Item";

export function SideBar() {
  return (
    <div className="h-screen bg-gradient-to-b from-white to-gray-50 border-r border-gray-200 w-64 fixed left-0 top-0 shadow-lg backdrop-blur-sm">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center px-6 py-8 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Logo />
            </div>
            <span className="text-xl font-semibold text-gray-800 tracking-tight">
              Idea-Stash
            </span>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 px-4 py-6 space-y-2">
          <SideBarItem text="Twitter" icon={<TwitterIcon />} />
          <SideBarItem text="Youtube" icon={<YoutubeIcon />} />
        </div>

        {/* Footer */}
        <div className="px-4 py-6 border-t border-gray-100">
          <div className="text-xs text-gray-500 text-center">
            © 2024 Idea-Stash
          </div>
        </div>
      </div>
    </div>
  );
}
