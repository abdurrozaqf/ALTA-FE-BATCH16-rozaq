import { useContext, createContext, useState } from "react";
import { ChevronLast, ChevronFirst } from "lucide-react";
import Logo from "@/assets/logo-2.svg";

const SidebarContext: any = createContext(null);

export default function Sidebar({ children }: any) {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside className="h-full">
      <nav className="h-full flex flex-col px-2 py-4 bg-white">
        <div className="p-4 pb-2 flex items-center mb-16 justify-between">
          <img
            src={Logo}
            className={`overflow-hidden transition-all ${
              expanded ? "w-44 h-auto" : "w-0 h-0"
            }`}
            alt="Logo"
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-[#F3F3F7] hover:bg-indigo-100 shadow-md"
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

export function SidebarItem({ icon, text, active, alert }: any) {
  const { expanded }: any = useContext(SidebarContext);

  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-500 to-indigo-300 text-white"
            : "hover:bg-indigo-100 text-gray-600"
        }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0 h-0"
        }`}
      >
        {text}
      </span>

      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6 z-50
          bg-indigo-400 text-white text-sm text-center w-32
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
