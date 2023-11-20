import SignInForm from "@/components/form/SignInForm";
import { Toaster } from "@/components/ui/toaster";
import Logo from "@/assets/logo-1.svg";

const LoginAccount = () => {
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
          <SignInForm />
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default LoginAccount;
