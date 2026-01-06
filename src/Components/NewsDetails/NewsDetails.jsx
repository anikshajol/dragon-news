import React from "react";
import Nav from "../Nav/Nav";
import NewsDetailsCard from "./NewsDetailsCard";
import RightAside from "../Layouts/RightAside";
import Header from "../Layouts/Header";

const NewsDetails = () => {
  return (
    <>
      {" "}
      <header className="w-10/12 py-8 mx-auto">
        <Header />
        <section className="pt-7 ">
          <Nav />
        </section>
      </header>
      <main className="grid grid-cols-12 w-10/12 mx-auto">
        <section className="main col-span-9">
          <NewsDetailsCard />
        </section>
        <aside className="right-nav col-span-3">
          <RightAside />
        </aside>
      </main>
    </>
  );
};

export default NewsDetails;
