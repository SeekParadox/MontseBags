import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { getData } from "../axios.js";

const Home = (props) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);

  const productsTest = [];
  const productsArray = [];

  useEffect(() => {
    getData("http://localhost:5000")
      .then((response) => {
        setProducts(response.data);
      })

      .catch((error) => console.log(error));
  }, []);

  for (var i = 0; i < products.length; i++) {
    const product = (
      <ProductCard
        image={`/images/${products[i].image}`}
        description={products[i].name}
        cost={"$" + products[i].price}
        className="TestProduct"
      ></ProductCard>
    );

    productsTest.push(<div className="card">{product}</div>);
  }

  const display = (type) => {
    if (type === "All Categories") return productsTest;
    const returnArray = [];
    const filter = products.filter((product) => {
      return product.type == type;
    }, 0);

    for (let i = 0; i < filter.length; i++) {
      const product = (
        <ProductCard
          image={`/images/${products[i].image}`}
          description={products[i].name}
          cost={"$" + products[i].price}
          className="TestProduct"
        ></ProductCard>
      );
      returnArray.push(<div className="card">{product}</div>);
    }
    return returnArray;
  };

  return (
    <div className="Home">
      <div className="topSection">
        <img id="topImage" src="/images/bag-perfume.jpg" alt="" />

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
        <button
          className="filterButton"
          onClick={() => setCategory(display("All Categories"))}
        >
          All Categories
        </button>
        <button
          className="filterButton"
          onClick={() => setCategory(display("handbag"))}
        >
          {" "}
          Handbag
        </button>
        <button
          className="filterButton"
          onClick={() => setCategory(display("flagbag"))}
        >
          FlapBag{" "}
        </button>
        <button
          className="filterButton"
          onClick={() => setCategory(display("backpack"))}
        >
          Backpack
        </button>
      </div>
      <div className="products">
        {category == null ? productsTest : category}
      </div>
    </div>
  );
};

export default Home;
