import { Link } from "react-router-dom";
import FP from "../assets/image.png";
import Button from "../Shared/Button";
import { MdKeyboardArrowLeft } from "react-icons/md";

const ForgotPassword = () => {
  return (
    <div
      className="flex h-screen w-full relative"
      style={{
        backgroundImage: `url(${FP})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="basis-50% w-full h-full">
        <img src={FP} className="h-full w-full object-cover object-center" />
      </div>

      <div className="basis-50% bg-white md:bg-none md:basis-1/2 flex flex-col gap-6 justify-center p-6 w-full h-full">
        <div className="">
          <Link to="/login">
            <div className="flex gap-2 items-center">
              <p className="text-2xl">
                <MdKeyboardArrowLeft />
              </p>
              <h2>Back</h2>
            </div>
          </Link>
        </div>

        <div className="">
          <h1 className="font-bold text-2xl py-2">Forgot Password</h1>

          <p className="text-gray-400">
            Enter your registered email address. We'll send a code to reset your
            password.
          </p>
        </div>

        <div className="w-full">
          <div className="">
            <label className="text-sm">Email Address</label>
            <input
              type="emailaddress"
              placeholder="robertfox@example.com"
              className="p-3 rounded-lg border w-full"
            />
          </div>

          <div className="mt-5 ">
            <Link to="/generateotp">
              <Button
                text="Send OTP"
                color="text-white"
                borderRadius="rounded-lg"
                padding="p-3"
                bgColor="bg-black"
                width="w-full"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
