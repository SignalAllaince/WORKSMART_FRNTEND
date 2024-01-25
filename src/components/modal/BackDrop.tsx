import { ReactNode } from "react";

interface IBackDrop {
  children: ReactNode;
  onClose(): void;
}
export default function BackDrop({ children, onClose }: IBackDrop) {
  const handleBackdropClick = (e: any) => {
    // Check if the click is on the backdrop (you might need to adjust this based on your modal structure)
    if (e.target.classList.contains("modal-backdrop")) {
      onClose(); // Close the modal
    }
  };
  return (
    <div
      className="modal-backdrop w-full h-screen fixed left-0 top-0 flex justify-center z-50 items-center bg-[#00000080]"
      onClick={handleBackdropClick}
    >
      {children}
    </div>
  );
}
