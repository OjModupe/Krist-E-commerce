// import React from 'react'

import type { ReactElement } from "react";
import { RxCross2 } from "react-icons/rx";

interface ModalProps {
  setOpenModal: any;

}

const Modal = ({ setOpenModal }: ModalProps) => {
  return (
    <div className="p-2 bg-gray-300 absolute top-[20%] left-[70%]">
      <div className="flex gap-8 items-center ">
        <h1>You have 3 items in your cart</h1>
        <RxCross2 onClick={() => setOpenModal(false)} />
      </div>
    </div>
  );
};

export default Modal;
