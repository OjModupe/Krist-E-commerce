// import React from 'react'
import Button from "../../Shared/Button";

const TotalPayment = () => {
  return (
    <div className="p-3 mt-11 pt-5  border border-gray-200 h-fit">
      <div className="flex justify-between  p-2">
        <h1 className="font-bold ">Subtotal</h1>
        <h1 className="font-bold">$200.00</h1>
      </div>
      <hr className="text-gray-200" />

      <div className="p-1">
        <h1>Enter Discount Code</h1>
        <div className="flex py-2">
          <input
            type="text"
            placeholder="FLAT50"
            className="p-3 rounded-l-lg bg-white border border-r-0 "
          />
          <Button
            text="Apply"
            color="text-white"
            borderRadius="rounded-r-lg"
            padding="px-8"
            bgColor="bg-black"
            width="w-fit"
            // onClick={()=>setOpenModal(true)}
          />
        </div>

        <div className="flex justify-between py-1">
          <h1>Delivery Change</h1>
          <h1>$5.00</h1>
        </div>

        <hr className="text-gray-200 py-2" />

        <div className="flex justify-between">
          <h1 className="font-bold"> Grand Total</h1>
          <h1 className="font-bold">$205.00</h1>
        </div>

        <div className="py-3 text-center">
          <Button
            text="Proceed to Checkout"
            color="text-white"
            borderRadius="rounded-lg"
            padding="p-3"
            bgColor="bg-black"
            width="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TotalPayment;
