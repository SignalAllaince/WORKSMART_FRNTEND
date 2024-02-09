import { ITask } from "../../interfaces";
import { Icons } from "../../components/icons";
import { useMutation } from "react-query";
import ApiFetcher from "../../services/ApiFetcher";
import { enqueueSnackbar } from "notistack";
import { useEffect, useState } from "react";

export interface IHomeTable {
  tableRow: ITask[];
  refresh: () => void;
}
export default function HomeTable({ tableRow, refresh }: IHomeTable) {
  const handleDelete = async (id: string) => {
    const response = await ApiFetcher.delete(`/task/${id}/delete`);
    return response.data;
  };
  const { mutate: delete_Task, isSuccess } = useMutation(
    (id: string) => {
      return handleDelete(id); // Make sure to return the result of handleDelete
    },
    {
      onSuccess: (data) => {
        enqueueSnackbar(`${data.message}`, {
          variant: "success",
          anchorOrigin: { vertical: "top", horizontal: "right" },
        });
      },
      onError: (error: any) => {
        if (Array.isArray(error.response.data.error)) {
          error.response.data.error.forEach((el: any) =>
            enqueueSnackbar(`${el.message}`, {
              variant: "error",
              anchorOrigin: { vertical: "top", horizontal: "right" },
            })
          );
        } else {
          enqueueSnackbar(`${error.response.data.message}`, {
            variant: "error",
            anchorOrigin: { vertical: "top", horizontal: "right" },
          });
        }
      },
    }
  );

  // const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      refresh();
    }
  }, [isSuccess]);

  const [startTask, setStartTask] = useState<string | null>("");

  const handleStartTask = (id: string) => {
    setStartTask(id);
  };

  const closeModal_ = () => {
    if (startTask) {
      setStartTask(null);
    } else {
      return;
    }
  };

  const changeTaskToInProgress = async (id: string) => {
    const response = await ApiFetcher.put(`/task/${id}/progress`, {
      progress: "IN PROGRESS",
    });
    return response.data;
  };

  const { mutate: changeToInProgress } = useMutation(
    (id: string) => {
      return changeTaskToInProgress(id); // Make sure to return the result of handleDelete
    },
    {
      onSuccess: (data) => {
        enqueueSnackbar(`${data.message}`, {
          variant: "success",
          anchorOrigin: { vertical: "top", horizontal: "right" },
        });
      },
      onError: (error: any) => {
        if (Array.isArray(error.response.data.error)) {
          error.response.data.error.forEach((el: any) =>
            enqueueSnackbar(`${el.message}`, {
              variant: "error",
              anchorOrigin: { vertical: "top", horizontal: "right" },
            })
          );
        } else {
          enqueueSnackbar(`${error.response.data.message}`, {
            variant: "error",
            anchorOrigin: { vertical: "top", horizontal: "right" },
          });
        }
      },
    }
  );

  return (
    <table className="w-full relative table" onClick={closeModal_}>
      <thead className="bg-primary-hover">
        <tr>
          <th className="p-[10px] text-sm text-start">Task</th>
          <th className="text-sm">Priority</th>
          <th className="text-sm">Progress</th>
          <th className="text-sm">Edit</th>
        </tr>
      </thead>
      {tableRow.length > 1 ? (
        <tbody>
          {tableRow?.map((column, _index) => (
            <tr key={column._id} className="h-5 relative hover:bg-gray-50">
              <td className="text-start p-[10px] text-sm">{column.title}</td>
              <td className="text-center p-[10px] text-sm">
                {column.priority}
              </td>
              <td className="text-center p-[10px] text-sm ">
                <div
                  className={`${
                    column.progress === "IN PROGRESS"
                      ? "text-[#1CB8F0] bg-[#E6F4FB]"
                      : column.progress === "PENDING APPROVAL"
                      ? "text-[#D79A54] bg-[#F6F3F0]"
                      : column.progress === "COMPLETED"
                      ? "text-[#000] bg-[rgba(64,64,64,0.38)]"
                      : "text-[#61D766] bg-[#EDF6F0]"
                  } w-[90%] h-[90%] p-[4px] text-xs rounded-md`}
                >
                  {column.progress}
                </div>{" "}
              </td>
              <td>
                <div className="flex justify-start items-center gap-[10px]">
                  <Icons.edit className="hover:scale-110 transition-all cursor-pointer" />
                  <Icons.trash
                    className="hover:scale-110 transition-all cursor-pointer"
                    onClick={() => delete_Task(column._id)}
                  />
                  <Icons.dropdownCircle
                    className="hover:scale-110 h-4 w-4 transition-all cursor-pointer"
                    onClick={() => handleStartTask(column._id)}
                  />
                </div>
              </td>
              {startTask === column._id && (
                <div className="w-24 absolute flex justify-center items-center right-0 top-10 z-40 bg-gray-100 border border-gray-300">
                  <button
                    disabled={column.progress !== "APPROVED"}
                    className="text-sm py-1 px-2 cursor-pointer disabled:cursor-not-allowed"
                    onClick={() => changeToInProgress(column._id)}
                  >
                    Start Task
                  </button>
                </div>
              )}
            </tr>
          ))}
        </tbody>
      ) : (
        <div className="absolute w-full h-full left-0 top-0 bg-black">
          <div className="absolute !w-full !mx-auto py-16 flex !justify-center items-center">
            <p className="text-sm">
              No task available{" "}
              <em className="text-primary-bold">
                click on the create task button to add a new task.
              </em>
            </p>
          </div>
        </div>
      )}
    </table>
  );
}
