import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useContext } from "react";
import { CartCountContext } from "../Contexts/CartCountContext";
import SmallScreens from "./SmallScreens";
import LargeScreens from "./LargeScreens";

const Header = () => {
  const [largeScreen, SetSize] = useState(false);
  const { items } = useContext(CartCountContext);

  window.onload = () => {
    if (window.screen.width > 940 && window.innerWidth > 940) {
      SetSize(true);
    } else {
      SetSize(false);
    }
  };

  window.onresize = () => {
    if (window.screen.width > 940 && window.innerWidth > 940) {
      SetSize(true);
    } else {
      SetSize(false);
    }
  };

  return (
    <div className="Header">
      {largeScreen ? (
        <LargeScreens items={items} />
      ) : (
        <SmallScreens items={items} />
      )}
    </div>
  );
};

export default Header;
