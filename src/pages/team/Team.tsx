import { AddCircle } from "iconsax-react";
import FlexCard from "../../components/flexCard/FlexCard";
import Layout from "../../components/layout/Layout";
import TeamTable from "./TeamTable";
import { useState } from "react";
import BackDrop from "../../components/modal/BackDrop";
import AddTeamModal from "../../components/modal/AddMemberModal";
import { IMember } from "../../interfaces";
import { useDispatch, useSelector } from "react-redux";
import { addMember } from "../../redux/slices/teamSlice";

export default function Team() {
  const [showAddMemberModal, setShowAddMemberModal] = useState(false);

  const newMember: IMember = {
    name: "John Uba",
    completion: 60,
    email: "juba@sathng.com",
    lastUpdate: new Date(),
    numberOfTask: 12,
    role: "HR Intern",
  };

  const team:IMember[] = useSelector((state:any)=>state.team.team)

  const openModal = () => {
    setShowAddMemberModal(true);
  };

  const closeModal = () => {
    setShowAddMemberModal(false);
  };

  const dispatch = useDispatch();

  const addNewmember = () => {
    dispatch(addMember(newMember));
    closeModal();
  };
  return (
    <Layout>
      <div
        style={{ width: "calc(100vw - 17.29vw)", marginLeft: "17.29vw" }}
        className=" mt-[60px] px-16 py-8 min-h-screen"
      >
        <FlexCard>
          <div>
            <h2 className="text-lg font-semibold text-black">Team</h2>
          </div>

          <div className="flex justify-start gap-6">
            <button
              className="p-3 flex justify-center gap-5 items-center bg-primary-bold rounded-2xl text-white px-5 hover:scale-105 transition-all text-sm"
              onClick={openModal}
            >
              <AddCircle size={20} /> Add New Member
            </button>

            <div className="w-[20vw]">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search"
                className="w-full focus:outline-none px-6 py-2 rounded-lg border border-[#8A8A8A] bg-white"
              />
            </div>
          </div>
        </FlexCard>

        <div className="w-full mt-24 p-2 rounded-[10px] bg-[rgba(255,255,255,0.10)] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.10)]">
          <TeamTable tableRow={team} />
        </div>

        {showAddMemberModal && (
          <BackDrop onClose={closeModal}>
            <AddTeamModal closeModal={closeModal} addNewmember={addNewmember} />
          </BackDrop>
        )}
      </div>
    </Layout>
  );
}
