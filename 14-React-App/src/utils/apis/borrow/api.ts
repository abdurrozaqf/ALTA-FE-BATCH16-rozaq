import { PayloadPagination, Response } from "@/utils/types/api";
import { Borrow } from "./types";
import axiosWithConfig from "../axiosWithConfig";

export const getBorrows = async () => {
  try {
    const response = await axiosWithConfig.get(
      "https://hells-kitchen.onrender.com/api/v1/borrows"
    );

    return response.data as Response<PayloadPagination<Borrow[]>>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const createBorrow = async () => {
  try {
    const response = await axiosWithConfig.post(
      "https://hells-kitchen.onrender.com/api/v1/borrows"
    );

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
