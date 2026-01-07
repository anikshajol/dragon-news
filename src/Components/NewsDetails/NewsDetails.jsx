import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import NewsDetailsCard from "./NewsDetailsCard";
import RightAside from "../Layouts/RightAside";
import Header from "../Layouts/Header";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const [news, setNews] = useState([]);
  const { id } = useParams();
  const data = useLoaderData();
  // console.log(data, id);

  useEffect(() => {
    const newsDetails = data.find((news) => news.id == id);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNews(newsDetails);
  }, [data, id]);

  return (
    <>
      <header className="w-10/12 py-8 mx-auto">
        <Header />
        <section className="pt-7 ">
          <Nav />
        </section>
      </header>
      <main className="grid grid-cols-12 w-10/12 mx-auto">
        <section className="main col-span-9">
          <h2 className="font-semibold mb-2">Dragon News</h2>
          <NewsDetailsCard news={news} />
        </section>
        <aside className="right-nav col-span-3">
          <RightAside />
        </aside>
      </main>
    </>
  );
};

export default NewsDetails;
