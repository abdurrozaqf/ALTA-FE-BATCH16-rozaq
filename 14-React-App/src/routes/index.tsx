import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import Home from "@/pages/index";
import ListOfBook from "@/pages/books/index";
import DetailBook from "@/pages/books/detail";
import HistoryBorrow from "@/pages/profile/history-borrow";
import Profile from "@/pages/profile/index";
import EditProfile from "@/pages/profile/edit-profile";
import Admin from "@/pages/admin/index";
import AdminListBorrow from "@/pages/admin/list-borrow-book";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/list-book",
      element: <ListOfBook />,
    },
    {
      path: "/detail-book/:itemId",
      element: <DetailBook />,
    },
    {
      path: "/history-borrow",
      element: <HistoryBorrow />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/edit-profile",
      element: <EditProfile />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
    {
      path: "/admin-list-borrow",
      element: <AdminListBorrow />,
    },
  ]);

  return <RouterProvider router={router} />;
}
