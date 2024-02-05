import Layout from "../../components/layout/Layout";
import FlexCard from "../../components/flexCard/FlexCard";
import { AddCircle } from "iconsax-react";
import { useState } from "react";
import BackDrop from "../../components/modal/BackDrop";
import AddTaskModal from "../../components/modal/AddTaskModal";
import { useSelector } from "react-redux";
import { ITask, IUser } from "../../interfaces";
import HomeTable from "./dashBoardTable";
import DonutChart from "../../components/donutChart/Chart";
import CalendarComponent from "./Calendar";
import UpcomingEvents from "./UpcomingEvents";

export default function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setOpenModal(true);
    console.log(openModal);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const user: IUser = useSelector((state: any) => state.user.user);

  const allTasks: ITask[] = useSelector((state: any) => state.task.tasks);

  const notStartedTask = allTasks.filter(
    (task) => task.progress === "Not Started"
  );
  const completedTask = allTasks.filter(
    (task) => task.progress === "Completed"
  );

  const inProgress = allTasks.filter((task) => task.progress === "In Progress");

  const pendingApproval = allTasks.filter(
    (task) => task.progress === "Pending Approval"
  );

  const approvedTask = allTasks.filter((task) => task.progress === "Approved");

  const chartData = [
    notStartedTask.length,
    completedTask.length,
    inProgress.length,
    pendingApproval.length,
    approvedTask.length,
  ];

  const keys = [
    {
      label: "In Progress",
      color: "#1CB8F0",
    },
    {
      label: "Not Started",
      color: "#9C3233",
    },
    {
      label: "Pending Approval",
      color: "#D79A54",
    },
    {
      label: "Completed",
      color: "#000",
    },
    {
      label: "Approved",
      color: "#61D766",
    },
  ];

  return (
    <Layout>
      <div
        style={{ width: "calc(100vw - 17.29vw)", marginLeft: "17.29vw" }}
        className=" min-h-screen mt-[60px] px-16 py-8"
      >
        <FlexCard>
          <div>
            <h2 className="text-lg font-semibold text-black">Dashboard</h2>
            <p className="text-sm font-light">
              Hello <strong>{user?.first_name} {user?.last_name}</strong>, hope you’re having a good day.
            </p>
          </div>

          <button
            className="p-3 flex justify-center gap-5 items-center bg-primary-bold rounded-2xl text-white px-5 hover:scale-105 transition-all text-sm"
            onClick={handleOpenModal}
          >
            <AddCircle size={20} /> Create New Task
          </button>
        </FlexCard>

        <div className="flex justify-between items-center mt-16">
          <p className="text-primary-hover w-24">All tasks</p>
          <div className="h-[5px] rounded-md w-full bg-primary-hover"></div>
        </div>

        <div className="flex justify-start items-center mt-12  gap-3">
          {[1, 2, 3, 4, 5].map((_item, index) => (
            <div
              className="w-[14.98vw] h-20 rounded-[10px] px-5 bg-grey-300 flex justify-start items-center gap-2 hover:bg-primary-hover transition-all hover:cursor-pointer"
              key={index}
            >
              {index === 0 ? (
                <p className="text-4xl text-primary-bold font-medium">
                  {allTasks.length}
                </p>
              ) : index === 1 ? (
                <p className="text-4xl text-primary-bold font-medium">
                  {notStartedTask.length}
                </p>
              ) : index === 2 ? (
                <p className="text-4xl text-primary-bold font-medium">
                  {completedTask.length}
                </p>
              ) : index === 3 ? (
                <p className="text-4xl text-primary-bold font-medium">
                  {inProgress.length}
                </p>
              ) : (
                <p className="text-4xl text-primary-bold font-medium">
                  {pendingApproval.length}
                </p>
              )}
              <p className="text-primary-bold text-md">Tasks</p>
            </div>
          ))}
        </div>

        <div className="w-full mt-14 flex gap-11 items-start justify-center">
          <div className="w-[60.52vw]">
            <div className="flex justify-between items-center">
              <p className="text-primary-hover w-56">Recent Activities</p>
              <div className="h-[5px] rounded-md w-full bg-primary-hover"></div>
            </div>

            <div className="w-full p-2 rounded-[10px] bg-[rgba(255,255,255,0.10)] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.10)] mt-6">
              <HomeTable tableRow={allTasks} />
            </div>
          </div>

          <div className="w-[25.56vw] py-8 bg-grey-400 rounded-[10px]">
            <DonutChart data={chartData} />
            <div className="flex px-6 py-3 justify-between items-center flex-wrap">
              {keys.map((key, index) => (
                <div
                  key={index}
                  className="flex justify-start items-center gap-3"
                >
                  <div
                    style={{ backgroundColor: key.color }}
                    className="w-[15px] mb-2 h-[15px]"
                  ></div>
                  <p className="text-xs">{key.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <FlexCard className="!items-start !mt-9">
          <CalendarComponent/>
          <UpcomingEvents/>  
        </FlexCard>

        {openModal && (
          <BackDrop onClose={handleCloseModal}>
            <AddTaskModal onClose={handleCloseModal} />
          </BackDrop>
        )}
      </div>
    </Layout>
  );
}
