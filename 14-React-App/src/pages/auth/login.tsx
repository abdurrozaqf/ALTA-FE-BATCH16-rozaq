import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { Login } from "@/utils/apis/auth";
import Logo from "@/assets/logo-1.svg";

import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoginAccount = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const body = {
        email,
        password,
      };

      const result = await Login(body);
      localStorage.setItem("token", result.payload.token);
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
    <div className="w-full h-screen flex items-center font-inter overflow-auto bg-gradient-to-br from-indigo-300 to-indigo-100">
      <div className="container w-[556px] flex flex-col items-center bg-white rounded-md py-20 px-14 shadow-xl">
        <img src={Logo} alt="Logo" className="mb-10" />
        <p className="mb-4 text-[#4D4D4D] text-xl font-normal ">
          Welcome Back !
        </p>
        <p className="mb-11 text-[#ABABAB] text-base font-normal">
          Sign in to continue to your Digital Library
        </p>
        <form
          className="w-full flex flex-col gap-4"
          onSubmit={(e) => onSubmit(e)}
        >
          <div className="">
            <p className="font-semibold">Email</p>
            <Input
              placeholder="mail@domain.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="">
            <p className="font-semibold">Password</p>
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit">Login</Button>
        </form>
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
  );
};

export default LoginAccount;
