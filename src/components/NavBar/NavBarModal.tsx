import { MdCancel } from "react-icons/md";
// import Brand from "../assets/brand.png";

interface NavBarProps {
  setOpenModal: () => void;
}

const NavBarModal = ({ setOpenModal }: NavBarProps) => {
  return (
    <div
      className="fixed inset-0 bg-[#1853b83a] bg-opacity-40 flex justify-center items-center h-screen"
      style={{ backdropFilter: "blur(7.06999969482422px)" }}
    >
      <div className="bg-white rounded-2xl p-6">
        <div className="flex items-center justify-center">
          <h1>
            {/* <img src={Brand} /> */}
          </h1>
        </div>
        {/* <MdCancel onClick={() => setOpenModal(false)} /> */}
      </div>
    </div>
  );
};

export default NavBarModal;
