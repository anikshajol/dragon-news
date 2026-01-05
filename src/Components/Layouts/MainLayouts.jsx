import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Nav from "../Nav/Nav";
import LeftAside from "./LeftAside";
import RightAside from "./RightAside";

const MainLayouts = () => {
  return (
    <>
      <header className="w-10/12 py-8 mx-auto">
        <Header />
        <section className="pt-7 ">
          <Nav />
        </section>
      </header>
      <main className="grid grid-cols-12 w-10/12 mx-auto">
        <aside className="left-nav col-span-3">
          <LeftAside />
        </aside>
        <section className="main col-span-6">
          <Outlet />
        </section>
        <aside className="right-nav col-span-3">
          <RightAside />
        </aside>
      </main>
    </>
  );
};

export default MainLayouts;
