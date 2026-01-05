import { useEffect, useState } from "react";
import { NavLink } from "react-router";

// const fetchPromise = fetch("categories.json").then((res) => res.json());
const Categories = () => {
  // const categories = use(fetchPromise);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    try {
      fetch("/categories.json")
        .then((res) => res.json())
        .then((data) => setCategories(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h2 className="font-bold text-center">
        All Categories {categories.length}
      </h2>
      <section>
        <ul className="grid grid-cols-1 gap-3">
          {categories.map((category) => (
            <NavLink
              className="btn  bg-white font-semibold text-[#9F9F9F] border-0 mt-5 hover:bg-base-200"
              key={category.id}
              to={`/category/${category.id}`}
            >
              {category.name}
            </NavLink>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Categories;
