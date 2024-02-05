import { AddCircle } from "iconsax-react";
import FlexCard from "../../components/flexCard/FlexCard";
import Layout from "../../components/layout/Layout";
import { useState } from "react";
import TaskTable from "./TaskTable";
import { ITask } from "../../interfaces";
// import { useSelector } from "react-redux";
import BackDrop from "../../components/modal/BackDrop";
import AddTaskModal from "../../components/modal/AddTaskModal";
import { useQuery, useQueryClient } from "react-query";
import ApiFetcher from "../../services/ApiFetcher";

export default function Task() {
  const [filterBy, setFilterBy] = useState("All");
  // const allTasks: ITask[] = useSelector((state: any) => state.task.tasks);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const queryClient = useQueryClient();

  const getTodos = async () => {
    const response = await ApiFetcher.get('/tasks')
    return response.data 
  }
  const query = useQuery({ queryKey: ['todos'], queryFn: getTodos })
  const tasks_: ITask[] = query.isSuccess ? query.data.data.tasks : []


  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const refresh = () => {
    queryClient.invalidateQueries('todos');
  }

  const handleCloseModal = () => {
    setOpenModal(false);
    // Invalidate the 'todos' query to trigger a refetch
    refresh()
  };

  const handleFilterOption = (filter: string) => {
    setFilterBy(filter);
  };

  const taskProgressArr = [
    "All",
    "In Progress",
    "Not Started",
    "Pending Approval",
    "Completed",
    "Approved",
  ];

  // let tasks: ITask[];

  // switch (filterBy) {
  //   case "In Progress":
  //     tasks = allTasks.filter((task) => task.progress === "In Progress");
  //     break;

  //   case "Not Started":
  //     tasks = allTasks.filter((task) => task.progress === "Not Started");
  //     break;

  //   case "Pending Approval":
  //     tasks = allTasks.filter((task) => task.progress === "Pending Approval");
  //     break;

  //   case "Completed":
  //     tasks = allTasks.filter((task) => task.progress === "Completed");
  //     break;

  //   default:
  //     tasks = allTasks;
  //     break;
  // }

  return (
    <Layout>
      <div
        style={{ width: "calc(100vw - 17.29vw)", marginLeft: "17.29vw" }}
        className=" mt-[60px] px-16 py-8 min-h-screen"
      >
        <FlexCard>
          <div>
            <h2 className="text-lg font-semibold text-black">Tasks</h2>
            <p className="text-sm font-light">
              Here is a list of all your tasks.
            </p>
          </div>

          <button
            className="p-3 flex justify-center gap-5 items-center bg-primary-bold rounded-2xl text-white px-5 hover:scale-105 transition-all text-sm"
            onClick={handleOpenModal}
          >
            <AddCircle size={20} /> Create New Task
          </button>
        </FlexCard>

        <FlexCard className="!mt-14">
          <div className="flex justify-start items-center gap-5">
            {taskProgressArr.map((taskProgress, index) => (
              <p
                className={`${
                  taskProgress === filterBy
                    ? "text-black scale-110"
                    : "!text-[#8A8A8A]"
                } transition-all cursor-pointer`}
                key={index}
                onClick={() => handleFilterOption(taskProgress)}
              >
                {taskProgress}
              </p>
            ))}
          </div>

          <div className="w-[20vw]">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search"
              className="w-full focus:outline-none px-6 py-2 rounded-lg border border-[#8A8A8A] bg-white"
            />
          </div>
        </FlexCard>

        <div className="w-full mt-9 p-2 rounded-[10px] bg-[rgba(255,255,255,0.10)] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.10)]">
          <TaskTable tableRow={tasks_} refresh={refresh} />
        </div>

        {openModal && (
          <BackDrop onClose={handleCloseModal}>
            <AddTaskModal onClose={handleCloseModal} />
          </BackDrop>
        )}
      </div>
    </Layout>
  );
}
