import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

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

  return <div>{filteredNews.length}</div>;
};

export default CategoryNews;
