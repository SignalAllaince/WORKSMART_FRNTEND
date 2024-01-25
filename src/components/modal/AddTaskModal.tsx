import React, { useState } from "react";
import { motion } from "framer-motion";
import { AddCircle } from "iconsax-react";
import { dropIn } from "../../helpers/framer-variants";
import { Icons } from "../icons";
import Input from "../formComponents/Input";
import DateSelect from "../datepicker/DatePicker";
import DropSelect from "../dropdown/DropDown";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/slices/taskSlice";
import { ITask, TaskProgress } from "../../interfaces";

interface IAddTaskModal {
  onClose(): void;
}

interface IFormData extends ITask{

}

export default function AddTaskModal({ onClose }: IAddTaskModal) {
  // const [dueDate, setDueDate] = useState<Date | null>(null);
  const [formData, setFormData] = useState<IFormData>({
    title: "",
    approver: "",
    dueDate: null,
    priority: "",
    project: "",
    account: "",
    description: "",
    progress: TaskProgress.NOT_STARTED,
  });

  console.log(formData);

  const priorityArr = ["Primary", "Secondary"];

  const projectArr = ["AGPC", "NNPC", "UBA America", "Unity Bank"];

  const dispatch = useDispatch();

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTask(formData));
    onClose()
  };

  return (
    <motion.div
      className="w-[40rem] relative pb-5 rounded-lg bg-white shadow-[0px_8px_8px_-4px_rgba(16,24,40,0.04),0px_20px_24px_-4px_rgba(16,24,40,0.10)]"
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* close modal */}
      <Icons.close
        className="absolute cursor-pointer right-4 top-4"
        onClick={onClose}
      />
      {/* ---- */}
      <div className="p-5 rounded-tr-lg rounded-tl-lg">
        <AddCircle color="#E0BFC0" />
        <h2 className="text-[18px] text-gray-900 font-semibold mt-1">
          Add New Task
        </h2>
        <p className="text-sm">Put in details of your task</p>
      </div>
      <form action="" className="px-5" onSubmit={handleAddTask}>
        <Input
          value={formData.title}
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, title: e.target.value })
          }
          label="Task"
          placeholder="What is your task title?"
        />

        <div className="w-full mt-4 flex justify-between items-center">
          <div className="w-[48%]">
            <Input
              value={formData.approver}
              label="Approver"
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, approver: e.target.value })
              }
              placeholder="Search for Approver"
            />
          </div>
          <div className="w-[48%]">
            <p className="text-sm text-gray-700 leading-5 font-medium">
              Due date
            </p>
            <DateSelect
              selected={formData.dueDate}
              onChange={(date) => {
                setFormData({ ...formData, dueDate: date });
              }}
              placeholderText="dd/mm/yy"
              className="border !border-gray-300 px-4 rounded-lg h-11 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
            />
          </div>
        </div>

        <div className="w-full my-4 flex justify-between items-center">
          <div className="w-[48%]">
            <p className="text-sm text-gray-700 leading-5 font-medium">
              Priority
            </p>
            <DropSelect
              selectedOption={formData.priority}
              setSelectedOption={(e: string) =>
                setFormData({ ...formData, priority: e })
              }
              OptionsArr={priorityArr}
            />
          </div>
          <div className="w-[48%]">
            <p className="text-sm text-gray-700 leading-5 font-medium">
              Project
            </p>
            <DropSelect
              selectedOption={formData.project}
              setSelectedOption={(e: string) =>
                setFormData({ ...formData, project: e })
              }
              OptionsArr={projectArr}
            />
          </div>
        </div>

        <Input
          value={formData.account}
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, account: e.target.value })
          }
          label="Account"
          placeholder="what account is the project"
        />

        <div className="w-full mt-4">
          <label htmlFor="" className="text-gray-700 text-sm font-medium">
            Description*
          </label>
          <textarea
            name=""
            id=""
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            value={formData.description}
            className="focus:outline-none p-5 w-full h-28 border !border-gray-300 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] rounded-lg"
            rows={10}
          ></textarea>
        </div>

        <div className="w-full mt-4">
          <button
            className="w-full hover:scale-105 transition-all py-3 rounded-lg bg-primary-bold text-md text-white disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={
              !formData.account ||
              !formData.approver ||
              !formData.description ||
              !formData.dueDate ||
              !formData.priority ||
              !formData.project ||
              !formData.title
            }
            type="submit"
          >
            Confirm
          </button>
          <button
            className="w-full hover:scale-105 text-[#344054] transition-all py-3 rounded-lg mt-3 bg-white text-md border border-[#D0D5DD]"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </motion.div>
  );
}
