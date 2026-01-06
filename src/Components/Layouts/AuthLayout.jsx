import React from "react";
import Nav from "../Nav/Nav";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 p-4 min-h-screen">
      <header className="w-11/12 mx-auto">
        <Nav />
      </header>
      <main className="w-11/12 mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
