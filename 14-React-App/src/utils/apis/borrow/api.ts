import { PayloadPagination, Response } from "@/utils/types/api";
import { Borrow, BorrowSchema, UpdateBorrowSchema } from "./types";
import axiosWithConfig from "../axiosWithConfig";

export const getBorrows = async () => {
  try {
    const response = await axiosWithConfig.get("/borrows");

    return response.data as Response<PayloadPagination<Borrow[]>>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const createBorrow = async (body: BorrowSchema) => {
  try {
    const response = await axiosWithConfig.post("/borrows", body);

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const updateBorrow = async (
  id_borrow: string,
  body: UpdateBorrowSchema
) => {
  try {
    const response = await axiosWithConfig.put(`/borrows/${id_borrow}`, body);

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const deleteBorrow = async (id_borrow: string) => {
  try {
    const response = await axiosWithConfig.delete(`/borrows/${id_borrow}`);

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
