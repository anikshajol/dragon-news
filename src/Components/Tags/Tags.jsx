import React from "react";
import one from "../../assets/1.png";
import two from "../../assets/2.png";
import three from "../../assets/3.png";
import { CiCalendar } from "react-icons/ci";

const Tags = () => {
  return (
    <div className="grid grid-cols-1 gap-5 mt-8">
      <section>
        <div className="flex flex-col ">
          <img src={one} alt="" />
          <h2 className="text-xl py-5">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h2>
        </div>
        <div className="flex gap-6 items-center">
          <span>Sports</span>
          <span className="flex items-center gap-2 text-accent">
            <CiCalendar /> Jan 4, 2022
          </span>
        </div>
      </section>
      <section>
        <div className="flex flex-col ">
          <img src={two} alt="" />
          <h2 className="text-xl py-5">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h2>
        </div>
        <div className="flex gap-6 items-center">
          <span>Sports</span>
          <span className="flex items-center gap-2 text-accent">
            <CiCalendar /> Jan 4, 2022
          </span>
        </div>
      </section>
      <section>
        <div className="flex flex-col ">
          <img src={three} alt="" />
          <h2 className="text-xl py-5">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h2>
        </div>
        <div className="flex gap-6 items-center">
          <span>Sports</span>
          <span className="flex items-center gap-2 text-accent">
            <CiCalendar /> Jan 4, 2022
          </span>
        </div>
      </section>
    </div>
  );
};

export default Tags;
