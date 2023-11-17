import { Link } from "react-router-dom";
import { ReactNode } from "react";

import Sidebar, { SidebarItem } from "@/components/sidebar";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/navbar";

import {
  LayoutDashboard,
  ClipboardEdit,
  LibraryBig,
  History,
  LogIn,
  LogOut,
} from "lucide-react";

import { useToken } from "@/utils/context/token";
import { useToast } from "@/components/ui/use-toast";
import Alert from "./alert";

interface Props {
  children: ReactNode;
  title?: string | any;
}

const Layout = (props: Readonly<Props>) => {
  const { children, title } = props;
  const { toast } = useToast();

  const { token, user, changeToken } = useToken();

  async function handleLogout() {
    changeToken();
    toast({
      description: "Logout Successfully",
    });
  }

  return (
    <div className="w-full h-screen flex py-12 px-9 font-inter overflow-auto bg-gradient-to-br from-indigo-300 to-indigo-100">
      <div className="container flex px-0 shadow rounded-xl overflow-auto">
        <Sidebar>
          <div className="h-full flex flex-col">
            {token ? (
              <div className="h-full flex flex-col justify-between">
                <div>
                  <Link to="/">
                    <SidebarItem icon={<LayoutDashboard />} text="Home" />
                  </Link>
                  <Link to="/list-book">
                    <SidebarItem icon={<LibraryBig />} text="List of book" />
                  </Link>
                  {user.role === "user" && (
                    <Link to="/history-borrow">
                      <SidebarItem icon={<History />} text="History Borrow" />
                    </Link>
                  )}
                </div>
                <div>
                  <Alert
                    title="Are you absolutely sure for Log Out?"
                    onAction={handleLogout}
                  >
                    <hr />
                    <SidebarItem icon={<LogOut />} text="Logout" />
                  </Alert>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col justify-between">
                <div>
                  <Link to="/">
                    <SidebarItem icon={<LayoutDashboard />} text="Home" />
                  </Link>
                  <Link to="/list-book">
                    <SidebarItem icon={<LibraryBig />} text="List of book" />
                  </Link>
                </div>
                <div>
                  <hr />
                  <Link to="/login">
                    <SidebarItem icon={<LogIn />} text="Login" />
                  </Link>
                  <Link to="/register">
                    <SidebarItem icon={<ClipboardEdit />} text="Register" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </Sidebar>
        <div className="flex flex-col grow bg-[#F3F3F7] ">
          <Navbar title={title} />
          <div className="overflow-auto px-11 py-6">{children}</div>
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default Layout;
