import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
        <h2 className="mb-3 text-2xl font-semibold">Login With</h2>

        <div className="my-6 space-y-4">
          <button
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-2 space-x-2 border rounded-md focus:ring-2 text-blue-400 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
          >
            <FcGoogle />

            <p>Login with Google</p>
          </button>
          <button
            aria-label="Login with GitHub"
            role="button"
            className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
          >
            <FaGithub />
            <p>Login with GitHub</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
