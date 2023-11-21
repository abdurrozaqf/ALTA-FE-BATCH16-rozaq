import {
  getBooks,
  getDetailBook,
  createBook,
  updateBook,
  deleteBook,
} from "./api";
import { BookPayloadSchema, Book, bookPayloadSchema } from "./types";

export {
  getBooks,
  getDetailBook,
  createBook,
  updateBook,
  deleteBook,
  bookPayloadSchema,
};

export type { Book, BookPayloadSchema };
