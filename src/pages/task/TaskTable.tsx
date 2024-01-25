import { Icons } from "../../components/icons";
import { formatDate } from "../../helpers/date";
import { IHomeTable } from "../dashboard/dashBoardTable";

export default function TaskTable({ tableRow }: IHomeTable) {
  return (
    <table className="w-full relative">
      <thead className="bg-primary-hover">
        <tr>
          <th className="text-sm">Task I.D</th>
          <th className="p-[10px] text-sm text-center">Task</th>
          <th className="text-center text-sm">Approver</th>
          <th className="text-sm">Progress</th>
          <th className="text-sm">Priority</th>
          <th className="text-sm">Due date</th>
          <th className="text-sm">Edit</th>
        </tr>
      </thead>
      {tableRow.length > 0 ? (
        <tbody>
          {tableRow?.map((column, index) => (
            <tr key={index} className="h-16 hover:bg-gray-50">
              <td className="p-2">{index + 1}</td>
              <td className="text-center p-[10px] text-sm">{column.title}</td>
              <td className="text-center p-[10px] text-sm">
                {column.approver}
              </td>
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
              <td className="text-center p-[10px] text-sm">
                {column.priority}
              </td>
              <td className="text-center p-[10px] text-sm">
                {formatDate(column.dueDate)}
              </td>
              <td>
                <div className="flex justify-start items-center gap-[10px]">
                  <Icons.dropdownCircle className="hover:scale-110 h-4 w-4 transition-all cursor-pointer" />
                  <Icons.edit className="hover:scale-110 transition-all h-4 w-4  cursor-pointer" />
                  <Icons.trash className="hover:scale-110 transition-all h-5 w-5  cursor-pointer" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      ) : (
        <div className="absolute !w-full !mx-auto py-16 flex !justify-center items-center">
          <p className="text-sm">No task available <em className="text-primary-bold">click on the create task button to add a new task.</em></p>
        </div>
      )}
    </table>
  );
}
