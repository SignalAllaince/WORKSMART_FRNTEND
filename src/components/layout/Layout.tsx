import Nav from "../nav/Nav";
import SideNav from "../sideNav/SideNav";
import { ReactNode } from "react";

interface ILayout{
  children: ReactNode;
}

export default function Layout({children}:ILayout) {
  return (
    <div>
      <Nav/>
      <SideNav/>
      {children}
    </div>
  )
}
