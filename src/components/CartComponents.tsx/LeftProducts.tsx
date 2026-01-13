// import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import BS2 from "../../assets/BS2.png";
import BS3 from "../../assets/BS3.png";
import BS5 from "../../assets/BS5.png";
import { type ReactElement } from "react";
import { FiFileMinus, FiFilePlus, FiMinus, FiPlus } from "react-icons/fi";

interface LeftProductProps {
  image: string;
  title: string;
  size: string;
  icon: ReactElement;
  id: number;
  price: string;
  subtotal: string;
}

const LeftProduct = () => {
  const LeftProducts: LeftProductProps[] = [
    {
      image: BS2,
      title: "Tailored Cotton Casual T-shirt",
      size: "S",
      icon: <RiDeleteBin6Line />,
      id: 1,
      price: "$80.00",
      subtotal: "$90.00",
    },
    {
      image: BS3,
      title: " Casual Shorts",
      size: "Regular",
      icon: <RiDeleteBin6Line />,
      id: 2,
      price: "$40.00",
      subtotal: "50.00",
    },
    {
      image: BS5,
      title: "Tailored Cotton Casual T-shirt",
      size: "M",
      icon: <RiDeleteBin6Line />,
      id: 3,
      price: "$60.00",
      subtotal: "$70.00",
    },
  ];

  const tableHeader = ["Products", "Price", "Quantity", "Subtotal"];
  return (
    <div className="px-15 py-10">

        <h1 className="text-4xl font-medium py-3">Checkout</h1>
      <table className="p-5">
        <thead className="border-b border-b-gray-300">
          <tr className="">
            {tableHeader.map((header, index) => (
              <td key={index} className="pr-5 pl-2">
                {" "}
                {header}{" "}
              </td>
            ))}
          </tr>
        </thead>

        <tbody className="p-5 ">
          {LeftProducts.map((LeftProducts) => (
            <tr key={LeftProducts.id} className="border-b border-gray-200  ">
              {/* Products */}
              <td className=" pr-8">
                <div className="px-10 py-2 flex gap-5">
                  <div className="">
                    <img src={LeftProducts.image} alt="" className="size-15" />
                  </div>

                  <div className="flex gap-3 flex-col">
                    <td className="font-bold text-sm ">{LeftProducts.title}</td>
                    <td className="">Size: {LeftProducts.size}</td>
                  </div>
                </div>
              </td>
              {/* Price */}
              <div className="flex pr-8 gap-5">
                <td className="">{LeftProducts.price}</td>
              </div>

              {/* Quantity */}
              {/* <div className="p-3"> */}
              <td className="pr-9 pl-1 p-3">
                <div className="border p-2 flex items-center rounded-lg gap-3">
                  <FiMinus />
                  1
                  <FiPlus />
                </div>
              </td>
              {/* </div> */}
              {/* Subtotal */}
              <div>
                <td className="pr-6 p-2">{LeftProducts.subtotal}</td>
              </div>


              {/* icon */}
             
                 <td className="p-3 text-red-500">{LeftProducts.icon}</td>
                 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeftProduct;
