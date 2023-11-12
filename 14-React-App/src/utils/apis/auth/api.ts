import { Response } from "@/utils/types/api";
import { authLogin, authRegister } from "./types";
import axiosWithConfig from "../axiosWithConfig";

export const Register = async (body: authRegister) => {
  try {
    const response = await axiosWithConfig.post(
      "https://hells-kitchen.onrender.com/api/v1/register",
      body
    );

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const Login = async (body: authLogin) => {
  try {
    const response = await axiosWithConfig.post(
      "https://hells-kitchen.onrender.com/api/v1/login",
      body
    );

    return response.data as Response<{ token: string }>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
