import React from "react";
import { useRef } from "react";
import "../Styles/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import line from "../images/Line 17.png";
import starone from "../images/starone.svg";
function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="navbody">
      <header style={{ backgroundColor: "black" }}>
        <div className="uppernavbar">
          <div className="upper-part">
            <p className="shopkart">ShopKart</p>
            <div className="right-section">
              <p className="wishlist">Wishlist (0)</p>
              <p className="bags">Bags (0)</p>
            </div>
          </div>
          <img
            src={line}
            alt="line"
            style={{
              width:"98%",
            }}
          />
        </div>
        <img className="image-3" src={starone} alt="star" />
        <nav ref={navRef}>
          <a href="/#" id="home">
            HOME
          </a>
          <a href="/#" id="about">
            ABOUT
          </a>
          <a href="/#">
            <select
              style={{
                backgroundColor: "black",
                color: "white",
                outline: "none",
                border: "none",
                borderBottom: "1px solid white",
              }}
              name=""
              id=""
            >
              <option value="">OUR PRODUCTS</option>
              <option value="">PRODUCT 1</option>
              <option value="">PRODUCT 2</option>
              <option value="">PRODUCT 3</option>
              <option value="">PRODUCT 4</option>
            </select>
          </a>
          <a href="/#">CONTACT US</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Navbar;


