import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout";
import Alert from "@/components/alert";

import {
  User,
  getProfile,
  deleteProfile,
  updateProfile,
  UpdateProfileSchema,
  updateProfileSchema,
} from "@/utils/apis/users";

import { Loader2, Trash2 } from "lucide-react";
import { Form } from "@/components/ui/form";
import { CustomFormField } from "@/components/form/CustomForm";
import { useToken } from "@/utils/context/token";

const EditProfile = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { changeToken } = useToken();

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

  const form = useForm<UpdateProfileSchema>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      full_name: profile?.full_name!,
      email: profile?.email!,
      password: "",
      address: profile?.address!,
      phone_number: profile?.phone_number!,
      profile_picture: profile?.profile_picture!,
    },
    values: {
      full_name: profile?.full_name!,
      email: profile?.email!,
      password: "",
      address: profile?.address!,
      phone_number: profile?.phone_number!,
    },
  });

  async function onSubmit(data: UpdateProfileSchema) {
    try {
      const result = await updateProfile(data);
      toast({ description: result.message });
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  async function handleDeleteProfile() {
    try {
      const result = await deleteProfile();
      toast({ description: result.message });
      changeToken();

      navigate("/");
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
      <Layout title="Edit Profile">
        <div className="flex flex-col items-center gap-5">
          <div className="w-full flex justify-end">
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
          <Form {...form}>
            <form
              className="w-1/2 flex flex-col gap-2"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <CustomFormField
                control={form.control}
                name="full_name"
                label="Full Name"
              >
                {(field) => (
                  <Input
                    {...field}
                    placeholder={profile?.full_name}
                    type="text"
                    disabled={form.formState.isSubmitting}
                    aria-disabled={form.formState.isSubmitting}
                  />
                )}
              </CustomFormField>

              {/* IMAGES */}
              <CustomFormField
                control={form.control}
                name="profile_picture"
                label="Profile Picture"
              >
                {() => (
                  <Input
                    type="file"
                    disabled={form.formState.isSubmitting}
                    aria-disabled={form.formState.isSubmitting}
                  />
                )}
              </CustomFormField>
              <CustomFormField
                control={form.control}
                name="email"
                label="Email"
              >
                {(field) => (
                  <Input
                    {...field}
                    placeholder={profile?.email}
                    type="email"
                    disabled={form.formState.isSubmitting}
                    aria-disabled={form.formState.isSubmitting}
                  />
                )}
              </CustomFormField>
              <CustomFormField
                control={form.control}
                name="password"
                label="Password"
              >
                {(field) => (
                  <Input
                    {...field}
                    placeholder="Password"
                    type="password"
                    disabled={form.formState.isSubmitting}
                    aria-disabled={form.formState.isSubmitting}
                  />
                )}
              </CustomFormField>

              <CustomFormField
                control={form.control}
                name="address"
                label="Address"
              >
                {(field) => (
                  <Input
                    {...field}
                    placeholder={profile?.address}
                    type="text"
                    disabled={form.formState.isSubmitting}
                    aria-disabled={form.formState.isSubmitting}
                  />
                )}
              </CustomFormField>
              <CustomFormField
                control={form.control}
                name="phone_number"
                label="Phone Number"
              >
                {(field) => (
                  <Input
                    {...field}
                    placeholder={profile?.phone_number}
                    type="tel"
                    disabled={form.formState.isSubmitting}
                    aria-disabled={form.formState.isSubmitting}
                  />
                )}
              </CustomFormField>
              <Button
                className="mt-4"
                type="submit"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                    wait
                  </>
                ) : (
                  "Save"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </Layout>
    </>
  );
};

export default EditProfile;
