import Brand from "../../assets/IM3.jpg";
import Button from "../../Shared/Button";
import { FaArrowRight } from "react-icons/fa6";

const HeroComponent = () => {
  return (
    <div
      className="flex px-25 space-y-5  justify-center flex-col items-start h-150 w-full "
      style={{ backgroundImage: `url(${Brand})` }}
    >
      
        <span className="font-medium text-3xl">Classic Exclusive</span>
      <span className="font-bold text-5xl">Women's Collections</span>
      <span className=" text-2xl">UP TO 40% OFF</span>

      <Button
        text="Shop Now"
        color="text-white"
        borderRadius="rounded-lg"
        padding="p-3"
        bgColor="bg-black"
        width="w-fit"
        icon={<FaArrowRight />}
        
      />
      
    </div>
  );
};

export default HeroComponent;
