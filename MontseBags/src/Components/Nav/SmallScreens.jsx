import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

function x() {
  const sideBar = document.getElementById("sideBar");
  sideBar.classList.toggle("active");
}

const SmallScreens = (props) => {
  return (
    <div className="SmallScreens header">
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

      <GiHamburgerMenu
        size={32}
        className="hamburger"
        onClick={x}
      ></GiHamburgerMenu>

      <div className="sideBar" id="sideBar">
        <MdClose size={24} className="closeButton" onClick={x}></MdClose>

        <a href="google.com">CART({props.items})</a>

        <a href=""> ACCOUNT</a>

        <a href="">SEARCH</a>
      </div>
    </div>
  );
};

export default SmallScreens;
