import React, { Suspense } from "react";
import Categories from "../Categories/Categories";
import Tags from "../Tags/Tags";

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={
          <span className="loading loading-spinner text-secondary"></span>
        }
      >
        <Categories />
      </Suspense>
      <Tags />
    </div>
  );
};

export default LeftAside;
