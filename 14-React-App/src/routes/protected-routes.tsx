import { Outlet, Navigate, useLocation } from "react-router-dom";

import { useToken } from "@/utils/context/token";

const ProtectedRoutes = () => {
  const { pathname } = useLocation();
  const { token, user } = useToken();

  const authProtected = ["/login", "/register"];
  const tokenProtected = [
    "/profile",
    "/edit-profile",
    "/admin-dashboard",
    "/admin-list-borrow",
    "/history-borrow",
  ];
  const roleProtected = ["/admin-dashboard", "/admin-list-borrow"];
  const role2Protected = ["/history-borrow"];

  console.log(pathname);
  if (authProtected.includes(pathname)) {
    if (token) return <Navigate to="/" />;
  }

  if (tokenProtected.includes(pathname)) {
    if (!token) return <Navigate to="/login" />;

    if (roleProtected.includes(pathname)) {
      if (user.role === "user") return <Navigate to="/" />;
    }

    if (role2Protected.includes(pathname)) {
      if (user.role === "admin") return <Navigate to="/" />;
    }
  }

  return <Outlet />;
};

export default ProtectedRoutes;
