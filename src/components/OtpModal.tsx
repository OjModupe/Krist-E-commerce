import { MdCancel } from "react-icons/md";
import Button from "../Shared/Button";

interface OtpModalProps {
  setOtpModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const OtpModal = ({ setOtpModal }: OtpModalProps) => {
  return (
    <div className="bg-white rounded-2xl p-4 absolute left-[30%] top-[30%] z-50">
      <MdCancel className="text-2xl" onClick={() => setOtpModal(false)} />

      <div className="">
        <h1 className="font-bold text-2xl">Password Changed Successfully</h1>
        <h2>Your password has been updated successfully</h2>
      </div>

      <div className="">
        <Button
          text="Back to Login"
          color="text-white"
          borderRadius="rounded-lg"
          padding="p-2"
          bgColor="bg-black"
          width="w-full"
          onClick={() => setOtpModal(true)}
        />
      </div>

      {/* {otpModal && <OtpModal setOtpModal={setOtpModal}/>} */}
    </div>
  );
};

export default OtpModal;
