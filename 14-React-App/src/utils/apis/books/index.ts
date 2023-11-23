import {
  getBooks,
  getDetailBook,
  getFeaturedBook,
  createBook,
  updateBook,
  deleteBook,
  getPageBook,
} from "./api";
import { Book, BookPayloadSchema, bookPayloadSchema } from "./types";

export {
  getBooks,
  getDetailBook,
  getFeaturedBook,
  getPageBook,
  createBook,
  updateBook,
  deleteBook,
  bookPayloadSchema,
};

export type { Book, BookPayloadSchema };
