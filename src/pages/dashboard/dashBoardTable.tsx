import { ITask } from "../../interfaces";
import { Icons } from "../../components/icons";

export interface IHomeTable {
  tableRow: ITask[];
}
export default function HomeTable({ tableRow }: IHomeTable) {
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
        {tableRow.map((column, index) => (
          <tr key={index} className="h-5 hover:bg-gray-50">
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
                <Icons.edit className="hover:scale-110 transition-all cursor-pointer"/>
                <Icons.trash className="hover:scale-110 transition-all cursor-pointer"/>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
