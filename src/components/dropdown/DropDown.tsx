/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef, useEffect } from "react";
import { Icons } from "../icons";

export interface IManager {
  id: string;
  first_name: string;
  last_name: string;
}
interface IDropSelect {
  selectedOption: string | IManager;
  setSelectedOption: (e: string | IManager) => void;
  OptionsArr: Array<string | IManager>;
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

  function handleOptionSelect(option: string | IManager) {
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
        {selectedOption && typeof selectedOption === "object"
          ? `${(selectedOption as IManager).first_name} ${(selectedOption as IManager).last_name}`
          : selectedOption}
      </p>
      <Icons.dropdown />

      {showDropDown && (
        <div className="w-full min-h-24 max-h-36 overflow-y-scroll z-20 bg-white absolute left-0 top-12 border border-gray-300">
          {OptionsArr.map((option, index) => (
            <div
              className={`${
                selectedOption === (option as IManager).id
                  ? "bg-green-200"
                  : "bg-white"
              } p-2 hover:bg-gray-300 cursor-pointer`}
              key={index}
              onClick={() =>
                handleOptionSelect(
                  typeof option === "string" ? option : (option as IManager)
                )
              }
            >
              <p className="text-xs">
                {typeof option === "string"
                  ? option // When option is a string
                  : `${(option as IManager).first_name} ${
                      (option as IManager).last_name
                    }`}{" "}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
