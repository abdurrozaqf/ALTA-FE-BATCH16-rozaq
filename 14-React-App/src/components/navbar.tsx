import { Link } from "react-router-dom";

import {
  ChevronDown,
  ClipboardEdit,
  LogIn,
  LogOut,
  ShoppingBasketIcon,
  UserCircle2,
  UserCog,
} from "lucide-react";
import Logo from "@/assets/logo-1.svg";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useToken } from "@/utils/context/token";
import { SheetCart } from "@/components/sheet";

interface Props {
  title?: string | any;
}

const Navbar = (props: Props) => {
  const { title } = props;
  const { toast } = useToast();

  const { token, user, changeToken } = useToken();

  function handleLogout() {
    changeToken();
    toast({
      description: "Logout Successfully",
    });
  }

  return (
    <div className="flex bg-[#F3F3F7] py-2 px-11 items-center justify-between shadow z-40">
      <Link to="/">
        <img src={Logo} alt="Logo" className="w-[4rem]" />
      </Link>
      <p className="mb-4 text-2xl font-semibold tracking-wider leading-none mt-3">
        {title}
      </p>
      <div className="flex gap-6 items-center justify-end">
        {token ? (
          <>
            {token && user.role === "user" && (
              <SheetCart title={`${user.full_name}'s Cart`}>
                <div className="flex gap-x-4 items-center p-3 bg-white rounded-full shadow">
                  List Borrow
                  <ShoppingBasketIcon />
                </div>
              </SheetCart>
            )}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex gap-x-4 items-center p-1 bg-white rounded-full shadow">
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
              <DropdownMenuContent className="w-48 mt-4" align="end">
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
                {token ? (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => handleLogout()}>
                      <Link
                        to="/login"
                        className="w-full flex justify-between text-red-600"
                      >
                        Logout
                        <LogOut
                          strokeWidth={"1px"}
                          size={"1.2rem"}
                          color="red"
                        />
                      </Link>
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem>
                      <Link
                        className="w-full flex justify-between "
                        to="/login"
                      >
                        Login
                        <LogIn strokeWidth={"1px"} size={"1.2rem"} />
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        className="w-full flex justify-between "
                        to="/register"
                      >
                        Register
                        <ClipboardEdit strokeWidth={"1px"} size={"1.2rem"} />
                      </Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <div className="flex gap-x-2 items-center p-1 bg-white rounded-full shadow">
            <Avatar>
              <AvatarImage src="" alt="Guest" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="mr-4">Guest</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
