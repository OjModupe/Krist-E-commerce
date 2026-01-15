import type { ReactElement } from "react";
import Brand from "../../assets/brand.png";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { BiLike } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Button from "../../Shared/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import NavBarModal from "./NavBarModal";

interface NavBarProps {
  name: string;
  path: string;
  icon?: ReactElement;
}

const NavBarComponent = () => {
  // const [activeRoute, setActiveRoute] = useState<string>("HomePage");
  const pages: NavBarProps[] = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/productlist", icon: <RiArrowDropDownLine /> },
    { name: "Our Story", path: "/ourstory" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contactus" },
  ];
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <div className=" flex xl:px-10 py-5 bg-white  items-center justify-between">
        <div className="">
          <h1 className="text-black">
            <img src={Brand} />
          </h1>
        </div>

        <div className="xl:flex gap-7 hidden">
          {pages.map((item) => (
            <Link to={item.path} key={item.name} className={` `}>
              <div className="flex gap-2 items-center">
                <h1>{item.name}</h1>
                <div className="text-2xl" onClick={() => setOpenModal(true)}>
                  {item.icon}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="xl:flex hidden items-center gap-7">
          <IoSearchOutline className="text-2xl" />
          <BiLike className="text-2xl" />
          <HiOutlineShoppingBag className="text-2xl" />
          <Link to="/login">
            <Button
              text="Login"
              color="text-white"
              borderRadius="rounded-lg"
              padding="p-2"
              bgColor="bg-black"
              width=""
              // onClick={() => setOpenModal(true)}
            />
          </Link>
        </div>
        <div className="xl:hidden text-4xl">
          <GiHamburgerMenu />
        </div>
      </div>

      {openModal && <NavBarModal setOpenModal={setOpenModal} />}
    </>
  );
};

export default NavBarComponent;
