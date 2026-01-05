import React from "react";
import { NavLink } from "react-router";
import user from "../../assets/user.png";
const Nav = () => {
  const link = (
    <>
      <li>
        <NavLink
          to={"home"}
          className={({ isActive }) => (isActive ? "text-secondary" : "")}
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"about"}
          className={({ isActive }) => (isActive ? "text-secondary" : "")}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"career"}
          className={({ isActive }) => (isActive ? "text-secondary" : "")}
        >
          Career
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="flex justify-between items-center ">
      <div className="flex gap-5 items-center ml-auto"></div>

      <ul className="flex gap-5 text-accent">{link}</ul>
      <div className="flex gap-5 items-center ml-auto">
        <img src={user} alt="user symbol" className="w-8" />
        <button className="btn btn-primary">Login</button>
      </div>
    </nav>
  );
};

export default Nav;
