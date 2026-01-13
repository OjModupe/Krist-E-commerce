import { MdKeyboardArrowRight } from "react-icons/md";
import CI1 from "../../assets/CategoryImage1.png";
import { FaStar } from "react-icons/fa6";
import { useState, type ReactElement } from "react";
import { useLocation, useParams } from "react-router-dom";
import { PiMinus, PiPlus } from "react-icons/pi";
import Button from "../../Shared/Button";
import { GiLoveHowl } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import Modal from "../../Shared/Modal";


interface Details {
  name: string;
  description: string;
  icon: ReactElement;
  currentPrice: string;
  discountedPrice: string;
  colors: string[];
  size: string[];
  image: string;
}

const TopProductDetail = () => {
  const { id } = useParams();
  console.log(id);

  const location = useLocation();
  console.log(location);

  const product = location.state.info;
  console.log(product);

  const [selectedImage, setSelectedImage] = useState(product.image[0]);

  const [openModal, setOpenModal] = useState<boolean>(true)
  

 
  return (
    <div className="p-2 w-full relative">
      <h1 className="flex items-center gap-2 text-[12px]">
        Home <MdKeyboardArrowRight /> Shop <MdKeyboardArrowRight /> Women
        Textured Handheld Bag
      </h1>

      <div className="p-2 flex gap-3 ">
        {/* image */}
        <div className="basis-1/2">
          {/* Big image */}
          <div >
            <img src={selectedImage} alt="" className=" w-full" />
          </div>
          {/* LOWER */}
          <div className="flex gap-5 size-32 pt-10">
            {product.image.map((item: string) => (
              <img src={item} alt="" onClick={() => setSelectedImage(item)}  className="cursor-pointer"/>
              
          
            ))}
          </div>
        </div>

        {/* details */}
        <div className="basis-1/2 p-2 text-xl space-y-3">
          <h1 className="font-bold text-2xl">{product.productName}</h1>
          <h1>{product.productDescription}</h1>
          <h1>{product.icon}</h1>
          <div className="flex gap-2">
            <h1>{product.productCurrentPrice}</h1>
            <h1 className="text-gray-400">{product.productDiscountedPrice}</h1>
          </div>
          <h3 className="text-[15px] pt-3">{product.description}</h3>
          {/* COLOR */}
           <h1 className="font-bold text-xl pt-5">Color</h1>
          <div className=" flex gap-2 ">
           
            {product.colors.map((item: string) => (
              <div className="flex">
                <div className={`size-10 border rounded-sm ${item}  `}> </div>
              </div>
            ))}
          </div>
          {/* Size */}
          <h1 className="font-bold text-xl pt-5">Sizes </h1>
          <div className="flex gap-2 text-center">
            {product.sizes.map((size: string) => (
              <div className={`border rounded-lg p-2 size-10 `}>
                <h1 className="text-[15px] text-center ">{size}</h1>
              </div>
            ))}
          </div>

          <div className=" w-fit flex gap-3 pt-10">
            <div className="rounded-lg flex p-2 gap-2 border items-center w-fit">
              <h1 className="text-xl">
                <PiMinus />
              </h1>
              <p>1</p>
              <h1 className="text-xl">
                {" "}
                <PiPlus />
              </h1>
            </div>

           
            <Button
              text="Add to Cart"
              color="text-white"
              borderRadius="rounded-lg"
              padding="px-30"
              bgColor="bg-black"
              width="w-full"
              size="text-[15px]"
             onClick={() => setOpenModal(true)}  
             />
           

            <div className="rounded-lg p-3 border">
              <h1 className="text-xl">
                <CiHeart />
              </h1>
            </div>
          </div>
        </div>
        {openModal && (<Modal setOpenModal={setOpenModal}/>) }
      </div>
      
    </div>
  );
};

export default TopProductDetail;
