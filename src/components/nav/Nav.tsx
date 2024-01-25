import { useSelector } from "react-redux";
import { sath } from "../../assets";
import { Icons } from "../icons";
import { IUser } from "../../redux/slices/userSlice";

export default function Nav() {
  const user:IUser = useSelector((state:any) => state.user)

  console.log(user)
  return (
    <nav className="w-full flex justify-between items-center py-[1.125rem] px-10 z-20 fixed left-0 top-0 bg-white border-b border-grey-100">

      <div className="flex justify-start items-center gap-6">
        <img src={sath} alt="" />
        <p className="font-semibold text-black text-md">WorkSmart</p>
      </div>
      
      <div className="flex justify-start items-center">
        <Icons.notification/>
        <p className="ml-8">{user.user.email}</p>
        <div className="w-6 h-6 border border-black ml-4 rounded-full"></div>
        <Icons.dropdownBlue className="ml-[0.8rem]"/>
      </div>
    </nav>
  )
}
