import React from "react";
import bagPerfume from "../assets/images/bag-perfume.jpg";

const Home = () => {
  return (
    <div className="Home">
      <div className="topSection">
      <img id="topImage" src={bagPerfume} alt="" />

        <div className="firstSlide">
          <h1 id="firstSlideh1">Where Luxury Meets Affordability</h1>
          <p id="firstParagraph">Enjoy luxury that doesn't break the bank. We work with the most trusted dealers to provide luxury products for less than retail valuue  </p>
          <a href="" id="shopButton">Go to Shop &rarr;</a>
          {/* <button id="shopButton"><a href="">Go to Shop &rarr;</a></button> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
