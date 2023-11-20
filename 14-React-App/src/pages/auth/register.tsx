import SignUpForm from "@/components/form/SignUpForm";
import { Toaster } from "@/components/ui/toaster";
import Logo from "@/assets/logo-1.svg";

const RegisterAccount = () => {
  return (
    <div className="w-full h-screen flex items-center font-inter overflow-auto bg-gradient-to-br from-indigo-300 to-indigo-100">
      <div className="container h-fit w-[34.75rem] flex flex-col items-center  bg-white rounded-md px-14 py-10 shadow-xl">
        <img src={Logo} alt="Logo" className="mb-10" />
        <p className="mb-2 text-[#4D4D4D] text-xl font-normal ">Registration</p>
        <p className="mb-6 text-[#ABABAB] text-base font-normal">
          For both Admin & Users
        </p>
        <SignUpForm />
      </div>
      <Toaster />
    </div>
  );
};

export default RegisterAccount;
