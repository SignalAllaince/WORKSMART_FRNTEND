import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PublicRoute() {
    // const isLoggedIn = auth.isLoggedIn;
    const auth = useSelector((state: any) => state.user.isLoggedIn);
    const isLoggedIn = auth;
    return(  isLoggedIn ? <Navigate to="/dashboard" /> : <Outlet />)
  }