import { ITask } from "../../interfaces";
import { Icons } from "../../components/icons";
import { useMutation } from "react-query";
import ApiFetcher from "../../services/ApiFetcher";
import { enqueueSnackbar } from "notistack";
import { useEffect } from "react";

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

  useEffect(()=>{
    if(isSuccess){
      refresh()
    }
  },[isSuccess])

  return (
    <table className="w-full">
      <thead className="bg-primary-hover">
        <tr>
          <th className="p-[10px] text-sm text-start">Task</th>
          <th className="text-sm">Priority</th>
          <th className="text-sm">Progress</th>
          <th className="text-sm">Edit</th>
        </tr>
      </thead>
      <tbody>
        {tableRow?.map((column, _index) => (
          <tr key={column._id} className="h-5 hover:bg-gray-50">
            <td className="text-start p-[10px] text-sm">{column.title}</td>
            <td className="text-center p-[10px] text-sm">{column.priority}</td>
            <td className="text-center p-[10px] text-sm ">
              <div
                className={`${
                  column.progress === "In Progress"
                    ? "text-[#1CB8F0] bg-[#E6F4FB]"
                    : column.progress === "Not Started"
                    ? "text-[#9C3233] bg-[#E0BFC0]"
                    : column.progress === "Pending Approval"
                    ? "text-[#D79A54] bg-[#F6F3F0]"
                    : column.progress === "Completed"
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
                  onClick={() =>delete_Task(column._id)}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
