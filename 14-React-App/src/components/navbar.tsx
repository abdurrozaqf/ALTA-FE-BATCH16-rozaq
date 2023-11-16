import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ChevronDown, LogOut, UserCircle2, UserCog } from "lucide-react";
import { User, getProfile } from "@/utils/apis/users";
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

interface Props {
  title?: string;
}

const Navbar = (props: Props) => {
  const { title } = props;
  const { toast } = useToast();

  const [profile, setProfile] = useState<User>();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getProfile();
      setProfile(result.payload);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  return (
    <div className="flex bg-[#F3F3F7] py-2 px-11 items-center justify-between shadow z-40">
      <Link to="/">
        <img src={Logo} alt="Logo" className="w-[4rem]" />
      </Link>
      <p className="mb-4 text-2xl font-semibold leading-none mt-3">{title}</p>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex gap-x-4 items-center p-1 bg-white rounded-full shadow">
          <Avatar>
            <AvatarImage src={profile?.profile_picture || ""} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>{profile?.full_name || "Guest"}</p>
          <ChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48 mt-4" align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link
              to={"/profile"}
              className="w-full flex justify-between cursor-pointer"
            >
              <p>Profile</p>
              <UserCircle2 strokeWidth={"1px"} size={"1.2rem"} />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link
              to={"/edit-profile"}
              className="w-full flex justify-between cursor-pointer"
            >
              <p>Edit Profile</p>
              <UserCog strokeWidth={"1px"} size={"1.2rem"} />
            </Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link
              className="w-full flex justify-between cursor-pointer"
              to="/admin"
            >
              Admin List of Books
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link
              className="w-full flex justify-between cursor-pointer"
              to="/admin-list-borrow"
            >
              Admin List of Borrows
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link
              className="w-full flex justify-between cursor-pointer text-red-500"
              to="/login"
            >
              Logout <LogOut strokeWidth={"1px"} size={"1.2rem"} color="red" />
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Navbar;
