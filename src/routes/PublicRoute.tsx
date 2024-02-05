import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { IUser } from "../interfaces";

export default function PublicRoute() {
  const user: IUser = useSelector((state: any) => state.user.user);
  const authenticated = user?.isVerified;
  return authenticated ? <Navigate to="/dashboard" /> : <Outlet />;
}
