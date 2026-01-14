
import IM1 from "../../assets/IM1.jpg";

interface DealsProps {
  days: number;
  text: string;
}
console.log(IM1);
const DealsComponent = () => {
  const deals: DealsProps[] = [
    { days: 120, text: "Days" },
    { days: 18, text: "Hours" },
    { days: 15, text: "Mins" },
    { days: 10, text: "Secs" },
  ];

  return (
    <div className="flex items-start justify-center p-7">
      {/* left text div */}
      <div className="px-30 py-20   flex-col w-fit">
        <h1 className=" text-4xl p-3">Deals of the month</h1>
        <span className="text-[15px]  p-5 inline-block ">
          It is a long established fact that a reader will be distracted by the
          readable component of a page when looking at its layout. The point of
          using lorem-ipsum is that it has a more-or-less even distribution of
          letters.
        </span>
        <div className="flex p-3 gap-4">
          {deals.map((item) => (
            <div className="rounded-lg border border-solid px-3 flex flex-col ">
              <h1 className="font-extrabold text-xl "> {item.days} </h1>

              <h1>{item.text}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* right imagediv */}
      <div className="  w-full h-150 ">
        <img src={IM1} className="w-full h-full" />
      </div>
    </div>
  );
};

export default DealsComponent;
