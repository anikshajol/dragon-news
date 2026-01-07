import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  // console.log(user);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setLoading(true);
    loginUser(email, password)
      .then((res) => {
        // console.log(res.user);
        alert(`${res.user.displayName} Login Successfully`);
        setLoading(false);
        navigate(location?.state || "/");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="hero bg-base-200 min-h-[calc(100vh-40px-40px)] ">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl pb-24">
        <h2 className="text-center py-10 font-semibold text-xl">
          Login your account
        </h2>
        <div className="card-body ">
          <form onSubmit={handleLogin} className="fieldset px-10">
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
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4 w-full">
              {loading ? (
                <span className="loading loading-spinner loading-xs"></span>
              ) : (
                "Login"
              )}
            </button>
          </form>
          <p className="px-6 text-sm text-center dark:text-gray-600">
            Don't have an account yet?
            <Link
              to="/auth/register"
              className="hover:underline text-secondary dark:text-default-600"
            >
              Sign up
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
