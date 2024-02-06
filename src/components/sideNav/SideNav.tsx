import { useLocation, useNavigate } from "react-router-dom";
import { Icons } from "../icons";
import { useSelector } from "react-redux";
import { IUser } from "../../interfaces";
import { enqueueSnackbar } from "notistack";
import { useEffect } from "react";

interface ISideNav {
  label: string;
  link: string;
  icon: JSX.Element;
  iconActive: JSX.Element;
}
export default function SideNav() {
  const sideNavArr: ISideNav[] = [
    {
      icon: <Icons.dashboard />,
      iconActive: <Icons.dashboardActive />,
      label: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: <Icons.task />,
      iconActive: <Icons.taskActive />,
      label: "Task",
      link: "/dashboard/task",
    },
    {
      icon: <Icons.team />,
      iconActive: <Icons.teamActive />,
      label: "Team",
      link: "/dashboard/manager/team",
    },
    {
      icon: <Icons.request />,
      iconActive: <Icons.requestActive />,
      label: "Request",
      link: "/dashboard/manager/request",
    }
  ];

  const location = useLocation();
  const user: IUser = useSelector((state: any) => state.user.user);
  const navigate = useNavigate();

  const handleClick = (index: number, link: string) => {
    if (index > 1 && user.role === "Member") {
      enqueueSnackbar(`Not authorized`, {
        variant: "error",
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
    } else {
      navigate(link);
    }
  };

  const logout = () => {
    localStorage.removeItem("workSmartUser");
    localStorage.removeItem("worksmart_jwt");
    console.log('Logging out...');
    navigate('/auth/register');
    window.location.reload();  // Reload the page
  };



  return (
    <div className="w-[17.29vw] px-5 fixed left-0 top-0 shadow-[4px_0px_20px_0px_rgba(0,0,0,0.05)] h-screen pt-28">
      {sideNavArr.map((navItem, index) => (
        <div
          className={`${index === 1 || index === 2 && user.role === "Member" && "hidden"} cursor-pointer`}
          onClick={() => handleClick(index, navItem.link)}
        >
          <div
            className={`${
              location.pathname === navItem.link &&
              "bg-primary-bold !text-white rounded-[10px]"
            } flex justify-start p-[10px] gap-5 items-center text-grey-200 mb-[10px]`}
          >
            <div>
              {location.pathname === navItem.link
                ? navItem.iconActive
                : navItem.icon}
            </div>
            <p className="text-sm ">{navItem.label}</p>
          </div>
        </div>
      ))}

      <button className="absolute bottom-0 left-0 flex justify-start p-[10px] gap-5 items-center mb-[10px] bg-primary-bold w-[90%] ml-[5%] rounded-[10px] text-white" onClick={logout}>
        <Icons.logout/>
        Logout
      </button>
    </div>
  );
}
