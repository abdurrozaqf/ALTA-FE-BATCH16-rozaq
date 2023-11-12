import { FormEvent, useEffect, useState } from "react";
import { Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout";
import Alert from "@/components/alert";

import {
  User,
  deleteProfile,
  getProfile,
  updateProfile,
} from "@/utils/apis/users";

const EditProfile = () => {
  const [profile, setProfile] = useState<Partial<User>>({
    full_name: "",
    email: "",
    address: "",
    phone_number: "",
    password: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getProfile();
      setProfile(result.payload);
    } catch (error: any) {
      alert(error.toString());
    }
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const body = {
      full_name: profile.full_name ?? "",
      email: profile.email ?? "",
      password: profile.password ?? "",
      address: profile.address ?? "",
      phone_number: profile.phone_number ?? "",
    };

    try {
      const result = await updateProfile(body);
      alert(result.message);
    } catch (error: any) {
      alert(error.toString());
    }
  }

  async function handleDeleteProfile() {
    try {
      const result = await deleteProfile();
      alert(result.message);
    } catch (error: any) {
      alert(error.toString());
    }
  }

  return (
    <>
      <Layout title="Edit Profile">
        <div className="flex flex-col items-center gap-5 relative">
          <div className="w-full flex justify-end absolute">
            <Alert
              title="Are you absolutely sure?"
              description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
              onAction={handleDeleteProfile}
            >
              <Button
                variant="destructive"
                className="shadow-md border hover:bg-red-800"
              >
                <Trash2 />
              </Button>
            </Alert>
          </div>
          <img
            src={profile.profile_picture}
            alt={profile.full_name}
            className="w-32 h-32 rounded-full"
          />
          <form
            className="w-1/2 flex flex-col gap-3"
            onSubmit={(e) => onSubmit(e)}
          >
            <div className="">
              <p className="font-semibold">Full Name</p>
              <Input
                type="text"
                value={profile?.full_name}
                onChange={(e) =>
                  setProfile((prevState) => {
                    return { ...prevState, full_name: e.target.value };
                  })
                }
              />
            </div>
            <div className="">
              <p className="font-semibold">Email</p>
              <Input
                type="email"
                value={profile?.email}
                onChange={(e) =>
                  setProfile((prevState) => {
                    return { ...prevState, email: e.target.value };
                  })
                }
              />
            </div>

            <div className="">
              <p className="font-semibold">Address</p>
              <Input
                type="text"
                value={profile?.address}
                onChange={(e) =>
                  setProfile((prevState) => {
                    return { ...prevState, address: e.target.value };
                  })
                }
              />
            </div>
            <div className="">
              <p className="font-semibold">Phone Number</p>
              <Input
                type="number"
                value={profile?.phone_number}
                onChange={(e) =>
                  setProfile((prevState) => {
                    return { ...prevState, phone_number: e.target.value };
                  })
                }
              />
            </div>
            <div className="">
              <p className="font-semibold">Password</p>
              <Input
                type="password"
                value={profile?.password}
                onChange={(e) =>
                  setProfile((prevState) => {
                    return { ...prevState, password: e.target.value };
                  })
                }
              />
            </div>
            <Button type="submit" className="w-full">
              Save
            </Button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default EditProfile;
