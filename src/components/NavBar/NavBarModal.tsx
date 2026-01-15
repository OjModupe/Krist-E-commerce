import { MdCancel } from "react-icons/md";
// import Brand from "../assets/brand.png";

interface NavBarProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBarModal = ({ setOpenModal }: NavBarProps) => {
  const men = [
    "T-shirts",
    "Casual Shirts",
    "Formal Shirts",
    "Jackets",
    "Blazers & Coats",
  ];
  const women = [
    "Kurtas & Suits",
    "Sarees",
    "Ethnic Wear",
    "Lehenga Cholis",
    "Jackets",
  ];
  const footwear = [
    "Flats",
    "Casual Shoes",
    "Heels",
    "Boots",
    "Sports Shoes & Floaters",
  ];
  const kids = [
    "T-shirts",
    "Shirts",
    "Jeans",
    "Trousers",
    "Party Wear",
    "Innerwear & Thermal",
    "Track Pants",
    "Value Pack",
  ];
  const indianWear = ["Kurtas & Kurta Sets", "Sherwanis"];
  const westernWear = ["Dresses", "Jumpsuits"];
  const productFeatures = ["360 Product Viewer", "Product with Video"];
  return (
    <div>
      <div className="bg-white rounded-2xl p-6 absolute left-[30%] top-[30%]  z-50">
        <MdCancel className=".  text-2xl" onClick={() => setOpenModal(false)} />
        <div className="flex">
          {/* men column */}
          <div className="py-5 px-5 border-r border-r-gray-200">
            <h1 className="font-bold text-xl">Men</h1>
            {/* <div className="flex flex-col"> */}
            <div className="">
              {men.map((man) => (
                <h1 className="py-2">{man}</h1>
              ))}
            </div>
            {/* Indian Wear */}
            <div className="py-3">
              <h1 className="font-bold text-xl">Indian & Festive Wear</h1>
              <div className="">
                {indianWear.map((indian) => (
                  <h1 className="py-2">{indian}</h1>
                ))}
              </div>
            </div>
            {/* </div> */}
          </div>

          {/* women columnn */}
          <div className="py-5 px-15  border-r  border-r-gray-200">
            <h1 className="font-bold text-xl">Women</h1>
            <div className="">
              {women.map((woman) => (
                <h1 className="py-2">{woman}</h1>
              ))}
            </div>
            {/* Western wear */}
            <div className="py-3">
              <h1 className="font-bold text-xl">Western Wear</h1>
              <div className="">
                {westernWear.map((western) => (
                  <h1 className="py-2">{western}</h1>
                ))}
              </div>
            </div>
          </div>

          {/* footwear column */}
          <div className="py-5 px-10 border-r border-r-gray-200">
            <h1 className="font-bold text-xl">Footwear</h1>
            <div>
              {footwear.map((feetwear) => (
                <h1 className="p-1">{feetwear}</h1>
              ))}
            </div>
            {/* Product features */}
            <div className="py-5">
              <h1 className="font-bold text-xl">Product Features</h1>
              <div className="">
                {productFeatures.map((product) => (
                  <h1 className="py-2">{product}</h1>
                ))}
              </div>
            </div>
          </div>

          {/* kids column */}
          <div className="py-7 px-10">
            <h1 className="font-bold text-xl">Kids</h1>
            <div>
              {kids.map((kid) => (
                <h1 className="p-1">{kid}</h1>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarModal;
