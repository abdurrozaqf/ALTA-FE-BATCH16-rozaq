import { Link } from "react-router-dom";

import Navbar from "./navbar";
import { ReactNode } from "react";
import Sidebar, { SidebarItem } from "./sidebar";
import {
  ClipboardEdit,
  LibraryBig,
  History,
  LogIn,
  LayoutDashboard,
  BookOpenText,
} from "lucide-react";

interface Props {
  children: ReactNode;
  title?: string;
}

const Layout = (props: Readonly<Props>) => {
  const { children, title } = props;

  return (
    <div className="w-full h-screen flex background-page py-12 px-9 relative">
      <div className="2xl:container 2xl:px-0 w-full flex mx-auto shadow rounded-md overflow-auto">
        <Sidebar>
          <div className="h-full flex flex-col justify-between">
            <div>
              <Link to="/home">
                <SidebarItem icon={<LayoutDashboard />} text="Home" />
              </Link>
              <Link to="/list-book">
                <SidebarItem icon={<LibraryBig />} text="List of Books" />
              </Link>
              <Link to="/detail-book">
                <SidebarItem icon={<BookOpenText />} text="Detail Book" />
              </Link>
              <Link to="/history-borrow">
                <SidebarItem icon={<History />} text="History Borrow" />
              </Link>
            </div>
            <div>
              <Link to={"/"}>
                <SidebarItem icon={<LogIn />} text="Login" />
              </Link>
              <Link to={"/register"}>
                <SidebarItem icon={<ClipboardEdit />} text="Register" />
              </Link>
            </div>
          </div>
        </Sidebar>
        <div className="flex flex-col grow bg-[#F3F3F7] ">
          <Navbar title={title} />
          <div className="overflow-auto px-11 py-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
