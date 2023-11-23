import SignUpForm from "@/components/form/SignUpForm";
import { Toaster } from "@/components/ui/toaster";

import { useTheme } from "@/utils/context/theme-provider";

import Logo from "@/assets/logo-1.svg";
import LogoLight from "@/assets/logo-light-2.svg";

const RegisterAccount = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full h-screen flex items-center font-inter overflow-auto bg-gradient-to-br from-indigo-300 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900/20">
      <div className="container w-full h-full md:w-[34.75rem] md:h-fit p-6 md:p-8 lg:py-10 lg:px-14 flex flex-col items-center bg-white dark:bg-black/25 dark:border rounded-md shadow-xl">
        <img
          src={theme === "dark" ? LogoLight : Logo}
          alt="Logo"
          className="mb-4 w-32 h-32 md:h-auto md:w-auto"
        />
        <p className="mb-2 text-[#4D4D4D] dark:text-white text-xl font-normal ">
          Registration
        </p>
        <p className="mb-6 text-[#ABABAB] dark:text-white text-base font-normal">
          For both Admin & Users
        </p>
        <SignUpForm />
      </div>
      <Toaster />
    </div>
  );
};

export default RegisterAccount;
