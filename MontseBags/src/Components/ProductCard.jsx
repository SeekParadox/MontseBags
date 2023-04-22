import React from "react";
import ProductModel from "./ProductModel";

const ProductCard = (props) => {
  return (
    <div className="ProductCard">
      <img src={props.image} className="card-image" alt="" />

      <span className="product-card-text product-card-description">
        {props.description}
      </span>
      <br />
      <span className="product-card-text product-card-cost">{props.cost}</span>
      <br />
      <ProductModel image={props.image}></ProductModel>
    </div>
  );
};

export default ProductCard;
