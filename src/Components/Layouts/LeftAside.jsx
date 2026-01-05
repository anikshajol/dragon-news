import React, { Suspense } from "react";
import Categories from "../Categories/Categories";

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
    </div>
  );
};

export default LeftAside;
