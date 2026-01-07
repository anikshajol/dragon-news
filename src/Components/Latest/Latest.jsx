import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Latest = () => {
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredNews = data.filter(
          (news) => news.others.is_today_pick == true
        );
        setLatestNews(filteredNews);
      });
  }, []);
  return (
    <div className="bg-base-200  p-2 flex justify-center gap-5 items-center rounded-sm">
      <button className="btn btn-secondary ">Latest</button>
      <Marquee pauseOnHover="true" speed={70}>
        {latestNews.map((news) => (
          <h2 className="font-semibold mr-4">{news.title}.</h2>
        ))}
      </Marquee>
    </div>
  );
};

export default Latest;
