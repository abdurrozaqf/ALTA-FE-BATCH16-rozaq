import { Link } from "react-router-dom";

import LogoLight from "@/assets/logo-light-2.svg";
import Logo from "@/assets/logo-1.svg";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/mode-toggle";
import { useToast } from "@/components/ui/use-toast";
import { SheetCart } from "@/components/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  BookTextIcon,
  ChevronDown,
  ClipboardEdit,
  LogIn,
  LogOut,
  Moon,
  ShoppingBasketIcon,
  Sun,
  UserCircle2,
  UserCog,
} from "lucide-react";

import { useTheme } from "@/utils/context/theme-provider";
import { useToken } from "@/utils/context/token";

interface Props {
  title?: string | any;
}

const Navbar = (props: Props) => {
  const { title } = props;
  const { toast } = useToast();

  const { theme, setTheme } = useTheme();
  const { token, user, changeToken } = useToken();

  function handleLogout() {
    changeToken();
    toast({
      description: "Logout Successfully",
    });
  }

  return (
    <div className="flex bg-[#F3F3F7] dark:bg-black/25 dark:shadow-none py-2 px-6 lg:px-11 items-center justify-between z-40 border-b">
      <Link to="/">
        <img
          src={theme === "dark" ? LogoLight : Logo}
          alt="Logo"
          className="w-[4rem]"
        />
      </Link>
      <p className="mb-4 absolute md:relative invisible md:visible md:text-lg lg:text-xl font-semibold leading-none mt-3">
        {title}
      </p>
      <div className="flex gap-4 items-center justify-end">
        {token ? (
          <>
            {token && user.role === "user" && (
              <SheetCart title={`${user.full_name}'s Cart`}>
                <div className="flex gap-x-4 items-center p-3 bg-white dark:bg-black/30 dark:hover:bg-neutral-500/10 dark:border dark:border-white/10 rounded-full shadow cursor-pointer">
                  <ShoppingBasketIcon />
                </div>
              </SheetCart>
            )}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex gap-x-4 items-center p-1 bg-white dark:bg-black/30 dark:hover:bg-neutral-500/10 dark:border dark:border-white/10 rounded-full shadow">
                <Avatar>
                  <AvatarImage
                    src={user?.profile_picture}
                    alt={user?.full_name ?? "Guest"}
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>{user?.full_name ?? "Guest"}</p>
                <ChevronDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-48 mt-4 dark:bg-black/90"
                align="end"
              >
                {token && (
                  <>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link
                        to={"/profile"}
                        className="w-full flex justify-between cursor-pointer"
                      >
                        Profile
                        <UserCircle2 strokeWidth={"1px"} size={"1.2rem"} />
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        to={"/edit-profile"}
                        className="w-full flex justify-between cursor-pointer"
                      >
                        Edit Profile
                        <UserCog strokeWidth={"1px"} size={"1.2rem"} />
                      </Link>
                    </DropdownMenuItem>
                    {user.role === "user" && (
                      <>
                        <DropdownMenuItem>
                          <Link
                            to={"/history-borrow"}
                            className="w-full flex justify-between cursor-pointer"
                          >
                            My Book
                            <BookTextIcon strokeWidth={"1px"} size={"1.2rem"} />
                          </Link>
                        </DropdownMenuItem>
                      </>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer relative">
                      <div
                        className="flex w-full justify-between scale-0 dark:scale-100 absolute dark:relative"
                        onClick={() => setTheme("light")}
                      >
                        <p>Change Theme</p>
                        <Sun
                          strokeWidth={"1px"}
                          size={"1.2rem"}
                          className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                        />
                      </div>
                      <div
                        className="flex w-full justify-between scale-100 dark:scale-0 relative dark:absolute"
                        onClick={() => setTheme("dark")}
                      >
                        <p>Change Theme</p>
                        <Moon
                          strokeWidth={"1px"}
                          size={"1.2rem"}
                          className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                        />
                      </div>
                    </DropdownMenuItem>
                    {user.role === "admin" && (
                      <>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Link
                            className="w-full flex justify-between cursor-pointer"
                            to="/admin-dashboard"
                          >
                            Admin Dashboard
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link
                            className="w-full flex justify-between cursor-pointer"
                            to="/admin-list-borrow"
                          >
                            Admin List of Borrows
                          </Link>
                        </DropdownMenuItem>
                      </>
                    )}
                  </>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleLogout()}>
                  <Link
                    to="/login"
                    className="w-full flex justify-between text-red-600"
                  >
                    Logout
                    <LogOut strokeWidth={"1px"} size={"1.2rem"} color="red" />
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <div className="flex gap-4 items-center">
            <ModeToggle />
            <div className="absolute md:relative z-[-50] md:z-50 opacity-0 md:opacity-100 flex gap-2 items-center p-1 bg-white dark:bg-black/30 dark:border dark:border-white/10 rounded-full shadow">
              <Avatar>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="mr-4">Guest</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger className="relative md:absolute z-50 md:z-[-50] opacity-100 md:opacity-0 flex gap-2 items-center p-1 bg-white dark:bg-black/30 dark:hover:bg-neutral-500/10 dark:border dark:border-white/10 rounded-full shadow">
                <Avatar>
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>Guest</p>
                <ChevronDown className="visible relative md:invisible md:absolute" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link className="w-full flex justify-between " to="/login">
                    Login
                    <LogIn strokeWidth={"1px"} size={"1.2rem"} />
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="w-full flex justify-between " to="/register">
                    Register
                    <ClipboardEdit strokeWidth={"1px"} size={"1.2rem"} />
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
