import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AddCircle } from "iconsax-react";
import { dropIn } from "../../helpers/framer-variants";
import { Icons } from "../icons";
import Input from "../formComponents/Input";
import DateSelect from "../datepicker/DatePicker";
import DropSelect from "../dropdown/DropDown";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/slices/taskSlice";
import { ITask } from "../../interfaces";
import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useMutation } from "react-query";
import { enqueueSnackbar } from "notistack";
import ApiFetcher from "../../services/ApiFetcher";
import ReactLoading from "react-loading";

interface IAddTaskModal {
  onClose(): void;
}

export default function AddTaskModal({ onClose }: IAddTaskModal) {
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const [priority, setPriority] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const taskSchema = object({
    title: string().min(1, "Task title is required").max(100),
    approver: string().min(1, "Approver is required").max(100),
    priority: string().min(1, "Priority is required"),
    description: string().min(1, "Priority is required"),
  });

  type TaskInput = TypeOf<typeof taskSchema>;

  const methods = useForm<TaskInput>({
    resolver: zodResolver(taskSchema),
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const handleAddTask = async (taskData: TaskInput) => {
    const response = await ApiFetcher.post("/task/create", taskData);
    return response.data;
  };

  const dispatch = useDispatch();
  const {
    mutate: createTask,
    data,
    isSuccess,
  } = useMutation((taskData: TaskInput) => handleAddTask(taskData), {
    onMutate(_variables) {
      setLoading(true);
    },
    onSuccess(data) {
      setLoading(false);
      enqueueSnackbar(`${data.message}`, {
        variant: "success",
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
    },
    onError(error: any) {
      setLoading(false);
      if (Array.isArray((error as any).response.data.error)) {
        (error as any).response.data.error.forEach((el: any) =>
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
  });

  if (isSuccess) {
    dispatch(addTask(data.data as ITask));
  }

  const onSubmitHandler: SubmitHandler<TaskInput> = (values) => {
    // ? Execute the Mutation
    createTask(values);
  };

  const priorityArr = ["Primary", "Secondary"];

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
      <FormProvider {...methods}>
        <form
          action=""
          className="px-5"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <Input
            type="text"
            name="title"
            placeholder="What is your task title?"
          />

          <div className="w-full mt-4 flex justify-between items-center">
            <div className="w-[48%]">
              <p className="text-sm text-gray-700 leading-5 font-medium">
                Approver
              </p>
              <Input
                name="approver"
                type="text"
                placeholder="Search for Approver"
              />
            </div>
            <div className="w-[48%]">
              <p className="text-sm text-gray-700 -mt-0 leading-5 font-medium">
                Due date
              </p>
              <DateSelect
                selected={dueDate}
                onChange={(date) => {
                  setDueDate(date);
                }}
                placeholderText="dd/mm/yy"
                className="border !w-full !border-gray-300 px-4 rounded-lg h-11 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
              />
            </div>
          </div>

          <div className="w-full my-4 flex justify-between items-center">
            <div className="w-full">
              <p className="text-sm text-gray-700 leading-5 font-medium">
                Priority
              </p>
              <DropSelect
                selectedOption={priority}
                setSelectedOption={(e: string) => setPriority(e)}
                OptionsArr={priorityArr}
              />
            </div>
            {/* <div className="w-[48%]">
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
          </div> */}
          </div>

          {/* <Input
          value={formData.account}
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, account: e.target.value })
          }
          label="Account"
          placeholder="what account is the project"
        /> */}

          <div className="w-full mt-4">
            <label htmlFor="" className="text-gray-700 text-sm font-medium">
              Description*
            </label>
            <textarea
              name=""
              id=""
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="focus:outline-none p-5 w-full h-28 border !border-gray-300 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] rounded-lg"
              rows={10}
            ></textarea>
          </div>

          <div className="w-full mt-4">
            <button
              className="w-full hover:scale-105 transition-all py-3 rounded-lg bg-primary-bold text-md text-white disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
            >
              {loading ? (
                <ReactLoading color="#fff" type="spin" width={20} height={20} />
              ) : (
                "Confirm"
              )}
            </button>
            <button
              className="w-full hover:scale-105 text-[#344054] transition-all py-3 rounded-lg mt-3 bg-white text-md border border-[#D0D5DD]"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </FormProvider>
    </motion.div>
  );
}
