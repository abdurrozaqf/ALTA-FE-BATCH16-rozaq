export interface Book {
  id: number;
  title: string;
  featured: boolean;
  author: string;
  isbn: string;
  category: string;
  description: string;
  cover_image: string;
}

export interface BookPayload {
  title: string;
  author: string;
  isbn: string;
  category: string;
  description: string;
}
