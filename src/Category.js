import React from "react";

const Category = ({ filter, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            type="button"
            className="btn-filter"
            onClick={() => filter(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Category;
