import React from "react";
import logo from "../../assets/logo.png";
import Latest from "../Latest/Latest";
const Header = () => {
  const date = new Date();
  const day = date.toLocaleDateString("en-US", {
    weekday: "long",
  });

  //
  const currentDate = date.toLocaleDateString("en-US", {
    year: "numeric", // "2022"
    month: "long", // "November"
    day: "numeric", // "27"
  });

  return (
    <div className="px-8 pt-10 lg:px-0">
      <div className="flex px-4 pb-6 justify-center items-center flex-col gap-2">
        <img src={logo} alt="logo" />
        <p className="text-accent">Journalism Without Fear or Favour</p>
        <span className="text-accent">
          <span className="text-primary">{day}</span> {currentDate}
        </span>
      </div>
    </div>
  );
};

export default Header;
