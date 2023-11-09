import Layout from "@/components/layout";
import { EyeOff, FileEdit } from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <Layout title="Profile">
        <div className="flex flex-col items-center space-y-5">
          <div className="w-full flex justify-end">
            <Link
              to={"/edit-profile"}
              className="p-3 bg-white rounded-md shadow-md hover:bg-indigo-50"
            >
              <FileEdit strokeWidth={"1.2px"} />
            </Link>
          </div>
          <img
            src="https://github.com/shadcn.png"
            alt="Profile"
            className="w-64 rounded-full"
          />
          <div className="w-1/2">
            <p className="font-semibold">Name</p>
            <div className="px-4 py-2 border border-slate-300 rounded-md">
              <p>John Doe</p>
            </div>
          </div>
          <div className="w-1/2">
            <p className="font-semibold">Username</p>
            <div className="px-4 py-2 border border-slate-300 rounded-md">
              <p>@johndoe</p>
            </div>
          </div>
          <div className="w-1/2">
            <p className="font-semibold">Email</p>
            <div className="px-4 py-2 border border-slate-300 rounded-md">
              <p>johndoe@domain.com</p>
            </div>
          </div>
          <div className="w-1/2">
            <p className="font-semibold">Password</p>
            <div className="px-4 py-2 border flex items-center justify-between border-slate-300 rounded-md">
              <p>********</p>
              <EyeOff strokeWidth={"1.2px"} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Profile;
