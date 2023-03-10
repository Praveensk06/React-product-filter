import React from "react";

const Products = ({ items }) => {
  return (
    <div className="section-container">
      {items.map((item) => {
        const { id, img } = item;
        return (
          <section key={id} className="main-section">
            <img src={img} className="photo" />
          </section>
        );
      })}
    </div>
  );
};

export default Products;
