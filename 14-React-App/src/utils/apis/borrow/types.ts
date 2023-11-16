export interface Borrow {
  id: number;
  borrow_date: string;
  due_date: string;
  return_date: string;
  book: {
    id: number;
    title: string;
    cover_image: string;
  };
  user: {
    id: number;
    full_name: string;
  };
}

export interface BorrowPayload {
  bookId: number[];
  borrow_date: string;
}

export interface UpdateBorrowPlayLoad {
  borrow_date: string;
  due_date: string;
  return_date: string;
}
