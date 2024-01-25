import { motion } from "framer-motion";
import { useState } from "react";
import { dropIn } from "../../helpers/framer-variants";
import FlexCard from "../flexCard/FlexCard";
import { Icons } from "../icons";
import DropSelect from "../dropdown/DropDown";
import { approver } from "../../assets";

interface ITeamModal {
  closeModal(): void;
  addNewmember: () => void;
}

export default function AddTeamModal({ closeModal, addNewmember }: ITeamModal) {
  const options: string[] = ["John", "David", "Aaron", "Mathew", "Ubong"];

  const [selectedOption, setSelectedOption] = useState("");

  const addMember = () => {
    if (!selectedOption) {
      return;
    } else {
      addNewmember();
    }
  };
  return (
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-[28vw] p-6 bg-white rounded-lg shadow-[0px_8px_8px_-4px_rgba(16,24,40,0.04),0px_20px_24px_-4px_rgba(16,24,40,0.10)]"
    >
      <FlexCard>
        <div className="w-12 h-12 rounded-[10px] bg-white flex justify-center items-center border border-[#E4E7EC] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
          <Icons.addUser />
        </div>

        <Icons.close
          className="hover:scale-110 cursor-pointer transition-all"
          onClick={closeModal}
        />
      </FlexCard>

      <div className="mt-4">
        <p>Add New Member</p>
        <p className="text-sm text-[#475467] leading-5">
          Select from list or type in users name
        </p>
      </div>

      {[1, 2, 3].map((_member, index) => (
        <FlexCard className="mt-6" key={index}>
          <div className="flex justify-start items-center gap-2">
            <div className="w-10 h-10 rounded-full">
              <img
                src={approver}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div>
              <p className="text-sm text-black font-semibold">Candice Wu</p>
              <p className="text-sm text-[#475467] leading-5">
                candice@untitledui.com
              </p>
            </div>
          </div>

          <p className="text-[#B42318] text-sm text-semibold cursor-pointer">
            Remove
          </p>
        </FlexCard>
      ))}

      <div className="mt-5">
        <p className="text-sm font-medium text-[#344054]">Team member</p>
        <DropSelect
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          OptionsArr={options}
        />
      </div>

      <button
        className="bg-[#9C3233] py-[10px] mt-8 hover:scale-105 transition-all w-full rounded-lg text-white text-md font-semibold leading-6"
        onClick={addMember}
      >
        Confirm
      </button>

      <button
        className="bg-white border border-[#D0D5DD] hover:scale-105 transition-all mt-3 py-[10px] w-full rounded-lg text-[#344054] text-md font-semibold leading-6"
        onClick={closeModal}
      >
        Cancel
      </button>
    </motion.div>
  );
}
