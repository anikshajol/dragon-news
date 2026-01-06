import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="px-10 pt-10">
        <img src={news?.image_url} alt={news?.title} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="font-semibold text-2xl text-justify">{news?.title}</h2>
        <p className="text-justify">{news?.details}</p>
        <div className="card-actions">
          <Link
            to={`/category/${news.category_id}`}
            className="btn btn-secondary"
          >
            All news in this Category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
