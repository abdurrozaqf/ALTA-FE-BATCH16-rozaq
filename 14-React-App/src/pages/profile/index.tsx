import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FileEdit } from "lucide-react";

import { User, getProfile } from "@/utils/apis/users";

import { useToast } from "@/components/ui/use-toast";
import Layout from "@/components/layout";

const ProfileAccount = () => {
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
    <>
      <Layout title="Profile">
        <div className="flex flex-col items-center space-y-5">
          <div className="w-full flex justify-end">
            <Link
              to={"/edit-profile"}
              className="p-3 bg-white dark:bg-black/40 rounded-md shadow-md hover:bg-indigo-100 dark:hover:bg-indigo-950"
            >
              <FileEdit strokeWidth={"1.2px"} />
            </Link>
          </div>
          <img
            src={profile?.profile_picture}
            alt={profile?.full_name}
            className="h-36 w-h-36 object-cover aspect-square rounded-full"
          />
          <div className="w-full md:w-2/3 lg:w-1/2 pt-10">
            <p className="font-semibold dark:font-normal tracking-wide mb-2">
              Full Name
            </p>
            <div className="px-4 py-2 border border-slate-300 dark:border-white/30 rounded-md">
              <p>{profile?.full_name}</p>
            </div>
          </div>
          <div className="w-full md:w-2/3 lg:w-1/2">
            <p className="font-semibold dark:font-normal tracking-wide mb-2">
              Email
            </p>
            <div className="px-4 py-2 border border-slate-300 dark:border-white/30 rounded-md">
              <p>{profile?.email}</p>
            </div>
          </div>
          <div className="w-full md:w-2/3 lg:w-1/2">
            <p className="font-semibold dark:font-normal tracking-wide mb-2">
              Address
            </p>
            <div className="px-4 py-2 border border-slate-300 dark:border-white/30 rounded-md">
              <p>{profile?.address}</p>
            </div>
          </div>
          <div className="w-full md:w-2/3 lg:w-1/2">
            <p className="font-semibold dark:font-normal tracking-wide mb-2">
              Phone Number
            </p>
            <div className="px-4 py-2 border border-slate-300 dark:border-white/30 rounded-md">
              <p>{profile?.phone_number}</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProfileAccount;
