export interface Borrow {
  id: number;
  borrow_date: string;
  due_date: string;
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
