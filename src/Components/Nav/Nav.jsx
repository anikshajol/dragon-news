import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../../assets/user.png";
import { AuthContext } from "../../Context/AuthContext";
const Nav = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  console.log(user);

  const link = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "text-secondary" : "")}
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? "text-secondary" : "")}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/career"}
          className={({ isActive }) => (isActive ? "text-secondary" : "")}
        >
          Career
        </NavLink>
      </li>
    </>
  );
  const handleSignOut = () => {
    logOut()
      .then((res) => {
        console.log(res.user);
        alert("Logout Successfully");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <nav className="flex justify-between items-center ">
        <div className="flex gap-5 items-center ml-auto"></div>
        <ul className="flex gap-5 text-accent">{link}</ul>
        <div className="flex gap-5 items-center ml-auto">
          <h3>{user?.displayName}</h3>
          <img
            src={user ? user.photoURL : userImg}
            alt="user symbol"
            className="w-8 rounded-full"
          />
          {!user ? (
            <Link to="auth/login" className="btn btn-primary">
              Login
            </Link>
          ) : (
            <button className="btn btn-secondary" onClick={handleSignOut}>
              Logout
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
