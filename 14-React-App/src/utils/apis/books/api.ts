import { Response, PayloadPagination } from "@/utils/types/api";
import { Book, BookPayloadSchema } from "./types";
import axiosWithConfig from "../axiosWithConfig";

export const getBooks = async () => {
  try {
    const response = await axiosWithConfig.get("/books");

    return response.data as Response<PayloadPagination<Book[]>>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getDetailBook = async (id_book: string) => {
  try {
    const response = await axiosWithConfig.get(`/books/${id_book}`);

    return response.data as Response<Book>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const createBook = async (body: BookPayloadSchema) => {
  try {
    const response = await axiosWithConfig.post("/books", body);

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const updateBook = async (id_book: string, body: BookPayloadSchema) => {
  try {
    const response = await axiosWithConfig.put(`/books/${id_book}`, body);

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const deleteBook = async (id_book: string) => {
  try {
    const response = await axiosWithConfig.delete(
      `https://hells-kitchen.onrender.com/api/v1/books/${id_book}`
    );

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
