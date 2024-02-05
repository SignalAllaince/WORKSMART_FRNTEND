import { useSelector } from "react-redux";
import { sath } from "../../assets";
import { Icons } from "../icons";
import { IUser } from "../../interfaces";

export default function Nav() {
  const user:IUser = useSelector((state:any) => state.user.user)

  const firstLetter = user.first_name.split("")[0]
  const lastLetter = user.last_name.split("")[0]

  console.log(user)
  return (
    <nav className="w-full flex justify-between items-center py-[1.125rem] px-10 z-20 fixed left-0 top-0 bg-white border-b border-grey-100">

      <div className="flex justify-start items-center gap-6">
        <img src={sath} alt="" />
        <p className="font-semibold text-black text-md">WorkSmart</p>
      </div>
      
      <div className="flex justify-start items-center">
        <Icons.notification/>
        <p className="ml-8">{user.email}</p>
        <div className="w-8 h-8 bg-gray-100 flex justify-center items-center text-primary-bold font-bold ml-4 rounded-full">
          <p>{firstLetter}{lastLetter}</p>
        </div>
        <Icons.dropdownBlue className="ml-[0.8rem]"/>
      </div>
    </nav>
  )
}
