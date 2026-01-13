import type { ReactElement } from "react";
import Brand2 from "../assets/WhiteBrand.png";
import { FaFacebook, FaPhoneVolume } from "react-icons/fa6";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaCcVisa } from "react-icons/fa6";
import { FaCcMastercard, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { LiaCcAmex } from "react-icons/lia";
import { FaPaypal } from "react-icons/fa";

// contact footer //
interface FooterProps {
  name?: string;
  icon?: ReactElement;
  number?: string;
}

interface InfoProps {
  name?: string;
  path: string;
}

interface IconProps {
  icon: ReactElement;
  path: string;
}

const Footer = () => {
  const contact: FooterProps[] = [
    { name: "(704) 555-0127", icon: <FaPhoneVolume /> },
    { name: "krist@example.com", icon: <CiMail /> },
    {
      name: "3891 Ranchview Dr Richardson, California 62639",
      icon: <CiLocationOn />,
    },
  ];

  // information Footer //

  const information: InfoProps[] = [
    { name: "My Account", path: "/myaccount" },
    { name: "Login", path: "/login" },
    { name: "My Cart", path: "/mycart" },
    { name: "My Wishlist", path: "/mywishlist" },
    { name: "Checkout", path: "/checkout" },
  ];

  // Service Footer
  const service: InfoProps[] = [
    { name: "About Us", path: "/aboutus" },
    { name: "Careers", path: "/careers" },
    { name: "Delivery Information", path: "/deliveryinformation" },
    { name: "Privacy Policy", path: "/privacypolicy" },
    { name: "Terms & Conditions", path: "/termsandconditions" },
  ];

  const icon: ReactElement[] = [
    <FaCcVisa />,
    <FaCcMastercard />,
    <FaGooglePay />,
    <LiaCcAmex />,
    <FaPaypal />,
  ];

  const icon2: IconProps[] = [
   {icon:  <FaFacebook />, path: "https://www.facebook.com/buybetter"},
    {icon: <FaInstagram />, path: "https://www.instagram.com/buybetter"},
    {icon: <FaTwitter />, path: "https://www.twitter.com/buybetter" }
    
  ];

  return (
    <>
      <div className="bg-black  text-white text-sm py-10 md:px-20 ">
        {/* up */}
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {/* contact */}
          <div className="flex flex-col p-2 text-white ">
            <img src={Brand2} className="w-40 h-20 " />
            {contact.map((item) => (
              <div key={item.name} className="p-2 flex  items-center gap-3">
                {item.icon} {item.name}
              </div>
            ))}
          </div>
          {/* info */}
          <div className="flex gap-4 flex-col  mt-5">
            <div>
              <h1 className="font-medium text-xl">Information</h1>
            </div>
            {information.map((item, index) => (
              <Link to={item.path} key={index} className={` `}>
                {item.name}
              </Link>
            ))}
          </div>
          {/* service */}
          <div className="flex gap-2 flex-col mt-5">
            <div>
              <h1 className="font-medium text-xl">Services</h1>
            </div>
            {service.map((item, index) => (
              <Link
                to={item.path}
                key={index}
                className={` whitespace-nowrap p-1 `}
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* subscribe */}
          <div className="flex flex-col relative gap-4  mt-5 ">
            <div>
              <h1 className="font-medium text-xl">Subscribe</h1>
            </div>
            <div className=" ">
              <span>
                Enter your email below to be the first to know about product
                launches and new collections.
              </span>
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Your Email"
                className="border bg-black mt-4 px-10 py-4 rounded-lg w-full"
              />

              <CiMail className="absolute top-[60%] left-5 text-2xl -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>

        {/* <hr className="text-white" /> */}
        {/* down */}
        <hr className="text-gray-400 mt-5 p-5 " />
        <div className="justify-between flex flex-col xl:flex-row gap-3 items-center">
          {/* icons */}
          <div className="flex gap-3">
            {icon.map((item) => (
              <div className="text-2xl gap-1">{item}</div>
            ))}
          </div>

          {/* text  */}
          <div>
            <span>@2023 Krist. All rights reserved.</span>
          </div>

          {/* logo */}
          <div className="flex gap-3 text-2xl">
            {icon2.map((item, index) => (
              <Link
                to={item.path}
                key={index}
                className={` w `}
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
