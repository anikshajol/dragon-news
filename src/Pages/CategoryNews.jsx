import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard/NewsCard";

const CategoryNews = () => {
  const [filteredNews, setFilteredNews] = useState([]);
  const { id } = useParams();
  console.log(id);
  const data = useLoaderData();
  console.log(data);
  useEffect(() => {
    if (id == "0") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFilteredNews(data);
      return;
    } else if (id == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setFilteredNews(filteredNews);
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
      setFilteredNews(filteredNews);
    }
  }, [data, id]);
  console.log(filteredNews);

  return (
    <div>
      <h2 className="font-semibold">Total {filteredNews.length} news found</h2>
      <section className="grid grid-cols-1 gap-5 mt-5 px-4">
        {filteredNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </section>
    </div>
  );
};

export default CategoryNews;
