import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { IUser } from "../interfaces";

export default function PrivateRoute() {
  const user:IUser = useSelector((state: any) => state.user.user);
  const authenticated = user?.isVerified;
  return !authenticated ? <Navigate to="/auth" /> : <Outlet />;
}
