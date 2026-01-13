import type { ReactElement } from "react";
import { BsBoxSeam } from "react-icons/bs";
import { CiDollar } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import BS1 from "../../assets/BS5.png";
import BS2 from "../../assets/BS2.png";
import BS3 from "../../assets/BS3.png";
import BS4 from "../../assets/BS2.png";

interface InstagramProps {
  icon: ReactElement;
  title: string;
  description: string;
  image: string;
}

const InstagramStoryComponent = () => {
  const insta: InstagramProps[] = [
    {
      icon: <BsBoxSeam />,
      title: "Free Shipping",
      description: "Free shipping for orders above $200",
      image: BS1,
    },
    {
      icon: <CiDollar />,
      title: "Money Exchange",
      description: "Within 30 days for an exchange",
      image: BS2,
    },
    {
      icon: <CiHeadphones />,
      title: "Online Support",
      description: "24 hours a day, 7 days a week",
      image: BS3,
    },
    {
      icon: <MdOutlinePayment />,
      title: "Flexible Payment",
      description: "Pay with multiple credit cards",
      image: BS4,
    },
  ];

  return (
    <div className=" px-25 py-10 ">
      <div className="text-center p-10">
        <h1 className="text-3xl">Our Instagram Stories</h1>
      </div>
      {/* Instagram pictures */}
      <div className=" grid grid-cols-4 gap-5">
        {insta.map((item) => (
          <div>
            <img src={item.image} />
          </div>
        ))}
      </div>

      {/* Instagram details */}
      <div className=" grid grid-cols-4">
        {insta.map((item) => (
          <div className="flex flex-col py-20 px-5 ">
            <h1 className="text-3xl font-bold ">{item.icon}</h1>
            <h1 className="font-bold text-md ">{item.title}</h1>
            <h1 className="text-wrap text-sm">{item.description}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramStoryComponent;
