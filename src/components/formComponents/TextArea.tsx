import { useFormContext } from "react-hook-form";

interface IFormInputProps {
  name: string;
  placeholder: string;
}

export default function TextArea({ name, placeholder }: IFormInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="w-full  ">
      <textarea
        className="focus:outline-none p-5 w-full h-28 border !border-gray-300 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] rounded-lg"
        rows={10}
        {...register(name)}
        placeholder={placeholder}
      ></textarea>
      {errors[name] && (
        <span className="text-red-500 text-xs pt-1 block">
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
}
