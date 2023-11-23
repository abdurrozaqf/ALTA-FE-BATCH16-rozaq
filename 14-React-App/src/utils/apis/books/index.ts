import {
  getBooks,
  getDetailBook,
  getFeaturedBook,
  createBook,
  updateBook,
  deleteBook,
  getPageBook,
  getNewBook,
} from "./api";
import { Book, BookPayloadSchema, bookPayloadSchema } from "./types";

export {
  getBooks,
  getDetailBook,
  getFeaturedBook,
  getPageBook,
  getNewBook,
  createBook,
  updateBook,
  deleteBook,
  bookPayloadSchema,
};

export type { Book, BookPayloadSchema };
