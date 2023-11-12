export type Response<T = any> = {
  message: string;
  payload: T;
};

export type PayloadPagination<T = any> = {
  currentPage: number;
  datas: T;
  totalItems: number;
  totalPages: number;
};
