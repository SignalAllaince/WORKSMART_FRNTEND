/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AddCircle } from "iconsax-react";
import { dropIn } from "../../helpers/framer-variants";
import { Icons } from "../icons";
import Input from "../formComponents/Input";
import DateSelect from "../datepicker/DatePicker";
import DropSelect from "../dropdown/DropDown";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/slices/taskSlice";
import { ITask, IUser } from "../../interfaces";
import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { enqueueSnackbar } from "notistack";
import ApiFetcher from "../../services/ApiFetcher";
import ReactLoading from "react-loading";
import TextArea from "../formComponents/TextArea";
import SelectManagerDropDown, {
  IManager,
} from "../dropdown/SelectManagerDropDown";

interface IAddTaskModal {
  onClose(): void;
}

export default function AddTaskModal({ onClose }: IAddTaskModal) {
  const [due_date, setDueDate] = useState<Date | null>(null);
  const [priority, setPriority] = useState<string>("");
  const [approver, setApprover] = useState<IManager | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [managers, setManagers] = useState<null | IManager[]>(null);

  const taskSchema = object({
    title: string().min(1, "Task title is required").max(100),
    description: string().min(1, "Description is required").max(250),
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

  const user: IUser = useSelector((state: any) => state.user.user);

  const handleAddTask = async (taskData: TaskInput) => {
    const taskDetails = {
      ...taskData,
      user_id: user.id,
      approver: approver && approver?._id,
      priority,
      due_date,
      progress: "PENDING APPROVAL",
    };
    const response = await ApiFetcher.post("/task/create", taskDetails);
    return response.data;
  };

  const dispatch = useDispatch();
  const {
    mutate: createTask,
    data,
    isSuccess,
  } = useMutation((taskData: TaskInput) => handleAddTask(taskData), {
    onMutate(_variables) {},
    onSuccess(data) {
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

  useEffect(() => {
    if (isSuccess) {
      // Dispatch the task when isSuccess changes
      dispatch(addTask(data.data as ITask));
      onClose()
    }
  }, [isSuccess, data, dispatch]);

  const onSubmitHandler: SubmitHandler<TaskInput> = (values) => {
    // ? Execute the Mutation
    createTask(values);
  };

  const priorityArr = ["Primary", "Secondary"];

  // get all managers
  const getManagers = async () => {
    const response = await ApiFetcher.get("/managers/all");
    return response.data;
  };

  const { data: managersData, isLoading } = useQuery(["managers"], () =>
    getManagers()
  );

  // Use useEffect to set managers only when data is available
  useEffect(() => {
    if (managersData) {
      setManagers(managersData.data);
    }
  }, [managersData]);

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
              <SelectManagerDropDown
                selectedOption={approver}
                setSelectedOption={(e) => setApprover(e as IManager)}
                OptionsArr={managers as IManager[]}
                isLoading={isLoading}
              />
            </div>
            <div className="w-[48%]">
              <p className="text-sm text-gray-700 -mt-0 leading-5 font-medium">
                Due date
              </p>
              <DateSelect
                selected={due_date}
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
          </div>

          <div className="w-full mt-4">
            <label htmlFor="" className="text-gray-700 text-sm font-medium">
              Description*
            </label>
            <TextArea name="description" placeholder="Description" />
          </div>

          <div className="w-full mt-4">
            <button
              className="w-full hover:scale-105 transition-all py-3 rounded-lg bg-primary-bold text-md text-white disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={!due_date || !approver || !priority}
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
