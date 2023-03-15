import React from "react";
import ProductModel from "./ProductModel";

const ProductCard = (props) => {
  return (
    <div className="ProductCard">
        {/* <div className="card-image"> */}
          <img src={props.image} className="card-image" alt=""/>
        {/* </div> */}
      <span className="product-card-text product-card-description">
        {props.description}
      </span>
      <br />
      <span className="product-card-text product-card-cost">{props.cost}</span>
      <br />
      <ProductModel></ProductModel>
    </div>
  )
}

export default ProductCard;
