import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProtectedRoutes from "./protected-routes";
import Home from "@/pages";
import LoginAccount from "@/pages/auth/login";
import RegisterAccount from "@/pages/auth/register";
import ListOfBook from "@/pages/books/index";
import DetailBook from "@/pages/books/detail";
import HistoryBorrow from "@/pages/profile/history-borrow";
import ProfileAccount from "@/pages/profile/index";
import EditProfile from "@/pages/profile/edit-profile";
import AdminDashboard from "@/pages/admin/index";
import AdminListBorrow from "@/pages/admin/list-borrow-book";

export default function Router() {
  const router = createBrowserRouter([
    {
      element: <ProtectedRoutes />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <LoginAccount />,
        },
        {
          path: "/register",
          element: <RegisterAccount />,
        },
        {
          path: "/list-book",
          element: <ListOfBook />,
        },
        {
          path: "/detail-book/:id_book",
          element: <DetailBook />,
        },
        {
          path: "/history-borrow",
          element: <HistoryBorrow />,
        },
        {
          path: "/profile",
          element: <ProfileAccount />,
        },
        {
          path: "/edit-profile",
          element: <EditProfile />,
        },
        {
          path: "/admin-dashboard",
          element: <AdminDashboard />,
        },
        {
          path: "/admin-list-borrow",
          element: <AdminListBorrow />,
        },
        {
          path: "*",
          element: <div>404 page not found</div>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
