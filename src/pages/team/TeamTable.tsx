import { Icons } from "../../components/icons";
import { formatDate } from "../../helpers/date";
import { IMember } from "../../interfaces";
import { approver } from "../../assets";

interface ITeamtable {
  tableRow: IMember[];
}

export default function TeamTable({ tableRow }: ITeamtable) {
  return (
    <table className="w-full">
      <thead className="bg-primary-hover">
        <tr>
          <th className="text-sm">Name</th>
          <th className="p-[10px] text-sm text-center">Email</th>
          <th className="text-center text-sm">Role</th>
          <th className="text-sm">Number of tasks</th>
          <th className="text-sm">Completion</th>
          <th className="text-sm">Last Update</th>
          <th className="text-sm">Edit</th>
        </tr>
      </thead>
      <tbody className="w-full relative">
        {tableRow?.length > 0 ? (
          tableRow.map((column, index) => (
            <tr key={index} className="h-16 hover:bg-gray-50">
              <td className="text-center p-[10px] text-sm">
                <div className="flex justify-start items-center gap-3">
                  <div className="w-6 h-6 rounded-full">
                    <img
                      src={approver}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <p>{column.name}</p>
                </div>
              </td>
              <td className="text-center p-[10px] text-sm">{column.email}</td>
              <td className="text-center p-[10px] text-sm">{column.role}</td>
              <td className="text-center p-[10px] text-sm">
                {column.numberOfTask}
              </td>
              <td className="text-center p-[10px] text-sm">
                <div className="flex justify-start items-center gap-2">
                  <div className="w-24 h-2 border rounded-[10px]">
                    <div className="w-[60%] h-full bg-[#FABB18] rounded-tl-full rounded-bl-full"></div>
                  </div>
                  <p>{column.completion}%</p>
                </div>
              </td>
              <td className="text-center p-[10px] text-sm">
                {formatDate(column.lastUpdate)}
              </td>
              <td>
                <div className="flex justify-start items-center gap-[10px]">
                  <Icons.dropdownCircle className="hover:scale-110 h-4 w-4 transition-all cursor-pointer" />
                  <Icons.edit className="hover:scale-110 transition-all h-4 w-4  cursor-pointer" />
                  <Icons.trash className="hover:scale-110 transition-all h-5 w-5  cursor-pointer" />
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr className="w-full flex justify-center items-center absolute top-16">
            <p className="text-sm w-[45%] text-center">
              no team member available{" "}
              <em className="text-primary-bold">
                click on the Add New Member button to add a new team member
              </em>
            </p>
          </tr>
        )}
      </tbody>
    </table>
  );
}
