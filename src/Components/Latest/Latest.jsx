import React from "react";
import Marquee from "react-fast-marquee";

const Latest = () => {
  return (
    <div className="bg-base-200  p-2 flex justify-center gap-5 items-center rounded-sm">
      <button className="btn btn-secondary ">Latest</button>
      <Marquee pauseOnHover="true" speed={70}>
        <p className="font-semibold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero nostrum
          reprehenderit, mollitia animi dolores saepe.
        </p>
      </Marquee>
    </div>
  );
};

export default Latest;
