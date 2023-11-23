import { Moon, Sun } from "lucide-react";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
import { useTheme } from "@/utils/context/theme-provider";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <>
      <div className="w-[5rem] bg-black/5 dark:bg-white rounded-full flex justify-between items-center p-1 h-fit shadow-inner shadow-black/25 dark:shadow-inner dark:shadow-black/50 dark:border dark:border-white/10">
        <div onClick={() => setTheme("light")} className="cursor-pointer">
          <Sun className="h-[2rem] w-[2rem]  bg-white/80 text-yellow-400 rounded-full p-1 opacity-100 dark:opacity-0 transition-all translate-x-0 dark:translate-x-9" />
        </div>
        <div onClick={() => setTheme("dark")} className="cursor-pointer">
          <Moon className="h-[2rem] w-[2rem] cursor-pointer bg-black/80 text-white rounded-full p-1 opacity-0 dark:opacity-100 transition-all -translate-x-9 dark:translate-x-0" />
        </div>
      </div>
      {/* <div
        className="scale-0 dark:scale-100 absolute dark:relative cursor-pointer p-[0.8rem] bg-white dark:bg-black/30 dark:hover:bg-neutral-500/10 dark:border dark:border-white/10 rounded-full shadow"
        onClick={() => setTheme("light")}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </div>
      <div
        className="scale-100 dark:scale-0 relative dark:absolute cursor-pointer p-[0.8rem] bg-white dark:bg-black/30 dark:hover:bg-neutral-500/10 dark:border dark:border-white/10 rounded-full shadow"
        onClick={() => setTheme("dark")}
      >
        <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      </div> */}

      {/* <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex gap-x-4 items-center p-3 bg-white dark:bg-black/30 dark:hover:bg-neutral-500/10 dark:border dark:border-white/10 rounded-full shadow cursor-pointer">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}
    </>
  );
}
