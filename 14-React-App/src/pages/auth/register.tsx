import SignUpForm from "@/components/form/SignUpForm";
import Logo from "@/assets/logo-1.svg";

const Register = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center background-page">
      <div className="container w-[556px] flex flex-col items-center  bg-white rounded-md px-14 pt-10 pb-20 shadow-xl">
        <img src={Logo} alt="Logo" className="mb-10" />
        <p className="mb-4 text-[#4D4D4D] text-xl font-normal ">Registration</p>
        <p className="mb-11 text-[#ABABAB] text-base font-normal">
          For both Admin & Users
        </p>
        <SignUpForm />
      </div>
    </div>
  );
};

export default Register;
