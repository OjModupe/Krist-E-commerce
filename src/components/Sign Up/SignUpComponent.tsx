import { Link } from "react-router-dom";
import IM2 from "../../assets/IM2.jpg";
import Button from "../../Shared/Button";
// import Brand from "../../assets/brand.png"

const SignUpComponent = () => {
  return (
    <div
      className="flex h-screen w-full relative"
      style={{
        backgroundImage: `url(${IM2})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* overlay */}
      <div className="absolute h-screen w-full bg-black opacity-40"></div>

      <div className="bg-gray-300 basis-60% w-full h-full overflow-hidden hidden md:block">
        {/* <img src={Brand} className="size-15"/> */}
        <img src={IM2} className="h-full w-full  object-cover object-center" />
      </div>
      <div className="basis-40% bg-white opacity-80 md:bg-none md:basis-1/2 flex flex-col gap-6 justify-center p-6 w-full h-full">
        <div className=" text-center">
          <div className=" gap-4">
            <h1 className="font-bold text-xl">Create New Account</h1>
          </div>
          <p className="text-gray-500">Please enter details</p>

          <h1>
            Already have an account{" "}
            <Link to="/login" className="font-bolder text-gray-400">
              Login
            </Link>
          </h1>
        </div>

        <div className=" w-full gap-5 flex flex-col">
          <div>
            <label>First Name</label>
            <input
              type="text"
              placeholder="Oral"
              className="p-3 rounded-lg border w-full"
            />
          </div>

          <div>
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Roberts"
              className="p-3 rounded-lg border w-full"
            />
          </div>

          <div>
            <label>Email Address</label>
            <input
              type="email"
              placeholder="oralroberts@gmail.com"
              className="p-3 rounded-lg border w-full"
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="............"
              className="p-3 rounded-lg border w-full"
            />
          </div>

          <div>
            <div className="flex gap-4">
              <input type="checkbox" className="size-6 bg-black" />
              <p>I agree to the Terms & Conditions</p>
            </div>

            <div className="mt-7 flex gap-4 flex-col">
              <Button
                text="Sign Up"
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
    </div>
  );
};

export default SignUpComponent;
