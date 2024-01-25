import { Link, useLocation } from "react-router-dom";
import { Icons } from "../icons";

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
      link: "/dashboard/team",
    },
    {
      icon: <Icons.request />,
      iconActive: <Icons.requestActive />,
      label: "Request",
      link: "/dashboard/request",
    },
  ];

  const location = useLocation();
  return (
    <div className="w-[17.29vw] px-5 fixed left-0 top-0 shadow-[4px_0px_20px_0px_rgba(0,0,0,0.05)] h-screen pt-28">
      {sideNavArr.map((navItem, index) => (
        <Link to={navItem.link} key={index}>
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
        </Link>
      ))}
    </div>
  );
}
