import React from "react";
import { NavLink } from "react-router-dom";
import { FaSignInAlt, FaUserPlus, FaShoppingCart } from "react-icons/fa";
import image from "../assets/discord.png";

const Navbar = () => {
  // const state = useSelector((state) => state.handleCart);
  return (
    <div className="nav_bar">
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <div className="img">
            <a href="https://www.Almabetter.com/" target="_blank">
              <img src={image} alt="Almabetter" />
            </a>
          </div>
          <a className="navbar-brand fw-bold fs-4" href="/">
            LA COLLECTION
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link fw-bold active"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="/products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
            <div className="buttons">
              <a href="/login" className="btn btn-outline-dark">
                <FaSignInAlt className="me-1" /> Login
              </a>
              <a href="/register" className="btn btn-outline-dark ms-2">
                <FaUserPlus className="me-1" /> Register
              </a>
              <a href="/cart" className="btn btn-outline-dark ms-2">
                {/*TODO: Change the cart items count using Redux*/}
                <FaShoppingCart className="me-1" /> Cart ({0})
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
