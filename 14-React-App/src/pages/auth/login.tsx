import SignInForm from "@/components/form/SignInForm";
import { Toaster } from "@/components/ui/toaster";

import { useTheme } from "@/utils/context/theme-provider";

import Logo from "@/assets/logo-1.svg";
import LogoLight from "@/assets/logo-light-2.svg";

const LoginAccount = () => {
  const { theme } = useTheme();

  return (
    <>
      <div className="w-full h-screen flex items-center font-inter overflow-auto bg-gradient-to-br from-indigo-300 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900/20">
        <div className="container w-full md:w-[34.75rem] h-full md:h-fit p-8 md:p-14 lg:py-20 lg:px-14 flex flex-col items-center justify-center bg-white dark:bg-black/25 dark:border rounded-md shadow-xl">
          <img
            src={theme === "dark" ? LogoLight : Logo}
            alt="Logo"
            className="mb-4 w-32 h-32  md:h-auto md:w-auto"
          />
          <p className="mb-4 text-[#4D4D4D] dark:text-white text-xl font-normal ">
            Welcome Back !
          </p>
          <p className="mb-11 text-[#ABABAB] dark:text-white text-base font-normal">
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
