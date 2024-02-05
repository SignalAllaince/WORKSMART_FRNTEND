import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { IUser } from "../interfaces";

export default function ManagerRoute() {
  const user:IUser = useSelector((state: any) => state.user.user);
  const authorized = user?.role !== "Member";
  return !authorized ? <Navigate to="/dashboard" /> : <Outlet />;
}
