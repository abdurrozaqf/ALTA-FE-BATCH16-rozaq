import { useContext, createContext, useState, ReactNode } from "react";
import { ChevronLast, ChevronFirst } from "lucide-react";

import { useTheme } from "@/utils/context/theme-provider";

import LogoLight from "@/assets/logo-light-1.svg";
import Logo from "@/assets/logo-2.svg";

interface Props {
  children: ReactNode;
}

const SidebarContext = createContext<any>(undefined);

export default function Sidebar({ children }: Props) {
  const { theme } = useTheme();
  const [expanded, setExpanded] = useState(false);

  return (
    <aside className="h-full absolute md:relative invisible md:visible">
      <nav className="h-full flex flex-col p-0 pb-4 md:px-2 md:py-4 bg-white dark:bg-black/40 border-r">
        <div className="p-4 pb-2 flex items-center mb-16 justify-between">
          <img
            src={theme === "dark" ? LogoLight : Logo}
            className={`overflow-hidden transition-all duration-300 ${
              expanded ? "w-44 h-full" : "w-0 h-0"
            }`}
            alt="Logo"
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-[#F3F3F7] hover:bg-indigo-100 dark:bg-black/40 dark:hover:bg-indigo-950 transition-colors shadow-md"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>
        <div className="flex grow px-0">
          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex flex-col gap-0 px-3">{children}</ul>
          </SidebarContext.Provider>
        </div>
      </nav>
    </aside>
  );
}

interface SidebarItem {
  icon: any;
  text: string;
}

export function SidebarItem(props: SidebarItem) {
  const { icon, text } = props;

  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className="
        relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors duration-150 group hover:bg-indigo-100 text-gray-600 dark:hover:bg-indigo-950 dark:text-white/80 dark:hover:text-white"
    >
      <div className="">{icon}</div>
      <span
        className={`overflow-hidden transition duration-300 ${
          expanded
            ? "w-52 h-fit ml-4 text-left translate-x-0 opacity-100 "
            : "w-0 h-0 -translate-x-4 opacity-0"
        }`}
      >
        {text}
      </span>

      {!expanded && (
        <div
          className="
          absolute left-full rounded-md px-2 py-1 ml-6 z-50  bg-indigo-400 text-white dark:bg-black/90 dark:border dark:border-white/30 text-sm text-center w-32 invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0"
        >
          {text}
        </div>
      )}
    </li>
  );
}
