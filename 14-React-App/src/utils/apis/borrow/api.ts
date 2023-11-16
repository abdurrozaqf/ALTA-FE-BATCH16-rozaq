import { PayloadPagination, Response } from "@/utils/types/api";
import { Borrow, BorrowPayload, UpdateBorrowPlayLoad } from "./types";
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

export const createBorrow = async (body: BorrowPayload) => {
  try {
    const response = await axiosWithConfig.post(
      "https://hells-kitchen.onrender.com/api/v1/borrows",
      body
    );

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const updateBorrow = async (
  id_borrow: string,
  body: UpdateBorrowPlayLoad
) => {
  try {
    const response = await axiosWithConfig.put(
      `https://hells-kitchen.onrender.com/api/v1/borrows/${id_borrow}`,
      body
    );

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const deleteBorrow = async (id_borrow: string) => {
  try {
    const response = await axiosWithConfig.delete(
      `https://hells-kitchen.onrender.com/api/v1/borrows/${id_borrow}`
    );

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
