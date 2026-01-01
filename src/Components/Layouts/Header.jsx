import React from "react";
import logo from "../../assets/logo.png";
const Header = () => {
  const date = new Date();
  const currentDate = date.toLocaleDateString("en-US", {
    weekday: "long", // "Sunday"
    year: "numeric", // "2022"
    month: "long", // "November"
    day: "numeric", // "27"
  });

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <img src={logo} alt="logo" />
        <p className="text-accent">Journalism Without Fear or Favour</p>
        <span className="text-primary">{currentDate}</span>
      </div>
    </>
  );
};

export default Header;
