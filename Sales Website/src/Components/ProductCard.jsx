import React from "react";

const ProductCard = (props) => {
  return (
    <div className="ProductCard">
      <div className="card-image">
        <img src={props.image} alt="" srcset="" />
      </div>
      <span className="product-card-text product-card-description">{props.description}</span><br />
      <span className="product-card-text product-card-cost">{props.cost}</span><br />

    </div>
  );
};

export default ProductCard;
