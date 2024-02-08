import FlexCard from "../../components/flexCard/FlexCard";
import Layout from "../../components/layout/Layout";
import { useMutation, useQuery, useQueryClient } from "react-query";
import ApiFetcher from "../../services/ApiFetcher";
import { ITaskRequest } from "../../interfaces";
import { formatDate } from "../../helpers/date";
import { Icons } from "../../components/icons";
import { useState } from "react";
import { enqueueSnackbar } from "notistack";

export default function Request() {
  const queryClient = useQueryClient();

  const getTodosRequest = async () => {
    const response = await ApiFetcher.get("/tasks/request");
    return response.data;
  };
  const query = useQuery({ queryKey: ["requests"], queryFn: getTodosRequest });
  const tasks_: ITaskRequest[] = query.isSuccess ? query.data.data : [];

  // const [showApprovalModal, setShowApprovalModal] = useState<boolean>(false);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>("");

  const openModal = (id: string) => {
    setSelectedTaskId(id);
  };

  const closeModal = () => {
    setSelectedTaskId(null);
  };

  // todo: create  table component and move everything that has to do with table there.

  const approveTask = async (taskId: string) => {
    try {
      await ApiFetcher.patch(`/tasks/${taskId}/approve`, {
        task_progress: "APPROVED",
      });
    } catch (error:any) {
      // Handle error
      console.error('Error approving task:', error);
      enqueueSnackbar(`${error.response.data.message}`, {
        variant: "error",
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
    }
  };


  const { mutate: approve } = useMutation(approveTask, {
    onSuccess: () => {
      // enqueueSnackbar(`Task approved successfully`, {
      //   variant: "success",
      //   anchorOrigin: { vertical: "top", horizontal: "right" },
      // });
      closeModal();
      queryClient.invalidateQueries("requests"); // Invalidate the query to refresh the data
    },
  });

  return (
    <Layout>
      <div
        style={{ width: "calc(100vw - 17.29vw)", marginLeft: "17.29vw" }}
        className=" mt-[60px] px-16 py-8 min-h-screen"
      >
        <FlexCard>
          <div>
            <h2 className="text-lg font-semibold text-black">Requests</h2>
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

        <table className="w-full mt-[4rem] relative">
          <thead className="bg-primary-hover shadow-md">
            <tr>
              <th className="text-sm">Name</th>
              <th className="p-[10px] text-sm text-center">Task</th>
              <th className="text-sm">Progress</th>
              <th className="text-sm">Priority</th>
              <th className="text-sm">Due date</th>
              <th className="text-sm">Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks_?.map((column, _index) => (
              <tr key={column._id} className="h-16 relative hover:bg-gray-50">
                <td className="p-2 text-sm">{column.ownerName}</td>
                <td className="text-center p-[10px] text-sm">{column.title}</td>
                <td className="text-center p-[10px] text-sm ">
                  <div
                    className={`${
                      column.progress === "IN PROGRESS"
                        ? "text-[#1CB8F0] bg-[#E6F4FB]"
                        : // : column.progress === "NOT STARTED"
                        // ? "text-[#9C3233] bg-[#E0BFC0]"
                        column.progress === "COMPLETED"
                        ? "text-[#000] bg-[rgba(64,64,64,0.38)]"
                        : "text-[#61D766] bg-[#EDF6F0]"
                    } w-[90%] h-[90%] p-[4px] text-xs rounded-md`}
                  >
                    {column.progress}
                  </div>{" "}
                </td>
                <td className="text-center p-[10px] text-sm">
                  {column.priority}
                </td>
                <td className="text-center p-[10px] text-sm">
                  {formatDate(column.due_date)}
                </td>
                <td>
                  <div className="flex justify-center items-center gap-[10px]">
                    <Icons.dropdownCircle
                      className="hover:scale-110 h-4 w-4 transition-all cursor-pointer"
                      onClick={() => openModal(column._id)}
                    />
                  </div>
                </td>

                {selectedTaskId === column._id && (
                  <div className="w-44 absolute right-0 top-12 z-40 bg-gray-100 border border-gray-300">
                    <p
                      className="text-sm py-1 px-2 hover:bg-green-100 cursor-pointer"
                      onClick={() => approve(column._id)}
                    >
                      Approve
                    </p>
                    <p
                      className="text-sm py-1 px-2 hover:bg-red-100 cursor-pointer"
                      onClick={closeModal}
                    >
                      Reject
                    </p>
                  </div>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
