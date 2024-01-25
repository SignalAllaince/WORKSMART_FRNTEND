import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const auth = useSelector((state: any) => state.user.isLoggedIn);
  const isLoggedIn = auth;
  return !isLoggedIn ? <Navigate to="/auth/login" /> : <Outlet />;
}
