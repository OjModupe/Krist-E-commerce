// import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import CI1 from "../../assets/CategoryImage1.png";
import CI2 from "../../assets/CategoryImage2.png";
import CI3 from "../../assets/CategoryImage3.png";
import CI4 from "../../assets/CategoryImage4.png";
import { Link } from "react-router-dom";

interface CategoryProps {
  image: string;
  text: string;
  path: string;
}

const CategoryComponent = () => {
  const images: CategoryProps[] = [
    { image: CI1, text: "Casual Wear", path: "/casualwear" },
    { image: CI2, text: "Western Wear", path: "/westernwear" },
    { image: CI3, text: "Ethnic Wear", path: "/ethnicwear" },
    { image: CI4, text: "Kids Wear", path: "/kidswear" },
  ];

  return (
    <div className=" px-25 py-20  ">
      {/* Shop by Categories */}
      <div className="py-8 flex justify-between">
        <div className="font-medium text-xl text-black">
          <h1 className="text-3xl">Shop by Categories</h1>
        </div>
        <div className="flex gap-1 rounded-lg">
          <h1 className="bg-gray-100  p-3 rounded-lg">
            <FaArrowLeft />
          </h1>
          <h1 className="bg-black text-white p-3 rounded-lg ">
            <FaArrowRight />
          </h1>
        </div>
      </div>

      {/* div images  */}
      <div className=" grid grid-cols-4 gap-3 py-10 ">
        {images.map((item) => (
          <Link to={item.path}>
            <div className="relative">
              <img src={item.image} />
              <div className="absolute bg-white bottom-6 left-12 py-3 px-10">
          {item.text}
          
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryComponent;
