import { MdCancel } from "react-icons/md";
import Button from "../Shared/Button";
import { BsPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

interface OtpModalProps {
  setOtpModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const OtpModal = ({ setOtpModal }: OtpModalProps) => {
  return (
    <div className="bg-white rounded-2xl p-4 absolute left-[30%] top-[30%] z-50">
      <div className=" absolute h-screen w-full bg-black opacity-40"></div>
      <div className="flex gap-33 items-center">
        <div className="">
          <MdCancel className="text-2xl" onClick={() => setOtpModal(false)} />
        </div>

        <div className="mt-15">
          <p className="text-5xl">
            <BsPatchCheckFill />
          </p>
        </div>
      </div>
      <div className="">
        <h1 className="font-bold text-2xl py-3">
          Password Changed Successfully
        </h1>
        <h2>Your password has been updated successfully</h2>
      </div>

      <div className="py-3">
        <Link to="/login">
          <Button
            text="Back to Login"
            color="text-white"
            borderRadius="rounded-lg"
            padding="p-4"
            bgColor="bg-black"
            width="w-full"
            onClick={() => setOtpModal(true)}
          />
        </Link>
      </div>

      {/* {otpModal && <OtpModal setOtpModal={setOtpModal}/>} */}
    </div>
  );
};

export default OtpModal;
