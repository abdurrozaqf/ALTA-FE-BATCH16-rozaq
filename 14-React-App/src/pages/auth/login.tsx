import { Login, LoginSchema, loginSchema } from "@/utils/apis/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Logo from "@/assets/logo-1.svg";

import { CustomFormField } from "@/components/form/CustomForm";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";

import { Loader2 } from "lucide-react";
import { useToken } from "@/utils/context/token";

const LoginAccount = () => {
  const { changeToken } = useToken();
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginSchema) {
    try {
      const result = await Login(data);
      changeToken(result.payload.token);
      toast({ description: result.message });

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
      <div className="w-full h-screen flex items-center font-inter overflow-auto bg-gradient-to-br from-indigo-300 to-indigo-50">
        <div className="container w-[556px] flex flex-col items-center bg-white rounded-md py-20 px-14 shadow-xl">
          <img src={Logo} alt="Logo" className="mb-10" />
          <p className="mb-4 text-[#4D4D4D] text-xl font-normal ">
            Welcome Back !
          </p>
          <p className="mb-11 text-[#ABABAB] text-base font-normal">
            Sign in to continue to your Digital Library
          </p>
          <Form {...form}>
            <form
              className="w-full flex flex-col gap-4"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <CustomFormField
                control={form.control}
                name="email"
                label="Email"
              >
                {(field) => (
                  <Input
                    {...field}
                    placeholder="name@mail.com"
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
                  "Login"
                )}
              </Button>
            </form>
          </Form>
          <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
            or
          </div>
          <div className="w-full flex items-center justify-between">
            <p className="text-center text-sm text-gray-600">
              New User? &nbsp;
              <Link to="/register" className="text-blue-500 hover:underline">
                Register Here
              </Link>
            </p>
            <Link
              to="/"
              className="text-center text-sm text-gray-600 hover:text-blue-500"
            >
              Use as Guest
            </Link>
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default LoginAccount;
