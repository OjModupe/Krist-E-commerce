import { MdKeyboardArrowLeft } from "react-icons/md";
import OTP from "../assets/6F1548A1-3A26-4D31-962C-6015684CD653.png";
import Button from "../Shared/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import OtpModal from "./OtpModal";

const GenerateOtp = () => {
  const [otpModal, setOtpModal] = useState<boolean>(false);
  return (
    <div
      className="flex h-screen w-full relative"
      style={{
        backgroundImage: `url(${OTP})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute h-screen w-full"></div>
      <div className="basis-50% w-full h-full bg-gray-300 overflow-hidden hidden md:block">
        <img src={OTP} className="h-full w-full object-cover object-center" />
      </div>

      <div className="basis-50% bg-white md:bg-none md:basis-1/2 flex flex-col gap-6 justify-center p-6 w-full h-full">
        <div className="">
          <Link to="/forgotpassword">
            <div className="flex gap-2 items-center">
              <p className="text-2xl">
                <MdKeyboardArrowLeft />
              </p>
              <h2>Back</h2>
            </div>
          </Link>
        </div>

        <div>
          <h1 className="font-bold text-2xl py-2">Enter OTP</h1>
          <p className="text-gray-400">
            For your security, a One-Time Password (OTP) has been sent to your
            registered [email address/mobile number ending in XXXX]. Please
            enter the 5-digit code below to proceed.
          </p>
        </div>

        <div className="flex gap-3 ">
          <input
            type="text"
            className="size-15 border rounded-lg text-center"
          />
          <input
            type="text"
            className="size-15 border rounded-lg text-center"
          />
          <input
            type="text"
            className="size-15 border rounded-lg text-center"
          />
          <input
            type="text"
            className="size-15 border rounded-lg text-center"
          />
          <input
            type="text"
            className="size-15 border rounded-lg text-center"
          />
        </div>
        {/* Verify OTP */}
        <div className="py-5">
          <Button
            text="Verify"
            color="text-white"
            borderRadius="rounded-lg"
            padding="p-4"
            bgColor="bg-black"
            width="w-full"
            onClick={() => setOtpModal(true)}
          />
        </div>
      </div>
      {otpModal && <OtpModal setOtpModal={setOtpModal} />}
    </div>
  );
};

export default GenerateOtp;
