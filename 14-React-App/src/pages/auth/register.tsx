import Logo from "@/assets/logo-1.svg";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Register } from "@/utils/apis/auth";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const RegisterAccount = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const body = {
        full_name: fullName,
        email,
        password,
        role: "user",
        address,
        phone_number: phoneNumber,
      };

      const result = await Register(body);
      alert(result.message);
    } catch (error: any) {
      alert(error.toString());
    }
  }

  return (
    <div className="w-full h-screen flex items-center justify-center background-page">
      <div className="container w-[556px] flex flex-col items-center  bg-white rounded-md px-14 pt-10 pb-20 shadow-xl">
        <img src={Logo} alt="Logo" className="mb-10" />
        <p className="mb-4 text-[#4D4D4D] text-xl font-normal ">Registration</p>
        <p className="mb-11 text-[#ABABAB] text-base font-normal">
          For both Admin & Users
        </p>
        <form
          className="w-full flex flex-col gap-3"
          onSubmit={(e) => onSubmit(e)}
        >
          <div className="">
            <p className="font-semibold">Full Name</p>
            <Input
              placeholder="john doe"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="">
            <p className="font-semibold">Email</p>
            <Input
              placeholder="johndoen@mail.com"
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
          <div className="">
            <p className="font-semibold">Address</p>
            <Input
              placeholder="Address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="">
            <p className="font-semibold">Phone Number</p>
            <Input
              placeholder="Phone Number"
              type="number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <Button type="submit">Register</Button>
        </form>
        <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
          or
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="text-center text-sm text-gray-600 mt-2">
            Already a User?&nbsp;
            <Link to={"/"} className="text-blue-500 hover:underline">
              Login now
            </Link>
          </p>
          <Link
            to={"/home"}
            className="text-center text-sm text-gray-600 mt-2 hover:text-blue-500"
          >
            Use as Guest
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterAccount;
