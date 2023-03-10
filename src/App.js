import React, { useState } from "react";
import "./index.css";
import "./normalize.css";
import data from "./data";
import Products from "./Products";
import Category from "./Category";
import Search from "./Search";

const App = () => {
  const [items, setItems] = useState(data);

  // search handler
  const SearchHandler = (e) => {
    const search = e.target.value.toUpperCase();
    const filter = data.filter((item) =>
      item.category.toUpperCase().includes(search)
    );

    setItems(filter);
  };

  // validation for buttons
  const filterProducts = (category) => {
    if (category === "All") {
      setItems(data);
    } else {
      const updatedProducts = data.filter(
        (products) => products.category === category
      );
      setItems(updatedProducts);
    }
  };

  // categories
  let categories = [
    "All",
    ...new Set(
      data.map((products) => {
        return products.category;
      })
    ),
  ];

  return (
    <div className="main=container">
      <div>
        <h1 className="title">filter-app</h1>
      </div>
      <div className="categories">
        <Category
          items={items}
          filter={filterProducts}
          categories={categories}
        />
        <Search search={SearchHandler} />
      </div>

      <section>
        <Products items={items} />
      </section>
    </div>
  );
};

export default App;
