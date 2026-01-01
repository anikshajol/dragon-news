import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";

const MainLayouts = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section className="left-nav"></section>
        <section className="main">
          <Outlet />
        </section>
        <section className="right-nav"></section>
      </main>
    </>
  );
};

export default MainLayouts;
