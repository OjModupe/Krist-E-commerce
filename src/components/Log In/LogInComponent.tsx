import IM1 from "../../assets/IM1.jpg";
import { SiHey } from "react-icons/si";
import Button from "../../Shared/Button";
import { Link } from "react-router-dom";

const LogInComponent = () => {
  return (
    <div
      className=" relative flex h-screen w-full"
      style={{
        backgroundImage: `url(${IM1})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* overlay */}
      <div className=" absolute h-screen w-full bg-black opacity-40"></div>
      <div className="bg-gray-300 basis-1/2 w-full h-full overflow-hidden hidden md:block">
        <img src={IM1} className="h-full w-full object-cover object-center " />
      </div>

      <div className="w-full bg-white opacity-80 md:bg-none   md:basis-1/2 flex flex-col gap-6 justify-center p-6 h-full">
        <div className="bg-none p-3">
          <div className="flex gap-4">
            <h1 className="text-xl font-bold ">Welcome</h1>
            <SiHey />
          </div>
          <p className="text-gray-500 ">Please Login here</p>
          <h1>
            Don't have an account{" "}
            <Link to="/signup" className="font-bolder text-gray-400">
              Signup
            </Link>{" "}
          </h1>
        </div>

        <div className="bg-none w-full gap-5 flex flex-col">
          <div>
            <label>Email Address</label>
            <input
              type="email"
              placeholder="johndoe@example.com"
              className="p-3 rounded-lg border w-full"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="............"
              className="border border-solid w-full p-3 rounded-lg"
            />
          </div>

          <div className="flex justify-between ">
            <div className="flex gap-4 ">
              <input type="checkbox" className="size-6 bg-black" />
              <p>Remember me</p>
            </div>

            <p>Forgot Password?</p>
          </div>
          <div className=" mt-5 flex gap-4 flex-col ">
            <Button
              text="Log In"
              color="text-white"
              borderRadius="rounded-lg"
              padding="p-3"
              bgColor="bg-black"
              width="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInComponent;
