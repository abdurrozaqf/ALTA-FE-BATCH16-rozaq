import SignInForm from "@/components/form/SignInForm";
import Logo from "@/assets/logo-1.svg";

const Login = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center background-page">
      <div className="container w-[556px] flex flex-col items-center  bg-white rounded-md px-14 pt-10 pb-20 shadow-xl">
        <img src={Logo} alt="Logo" className="mb-10" />
        <p className="mb-4 text-[#4D4D4D] text-xl font-normal ">
          Welcome Back !
        </p>
        <p className="mb-11 text-[#ABABAB] text-base font-normal">
          Sign in to continue to your Digital Library
        </p>
        <SignInForm />
      </div>
    </div>
  );
};

export default Login;
