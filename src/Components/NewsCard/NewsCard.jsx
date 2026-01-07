import { AiOutlineLike } from "react-icons/ai";
import { FaBookmark, FaShare } from "react-icons/fa";
import { MdOutlineSms } from "react-icons/md";
import { Link } from "react-router";
import NoImage from "../../assets/download.jpeg";
const NewsCard = ({ news }) => {
  //   const date = new Date();
  //   const currentDate = date.toLocaleDateString("en-US", {
  //     year: "numeric", // "2022"
  //     month: "numeric", // "November"
  //     day: "numeric", // "27"
  //   });

  const { id, title, author, thumbnail_url, details } = news;

  return (
    <div className="flex flex-col max-w-lg space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
      {/* profile pic and share  */}
      <div className="flex bg-base-300 p-2 items-center justify-between">
        <div className="flex space-x-4">
          <img
            alt=""
            src={author.img}
            className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-sm font-semibold"
            >
              Leroy Jenkins
            </a>
            <span className="text-xs dark:text-gray-600">
              {new Date(author.published_date).toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className="space-x-2">
          <button
            aria-label="Share this post"
            type="button"
            className="p-2 text-center"
          >
            <FaShare />
          </button>
          <button aria-label="Bookmark this post" type="button" className="p-2">
            <FaBookmark />
          </button>
        </div>
      </div>
      <h2 className="px-3 mb-1 text-xl font-semibold">{title}</h2>

      {/* card body */}
      <div className="px-3">
        <img
          src={thumbnail_url || NoImage}
          onError={(e) => {
            e.target.src = { NoImage };
          }}
          alt={title}
          className="object-cover mt-3 rounded-lg w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
        />

        <div className="text-sm dark:text-gray-600">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}... <br />
              <Link to={`/newsDetails/${id}`} className="text-orange-500">
                Read More
              </Link>
            </>
          ) : (
            { details }
          )}
        </div>
      </div>
      {/* card footer */}
      <div className="flex flex-wrap justify-between">
        <div className="flex space-x-2 text-sm dark:text-gray-600">
          <button type="button" className="flex items-center p-1 space-x-1.5">
            <MdOutlineSms />
            <span>30</span>
          </button>
          <button type="button" className="flex items-center p-1 space-x-1.5">
            <AiOutlineLike />
            <span>283</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
