import { useFormContext } from 'react-hook-form';

interface IFormInputProps {
  name: string;
  type?: string;
  placeholder:string;
};

  export default function Input({ name, type="text", placeholder }: IFormInputProps) {

    const {
      register,
      formState: { errors },
    } = useFormContext();

    return (
      <div className="w-full  ">
        <input
          type={type}
          className="w-full focus:outline-none text-gray-500 h-11 px-3 border rounded-lg border-gray-300 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] placeholder:text-xs"
          {...register(name)}
          placeholder={placeholder}
        />
        {errors[name] && (
        <span className='text-red-500 text-xs pt-1 block'>
          {errors[name]?.message as string}
        </span>
      )}
      </div>
    );
  }
  