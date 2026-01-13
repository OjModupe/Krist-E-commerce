// import BS1 from "../../assets/BS1.png";
import BS2 from "../../assets/BS2.png";
import BS3 from "../../assets/BS3.png";
// import BS4 from "../../assets/BS4 .png";
import BS5 from "../../assets/BS5.png";
import CI1 from "../../assets/CategoryImage1.png";
import CI2 from "../../assets/CategoryImage2.png";
import CI3 from "../../assets/CategoryImage3.png";
import { Link } from "react-router-dom";

interface BestsellerProps {
  image: string;
  productName: string;
  productDescription: string;
  currentPrice: string;
  discountedPrice: string;
  path: string;
}

const BestSellerComponent = () => {
  const images: BestsellerProps[] = [
    {
      image: CI1,
      productName: "Roadstar",
      productDescription: "Skinny Fit Jeans",
      currentPrice: "$40.00",
      discountedPrice: "$38.00",
      path: "/",
    },
    {
      image: BS2,
      productName: "Allen Solly",
      productDescription: "Checkered Shirt",
      currentPrice: "$100.00",
      discountedPrice: "$65.00",
      path: "/",
    },
    {
      image: BS3,
      productName: "Denim Short",
      productDescription: "Loose fit Bermuda Shorts",
      currentPrice: "$20.00",
      discountedPrice: "$12.00",
      path: "/",
    },
    {
      image: BS2,
      productName: "OL T-Shirt",
      productDescription: "One Life graphic T-shirt",
      currentPrice: "$40.00",
      discountedPrice: "$32.00",
      path: "/",
    },
    {
      image: BS5,
      productName: "T-shirt",
      productDescription: "T-Shirt with tape details",
      currentPrice: "$50.00",
      discountedPrice: "$35.00",
      path: "/",
    },
    {
      image: CI1,
      productName: "Graphic T-Shirt",
      productDescription: "Gradient Graphic T-Shirt",
      currentPrice: "$30.00",
      discountedPrice: "$23.00",
      path: "/",
    },
    {
      image: CI2,
      productName: "Plain Polo T-shirt",
      productDescription: "Polo with Tipping details",
      currentPrice: "$20.00",
      discountedPrice: "$15.00",
      path: "/",
    },
    {
      image: CI3,
      productName: "Long-Sleeved Shirt",
      productDescription: "Vertical Striped Shirt",
      currentPrice: "$60.00",
      discountedPrice: "$55.00",
      path: "/",
    },
  ];
  return (
    <div className="  px-25 py-20">
      {/* BestSeller text */}
      <div className="text-center text-black text-3xl">
        <h1>Our Bestseller</h1>
      </div>

      {/* images */}
      <div className="grid grid-cols-4 grid-rows-2 gap-5 py-10 px-4">
        {images.map((item) => (
          <Link to={item.path}>
            <div className="">
              <img src={item.image} />
              <div className="  py-7 flex flex-col px-5">
                <h1 className="font-bold"> {item.productName}</h1>
                <h1 className="">{item.productDescription}</h1>
                <div className="flex gap-2">
                  <h1 className="text-black">{item.discountedPrice} </h1>
                  <h1 className="text-gray-200">{item.currentPrice}</h1>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BestSellerComponent;
