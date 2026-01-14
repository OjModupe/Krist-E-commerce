import type { ReactElement } from "react";
import PM from "../../assets/PM.jpg";
import PM2 from "../../assets/PM2.jpeg";
// import { BiStar } from "react-icons/bi";
import { CiStar } from "react-icons/ci";
// import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { PiLineVertical } from "react-icons/pi";
import Button from "../../Shared/Button";

interface ReviewProps {
  firstName: string;
  lastName: string;
  image: string;
  title: string;
  content: string;
  date: string;
  icon: ReactElement[];
}

const ReviewComponent = () => {
  const review: ReviewProps[] = [
    {
      firstName: "Mark",
      lastName: "Williams",
      image: PM,
      title: "Excellent Product, I Love it",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable english. ",
      date: "June 05, 2023",
      icon: [<CiStar />, <CiStar />, <CiStar />, <CiStar />, <CiStar />],
    },

    {
      firstName: "Alexa",
      lastName: "Johnson",
      image: PM2,
      title: "My Daughter is very much happy with these products",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable english.",
      date: "June 05, 2023",
      icon: [<CiStar />, <CiStar />, <CiStar />, <CiStar />, <CiStar />],
    },
  ];
  return (
    <div className="">
      <div>
        <h1 className="text-2xl font-bold pb-8">Customer Reviews</h1>
      </div>

      {review.map((item) => (
        <>
          <div className=" flex gap-4">
            <div>
              <img src={item.image} alt="" className="rounded-full size-10" />
            </div>
            <div>
              <div className="flex gap-2 ">
                <h1>{item.firstName}</h1>
                <h1>{item.lastName}</h1>
              </div>
              <div className="flex">
                {item.icon.map((item: ReactElement) => (
                  <div className="flex text-yellow-300 text-xl">{item}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-1">
            <h1 className=" font-bold pt-2">{item.title} </h1>
            <h1 className="pt-3 pb-4">{item.content}</h1>
          </div>

          <div className="">
            <h1 className="pt-3 pb-3 text-sm text-gray-400">
              Review by {item.firstName} Posted on {item.date}
            </h1>
          </div>

          <hr className="text-gray-300 mb-2" />
        </>
      ))}

      <div className="pt-3">
        <h1 className="font-bold text-xl">Add your review</h1>
      </div>

      <div>
        <h1>Your Rating</h1>
      </div>

      <div className="flex">
        <div className="flex">
          <CiStar /> <PiLineVertical />
        </div>
        <div className="flex">
          <CiStar />
          <CiStar /> <PiLineVertical />
        </div>
        <div className="flex">
          <CiStar />
          <CiStar /> <CiStar />
          <PiLineVertical />
        </div>
        <div className="flex">
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <PiLineVertical />
        </div>

        <div className="flex">
          <CiStar />
          <CiStar /> <CiStar />
          <CiStar />
          <CiStar />
        </div>
      </div>

      <div className="pt-2">
        <div>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="rounded-lg w-full border p-2 bg-white text-black"
          />
        </div>

        <div className="pt-4">
          <label htmlFor="Email">Email Address</label>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="rounded-lg w-full border p-2 bg-white text-black"
          />
        </div>

        <div className="pt-4">
          <label htmlFor="">Your Review</label>
          <textarea
            // type="text"
            placeholder="Enter Your Review"
            className="rounded-lg w-full border  p-2 bg-white text-black"
          />
        </div>
      </div>

      <div className="py-2">
        <Button
      text="Submit"
              color="text-white"
              borderRadius="rounded-lg"
              padding="px-10 py-5"
              bgColor="bg-black"
              width="w-fit"
              size= "text-[10px]"
      />
      </div>
    </div>
  );
};

export default ReviewComponent;
