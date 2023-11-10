import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, LogOut, UserCircle2, UserCog } from "lucide-react";
import Logo from "@/assets/logo-1.svg";
import { Link } from "react-router-dom";

interface Props {
  title?: string;
}

const Navbar = (props: Props) => {
  const { title } = props;

  return (
    <div className="flex p-4 bg-[#F3F3F7] py-4 px-11 items-center justify-between shadow z-40">
      <Link to={"/home"}>
        <img src={Logo} alt="Logo" className="w-[4rem]" />
      </Link>
      <p className="mb-4 text-2xl font-semibold leading-none mt-3">{title}</p>
      <div className="bg-white hover:bg-indigo-50 p-2 rounded-full border">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center">
            <Avatar className="mr-3">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="mr-2">Guest</p>
            <div className="mr-2">
              <ChevronDown />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 mt-4" align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link to={"/profile"} className="w-full flex justify-between">
                <p>Profile</p>
                <UserCircle2 strokeWidth={"1px"} size={"1.2rem"} />
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                to={"/edit-profile"}
                className="w-full flex justify-between"
              >
                <p>Edit Profile</p>
                <UserCog strokeWidth={"1px"} size={"1.2rem"} />
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <a className="w-full flex justify-between" href="/">
                Logout <LogOut strokeWidth={"1px"} size={"1.2rem"} />
              </a>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <a className="w-full flex justify-between" href="/admin">
                Admin List of Books
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a
                className="w-full flex justify-between"
                href="/admin-list-borrow"
              >
                Admin List of Borrows
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
