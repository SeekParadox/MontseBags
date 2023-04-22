import React from "react";

const LargeScreens = (props) => {
  return (
    <div className="LargeScreens">
      <ul id="leftNav">
        <a href="">
          <li>NEW</li>
        </a>
        <a href="">
          <li>BAGS</li>
        </a>
        <a href="">
          <li>ABOUT</li>
        </a>
      </ul>
      <img className="logo" src="/images/bags.png" alt="" />

      <ul className="rightNav">
        <a href="">
          <li>ACCOUNT</li>
        </a>
        <a href="">
          <li>SEARCH</li>
        </a>
        <a href="">
          <li>CART({props.items})</li>
        </a>
      </ul>
    </div>
  );
};

export default LargeScreens;
