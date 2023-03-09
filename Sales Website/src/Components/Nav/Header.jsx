import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import logo from "../../assets/images/bags.png";

function x() {
  const sideBar = document.getElementById("sideBar");
  sideBar.classList.toggle("active");
}


const Header = (props) => {
  return (
    <div className="Header">
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
      <img className="logo" src={logo} alt="" />

      <GiHamburgerMenu
        size={32}
        className="hamburger"
        onClick={x}
      ></GiHamburgerMenu>

      <ul className="rightNav">
        <a href="">
          <li>ACCOUNT</li>
        </a>
        <a href="">
          <li>SEARCH</li>
        </a>
        <a href="">
          <li>CART({props.cartItems})</li>
        </a>
        
      </ul>

      <div className="sideBar" id="sideBar">
        <MdClose size={24} className="closeButton" onClick={x}></MdClose>
        
            <a href="google.com">CART({props.cartItems})</a>
          
            <a href=""> ACCOUNT</a>
          
            <a href="">SEARCH</a>
         
      </div>
    </div>
  );
};

export default Header;
