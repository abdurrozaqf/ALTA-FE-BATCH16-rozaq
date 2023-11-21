import {
  getBorrows,
  createBorrow,
  updateBorrow,
  deleteBorrow,
  getDetailBorrow,
} from "./api";
import {
  Borrow,
  BorrowPayload,
  BorrowSchema,
  UpdateBorrowSchema,
  updateBorrowSchema,
} from "./types";

export {
  getBorrows,
  createBorrow,
  updateBorrow,
  deleteBorrow,
  getDetailBorrow,
  updateBorrowSchema,
};
export type { Borrow, UpdateBorrowSchema, BorrowPayload, BorrowSchema };
