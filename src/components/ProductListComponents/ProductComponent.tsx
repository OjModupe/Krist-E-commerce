// import React from 'react'
import { CgMenuGridR } from "react-icons/cg";
// import { ReactElement } from "react";
import { useState, type ReactElement } from "react";
import { RiListRadio } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "../../Shared/Button";

interface ProductProps {
  image: string[];
  productName: string;
  productDescription: string;
  description: string;
  productCurrentPrice: string;
  productDiscountedPrice: string;
  // icon: ReactElement;
  colors: string[];
  sizes: string[];
  id: number;
}

const ProductComponent = () => {
  const [onPage, setOnPage] = useState<number>(1);

  const [showmore, setShowMore] = useState<null | number>(null);

  const pageNumber = [1, 2, 3, 4, 5];

  const products: ProductProps[] = [
    {
      image: [
        "/assets/BS2.png",
        "/assets/BS3.png",
        "/assets/BS5.png",
        "/assets/BS2.png",
      ],
      productName: "US Polo",
      productDescription: "Tailored Cotton Casual T-shirt",
      // icon:
      productCurrentPrice: "$200",
      productDiscountedPrice: "$170",
      colors: [
        "bg-[#FF0000]",
        "bg-[#0000FF]",
        "bg-[#E1C16E]",
        "bg-[#000000]",
        "bg-[#9ACD32]",
        "bg-[#B8860B]",
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      id: 1,
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at the layout. The point of using a lorem ipsum is that it has a more-or-less normal distribution of letters.",
    },
    {
      image: [
        "/assets/BS3.png",
        "/assets/BS5.png",
        "/assets/BS2.png",
        "/assets/BS5.png",
      ],
      productName: "US Polo",
      productDescription: "Tailored Cotton Casual T-shirt",
      productCurrentPrice: "$200",
      productDiscountedPrice: "$170",
      colors: [
        "bg-[#FF0000]",
        "bg-[#0000FF]",
        "bg-[#E1C16E]",
        "bg-[000000]",
        "bg-[#9ACD32]",
        "bg-[#B8860B]",
      ],

      sizes: ["S", "M", "L", "XL", "XXL"],
      id: 2,
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at the layout. The point of using a lorem ipsum is that it has a more-or-less normal distribution of letters.",
    },
    {
      image: [
        "/assets/BS5.png",
        "/assets/BS2.png",
        "/assets/BS3.png",
        "/assets/BS5.png",
      ],
      productName: "US Polo",
      productDescription: "Tailored Cotton Casual T-shirt",
      productCurrentPrice: "$200",
      productDiscountedPrice: "$170",
      colors: [
        "bg-[#FF0000]",
        "bg-[#0000FF]",
        "bg-[#E1C16E]",
        "bg-[#000000]",
        "bg-[#9ACD32]",
        "bg-[#B8860B]",
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      id: 3,
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at the layout. The point of using a lorem ipsum is that it has a more-or-less normal distribution of letters.",
    },
    {
      image: [
        "/assets/CategoryImage1.png",
        "/assets/CategoryImage2.png",
        "/assets/CategoryImage3.png",
        "/assets/CategoryImage4.png",
      ],
      productName: "US Polo",
      productDescription: "Tailored Cotton Casual T-shirt",
      productCurrentPrice: "$200",
      productDiscountedPrice: "$170",
      colors: [
        "bg-[#FF0000]",
        "bg-[#0000FF]",
        "bg-[#E1C16E]",
        "bg-[#000000]",
        "bg-[#9ACD32]",
        "bg-[#B8860B]",
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      id: 4,
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at the layout. The point of using a lorem ipsum is that it has a more-or-less normal distribution of letters.",
    },
    {
      image: [
        "/assets/CategoryImage2.png",
        "/assets/CategoryImage3.png",
        "/assets/CategoryImage1.png",
        "/assets/CategoryImage4.png",
      ],
      productName: "US Polo",
      productDescription: "Tailored Cotton Casual T-shirt",
      productCurrentPrice: "$200",
      productDiscountedPrice: "$170",
      colors: [
        "bg-[#FF0000]",
        "bg-[#0000FF]",
        "bg-[#E1C16E]",
        "bg-[#000000]",
        "bg-[#9ACD32]",
        "bg-[#B8860B]",
      ],

      sizes: ["S", "M", "L", "XL", "XXL"],
      id: 5,
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at the layout. The point of using a lorem ipsum is that it has a more-or-less normal distribution of letters.",
    },
    {
      image: [
        "/assets/CategoryImage3.png",
        "/assets/CategoryImage1.png",
        "/assets/CategoryImage2.png",
        "/assets/CategoryImage4.png",
      ],
      productName: "US Polo",
      productDescription: "Tailored Cotton Casual T-shirt",
      productCurrentPrice: "$200",
      productDiscountedPrice: "$170",
      colors: [
        "bg-[#FF0000]",
        "bg-[#0000FF]",
        "bg-[#E1C16E]",
        "bg-[#000000]",
        "bg-[#9ACD32]",
        "bg-[#B8860B]",
      ],

      sizes: ["S", "M", "L", "XL", "XXL"],
      id: 6,
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at the layout. The point of using a lorem ipsum is that it has a more-or-less normal distribution of letters.",
    },
    {
      image: [
        "/assets/CategoryImage4.png",
        "/assets/CategoryImage1.png",
        "/assets/CategoryImage3.png",
        "/assets/CategoryImage2.png",
      ],
      productName: "US ghj",
      productDescription: "Tailored Cotton Casual T-shirt",
      productCurrentPrice: "$200",
      productDiscountedPrice: "$170",
      colors: [
        "bg-[#FF0000]",
        "bg-[#0000FF]",
        "bg-[#E1C16E]",
        "bg-[#000000]",
        "bg-[#9ACD32]",
        "bg-[#B8860B]",
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      id: 7,
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at the layout. The point of using a lorem ipsum is that it has a more-or-less normal distribution of letters.",
    },
    {
      image: [
        "/assets/BS2.png",
        "/assets/BS2.png",
        "/assets/BS2.png",
        "/assets/BS2.png",
      ],
      productName: "US Polo",
      productDescription: "Tailored Cotton Casual T-shirt",
      productCurrentPrice: "$200",
      productDiscountedPrice: "$170",
      colors: [
        "bg-[#FF0000]",
        "bg-[#0000FF]",
        "bg-[#E1C16E]",
        "bg-[#000000]",
        "bg-[#9ACD32]",
        "bg-[#B8860B]",
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      id: 8,
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at the layout. The point of using a lorem ipsum is that it has a more-or-less normal distribution of letters.",
    },
    {
      image: [
        "/assets/BS5.png",
        "/assets/BS3.png",
        "/assets/BS2.png",
        "/assets/BS5.png",
      ],
      productName: "US Polo",
      productDescription: "Tailored Cotton Casual T-shirt",
      productCurrentPrice: "$200",
      productDiscountedPrice: "$170",
      colors: [
        "bg-[#FF0000]",
        "bg-[#0000FF]",
        "bg-[#E1C16E]",
        "bg-[#000000]",
        "bg-[#9ACD32]",
        "bg-[#B8860B]",
      ],

      sizes: ["S", "M", "L", "XL", "XXL"],
      id: 9,
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at the layout. The point of using a lorem ipsum is that it has a more-or-less normal distribution of letters.",
    },
    {
      image: [
        "/assets/CategoryImage2.png",
        "/assets/CategoryImage4.png",
        "/assets/CategoryImage1.png",
        "/assets/CategoryImage3.png",
      ],
      productName: "US Polo",
      productDescription: "Tailored Cotton Casual T-shirt",
      productCurrentPrice: "$200",
      productDiscountedPrice: "$170",
      colors: [
        "bg-[#FF0000]",
        "bg-[#0000FF]",
        "bg-[#E1C16E]",
        "bg-[#000000]",
        "bg-[#9ACD32]",
        "bg-[#B8860B]",
      ],

      sizes: ["S", "M", "L", "XL", "XXL"],
      id: 10,
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at the layout. The point of using a lorem ipsum is that it has a more-or-less normal distribution of letters.",
    },
    {
      image: [
        "/assets/BS2.png",
        "/assets/BS3.png",
        "/assets/BS5.png",
        "/assets/BS2.png",
      ],
      productName: "US Polo",
      productDescription: "Tailored Cotton Casual T-shirt",
      productCurrentPrice: "$200",
      productDiscountedPrice: "$170",
      colors: [
        "bg-[#FF0000]",
        "bg-[#0000FF]",
        "bg-[#E1C16E]",
        "bg-[#000000]",
        "bg-[#9ACD32]",
        "bg-[#B8860B]",
      ],

      sizes: ["S", "M", "L", "XL", "XXL"],
      id: 11,
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at the layout. The point of using a lorem ipsum is that it has a more-or-less normal distribution of letters.",
    },
    {
      image: [
        "/assets/BS5.png",
        "/assets/BS2.png",
        "/assets/BS3.png",
        "/assets/BS5.png",
      ],
      productName: "US Polo",
      productDescription: "Tailored Cotton Casual T-shirt",
      productCurrentPrice: "$200",
      productDiscountedPrice: "$170",
      colors: [
        "bg-[#FF0000]",
        "bg-[#0000FF]",
        "bg-[#E1C16E]",
        "bg-[#000000]",
        "bg-[#9ACD32]",
        "bg-[#B8860B]",
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      id: 12,
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at the layout. The point of using a lorem ipsum is that it has a more-or-less normal distribution of letters.",
    },
  ];
  return (
    <div className="px-20 flex-1 py-18">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <CgMenuGridR />
          <RiListRadio />
          <p className="text-xs">Showing 1 - 16 of 72 results </p>
          <IoIosArrowDown />
        </div>
      </div>
      <div className="grid grid-cols-3  py-10 grid-rows-5">
        {products.map((info) => (
          <Link
            key={info.id}
            to={`/productdetails/${info.id}`}
            state={{ info }}
          >
            <div className="py-3 px-5 relative " onMouseEnter={() => setShowMore(info.id)} onMouseLeave={()=>setShowMore(null)}>
              <img src={info.image[0]} alt="" width={300} />
              <h1 className="text-sm font-bold">{info.productName}</h1>
              <h1 className="text-xs">{info.productDescription}</h1>
              <div className="flex gap-2">
                <h1 className="text-xs">{info.productCurrentPrice}</h1>
                <h1 className="text-xs">{info.productDiscountedPrice}</h1>
                {showmore === info.id && (
                  <div className="absolute top-[55%] left-[10%] text-center w-full ">
                    <Button
                      text="Add to Cart"
                      color="text-black"
                      borderRadius="rounded-lg"
                      padding="p-3"
                      bgColor="bg-white"
                      width="w-full"
                      size="text-[15px]"
                    />
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex gap-3 items-center justify-end">
        <FaArrowLeftLong className="cursor-pointer" />
        {pageNumber.map((Number) => (
          <div
            className={`size-8 rounded-sm flex cursor-pointer justify-center border ${
              onPage == Number ? "bg-black text-white" : ""
            }`}
            onClick={() => setOnPage(Number)}
          >
            {Number}
          </div>
        ))}

        <FaArrowRightLong className="cursor-pointer" />
      </div>
    </div>
  );
};

export default ProductComponent;
