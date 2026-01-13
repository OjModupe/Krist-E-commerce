// import React from 'react'
import { useState } from "react";
import ReviewComponent from "./ReviewComponent";

const MiddleComponent = () => {
  const [activeTab, setactiveTab] = useState(0);

  return (
    <div>
      <div className="flex gap-3 ">
        <h1
          onClick={() => setactiveTab(0)}
          className={` ${
            activeTab === 0 ? "font-bold border-b-3 text-black text-xl" : ""
          }`}
        >
          Descriptions
        </h1>
        <h1
          onClick={() => setactiveTab(1)}
          className={` ${
            activeTab === 1 ? "font-bold border-b-3 text-black text-xl" : ""
          }`}
        >
          Additional Information
        </h1>
        <h1
          onClick={() => setactiveTab(2)}
          className={` ${
            activeTab === 2 ? "font-bold border-b-3 text-black text-xl" : ""
          }`}
        >
          Reviews
        </h1>
      </div>
      <hr />
      {/* Tab contents */}
      {/* description */}
      {activeTab === 0 && (
        <div>
          <p className="text-[15px] font-medium">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less distribution of
            letters, as opposed to using "Content here, content here", making it
            look like readable English. Many desktop publishing packages and web
            page editors now use Lorem Ipsum as their default model text, and a
            search for 'Lorem Ipsum ' will uncover many web sites still in their
            infancy.
          </p>

          <p className="pt-4 text-[15px] font-medium">
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humor and the like).
          </p>
        </div>
      )}

{/* Information */}
      {activeTab === 1 && (
        <div className="p-5">
          <div className=" flex gap-8 items-center">
            <p className="text-[20px] font-bold">Color</p>
            <p className="text-[15px]">
              Red, Blue, Orange, Black, Green, Yellow
            </p>
          </div>

          <div className=" flex gap-10 items-center">
        <p className="text-[20px] font-bold">Size</p>
        <p className="text-[15px]">S, M, L, XL, XXL</p>
          </div>
        </div>
      )}

      {/*Review */}
      {activeTab === 2 && (
        <div className="p-2">
            <ReviewComponent/>
        </div>
      )}
    </div>
  );
};

export default MiddleComponent;
