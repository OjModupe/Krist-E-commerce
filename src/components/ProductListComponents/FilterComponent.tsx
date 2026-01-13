// import React from 'react'

import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const FilterComponent = () => {
  const [openCategory, setOpenCategory] = useState(false);
  const [openColors, setOpenColors] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);
  const [openSize, setOpenSize] = useState(false);
  const categories = [
    "Men",
    "Women",
    "Kids",
    "Bags",
    "Belts",
    "Wallets",
    "Watches",
    "Accessories",
    "Winter Wear",
  ];

  const colors = [
    { name: "Red", color: "bg-red-500", value: 10 },
    { name: "Blue", color: "bg-blue-600", value: 14 },
    { name: "Orange", color: "bg-red-900", value: 8 },
    { name: "Black", color: "bg-black", value: 9 },
    { name: "Green", color: "bg-green-300", value: 4 },
    { name: "Yellow", color: "bg-yellow-200", value: 2 },
  ];

  const size = [
    { size: "S", value: 6 },
    { size: "M", value: 20 },
    { size: "L", value: 7 },
    { size: "XL", value: 16 },
    { size: "XXL", value: 10 },
    { size: "XXXL", value: 2 },
  ];

  return (
    <>
      <div className="w-full py-15">
        {/* Product Categories */}
        <div className="w-full  gap-4 py-2 items-center  ">
          <div className=" w-full flex justify-between">
            <h1 className="font-bold text-xl">Product Categories</h1>
            <div
              className="text-xl"
              onClick={() => setOpenCategory((prev) => !prev)}
            >
              {openCategory === true ? (
                <MdKeyboardArrowUp />
              ) : (
                <MdKeyboardArrowDown />
              )}
            </div>
          </div>
          {/*  */}
          {openCategory && (
            <div>
              {categories.map((Category) => (
                <div className="justify-between flex">
                  <div className={`flex flex-row gap-3`}>
                    <input type="checkbox" />
                    {Category}
                  </div>

                  <div>
                    <GoPlus />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <hr className="text-gray-300" />
        {/* Filter by Color */}
        <div className="w-full gap-4 py-2 items-center">
          <div className="flex justify-between w-full">
            <h1 className="font-bold text-xl">Filter By Color</h1>
            <div
              className="text-xl"
              onClick={() => setOpenColors((prev) => !prev)}
            >
              {openColors === true ? (
                <MdKeyboardArrowUp />
              ) : (
                <MdKeyboardArrowDown />
              )}
            </div>
          </div>

          {/*  */}
          {openColors && (
            <div>
              {colors.map((item) => (
                <div className={` flex flex-row justify-between `}>
                  <div className="flex gap-3">
                    <div
                      className={` size-5 border rounded-sm ${item.color}`}
                    ></div>
                    <h2>{item.name} </h2>
                  </div>
                  <div>
                    <p>({item.value})</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <hr className="text-gray-300" />
        {/* Filter by Price */}
        <div className="flex gap-4 justify-between py-2 items-center">
          <h1 className="font-bold text-xl">Filter by Price</h1>
          <div
            className="text-xl"
            onClick={() => setOpenPrice((prev) => !prev)}
          >
            {openPrice === true ? (
              <MdKeyboardArrowUp />
            ) : (
              <MdKeyboardArrowDown />
            )}
          </div>
        </div>

        {/*  */}
        {openPrice && (
          <div>
            <h1>Price: $0 - $2000</h1>
            <input
              type="range"
              className="slider w-full bg-black appearance-none h-4 border rounded-full"
            />
          </div>
        )}
        <hr className="text-gray-300" />
        {/* Filter by Size */}
        <div className="flex gap-4 py-2 justify-between items-center">
          <h1 className="font-bold text-xl">Filter by Size</h1>
          <div className="text-xl" onClick={() => setOpenSize((prev) => !prev)}>
            {openSize === true ? (
              <MdKeyboardArrowUp />
            ) : (
              <MdKeyboardArrowDown />
            )}
          </div>
        </div>

        {/*  */}
        {openSize && (
          <div>
            {size.map((item) => (
              <div className="justify-between flex">
                <div className={`flex flex-row gap-3`}>
                  <input type="checkbox"  />
                  <h1> {item.size} </h1>
                </div>
                <div>
                  <p>({item.value})</p>
                </div>
              </div>
            ))}
          </div>
        )}
        <hr className="text-gray-300" />
      </div>
    </>
  );
};

export default FilterComponent;
