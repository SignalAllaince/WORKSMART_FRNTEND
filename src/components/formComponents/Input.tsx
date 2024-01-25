interface Iinput {
    label: string;
    value: string;
    placeholder: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  export default function Input({ label, value, placeholder,handleChange }: Iinput) {
    return (
      <div className="w-full  ">
        <label htmlFor="" className="text-sm  text-gray-700">{label}</label>
        <input
          type="text"
          className="w-full focus:outline-none text-gray-500 h-11 px-3 border rounded-lg border-gray-300 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] placeholder:text-xs"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </div>
    );
  }
  