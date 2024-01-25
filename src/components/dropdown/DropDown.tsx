/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef, useEffect } from "react";
import { Icons } from "../icons";

interface IDropSelect {
  selectedOption: string;
  setSelectedOption: (e: string) => void;
  OptionsArr: string[];
}

export default function DropSelect({
  selectedOption,
  setSelectedOption,
  OptionsArr,
}: IDropSelect) {
  const [showDropDown, setShowDropDown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const handleMouseDown = () => {
    setShowDropDown(true);
  };

  const handleClickOutside = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropDown(false);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setShowDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function handleOptionSelect(option: string) {
    setSelectedOption(option);
    setShowDropDown(false);
  }

  return (
    <div
      ref={dropdownRef}
      className="w-full cursor-pointer relative border !border-gray-300 rounded-lg h-11 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex justify-between items-center px-4"
      onMouseDown={handleMouseDown}
    >
      <p className="text-sm text-gray-700 font-medium">
        {selectedOption ? selectedOption : "choose an option"}
      </p>
      <Icons.dropdown />

      {showDropDown && (
        <div className="w-full min-h-24 max-h-36 overflow-y-scroll bg-white absolute left-0 top-12 border border-gray-300">
          {OptionsArr.map((option, index) => (
            <div
              className={`${
                selectedOption === option ? "bg-green-200" : "bg-white"
              } p-2 hover:bg-gray-300 cursor-pointer`}
              key={index}
              onClick={() => handleOptionSelect(option)}
            >
              <p className="text-xs">{option}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
