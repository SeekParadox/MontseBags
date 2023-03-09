import React from "react";
import bagPerfume from "../assets/images/bag-perfume.jpg";
import ProductCard from "./ProductCard";
import thisImage from "../assets/images/testImage.jpg";
import testImage2 from "../assets/images/testImage2.jpg";

const Home = () => {
  return (
    <div className="Home">
      <div className="topSection">
        <img id="topImage" src={bagPerfume} alt="" />

        <div className="firstSlide">
          <h1 id="firstSlideh1">Where Luxury Meets Affordability</h1>
          <p id="firstParagraph">
            Enjoy luxury that doesn't break the bank. We work with the most
            trusted dealers to provide luxury products for less than retail
            value.
          </p>
          <a href="" id="shopButton">
            Go to Shop &rarr;
          </a>
          {/* <button id="shopButton"><a href="">Go to Shop &rarr;</a></button> */}
        </div>
      </div>
      <div className="collections">
        <div>
          <span className="featuredProduct">Featured</span> <br />
          <span className="featuredProduct">Products</span>
        </div>
        <button className="filterButton">All Categories</button>
        <button className="filterButton">Handbag</button>
        <button className="filterButton">FlapBag</button>
        <button className="filterButton">Backpack</button>
      </div>
      <div className="products">
        <div className="card">
          <ProductCard
            image={thisImage}
            description="Chanel Classic Handbag"
            cost="$14.99"
            className="TestProduct"
          ></ProductCard>
        </div>
        <div className="card">
          <ProductCard
            image={testImage2}
            description="Chanel Classic Handbag"
            cost="$15.99"
            className="TestProduct"
          ></ProductCard>
        </div>
      </div>
    </div>
  );
};

export default Home;
