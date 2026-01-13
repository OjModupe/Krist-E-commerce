import type { ReactElement } from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import PM1 from "../../assets/PM.jpg";
import PM2 from "../../assets/PM2.jpeg";

interface CustomerProps {
  icon: ReactElement;
  name: string;
  text: string;
  occupation: string;
  image: string;
}

const CustomerComponent = () => {
  const card: CustomerProps[] = [
    {
      icon: <TiStarFullOutline />,
      text: "It is a long established fact that a reader will be distracted by thereadable component of a page when looking at its layout. The point using lorem-ipsum is that it has a more-or-less even distribution of letters",
      name: "Leslie Alexander",
      occupation: "Model",
      image: PM1,
    },
    {
      icon: <TiStarFullOutline />,
      text: "It is a long established fact that a reader will be distracted by thereadable component of a page when looking at its layout. The point using lorem-ipsum is that it has a more-or-less even distribution of letters",
      name: "Jacob Jones",
      occupation: "Product Designer",
      image: PM2,
    },
    {
      icon: <TiStarFullOutline />,
      text: "It is a long established fact that a reader will be distracted by thereadable component of a page when looking at its layout. The point using lorem-ipsum is that it has a more-or-less even distribution of letters",
      name: "Jenny Wilson",
      occupation: "Model",
      image: PM1,
    },
  ];
  return (
    <div className=" px-25 py-20 bg-gray-100 ">
      {/* text */}
      <div className="flex justify-between p-3">
        <div>
          <h1 className="text-2xl font-medium">What our Customers say</h1>
        </div>

        <div className="flex gap-2">
          <h1 className="text-black bg-gray-200  p-3 rounded-lg">
            <FaArrowLeft />
          </h1>
          <h1 className="bg-black text-white p-3 rounded-lg ">
            <FaArrowRight />
          </h1>
        </div>
      </div>

      <div className="p-5 grid grid-cols-3 gap-5 ">
          {card.map((item) => (
            <div className="flex items-start p-5 bg-white shadow gap-4 flex-col">
              <div className="flex text-yellow-300">
                {item.icon}
                {item.icon}
                {item.icon}
                {item.icon}
                {item.icon}
              </div>
              <div className="text-sm">{item.text}</div>
              <div className="flex gap-3">
                <div className="size-10">
                  <img src={item.image} className="rounded-full h-full w-full" />
                </div>
              </div>
              <div className="flex gap-1 flex-col">
                <div className="text-sm text-gray-600">{item.name}</div>
                <div className="text-xs text-gray-600">{item.occupation}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CustomerComponent;
