import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase.init";

const Register = () => {
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState("");

  const handleCreateUser = (e) => {
    e.preventDefault();

    const userName = e.target.name.value;
    if (userName.length < 5) {
      setNameError("Name Should be at least 5 character");
      return;
    } else {
      setNameError("");
    }
    const url = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    // console.log(email, password);

    if (!terms) {
      alert("Please Accept terms and condition");
    }
    setLoading(true);
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        const profile = {
          displayName: userName,
          photoURL: url,
        };
        updateProfile(auth.currentUser, profile)
          .then(() => {
            console.log("Profile Updated");
          })
          .catch((err) => console.log(err));
        setLoading(false);

        // logOut();
        // navigate("/auth/login");
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="hero bg-base-200 mt-4 min-h-[calc(100vh-100px)] ">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl pb-14">
        <h2 className="text-center pt-8 font-semibold text-xl">
          Create your account
        </h2>
        <div className="card-body ">
          <form onSubmit={handleCreateUser} className="fieldset px-10">
            {/* name */}
            <label className="label">Your Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Enter Your Name"
              onChange={(e) => {
                const name = e.target.value;
                if (name.length > 5) {
                  setNameError("");
                }
              }}
            />
            {nameError && <p className="text-red-400">{nameError}</p>}
            {/* photo url */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photoUrl"
              className="input w-full"
              placeholder="Enter Your Name"
            />
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Email"
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input w-full"
              placeholder="Password"
            />

            <div>
              <label className="label">
                <input type="checkbox" name="terms" className="checkbox" />
                <Link> Accept terms and condition</Link>
              </label>
            </div>
            <button className="btn btn-neutral mt-4 w-full">
              {loading ? (
                <span className="loading loading-spinner loading-xs"></span>
              ) : (
                "Register"
              )}
            </button>
          </form>
          <p className="px-6 text-sm text-center dark:text-gray-600">
            Already have an account?
            <Link
              to="/auth/login"
              className="hover:underline text-secondary dark:text-default-600"
            >
              Login
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
