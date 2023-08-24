import React, { useState } from "react";
import { Link } from "react-router-dom";
import Languagebox from "./languagebox";
import logo from "../assets/images/logopage.png";
import iconvi from "../assets/images/Group 7057.png";
import "./Navbar.css";
function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="nav-links">
          <img src={logo} className="homelogo"/>
        </Link>
        <div className="navbar-container">
          <ul className="tool lu">
            <div className="lang">
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="24" viewBox="0 0 44 24" fill="none">
                <rect x="0.5" y="0.5" width="43" height="23" stroke="#D9D9D9"/>
                <path d="M8.18213 7H9.65213L12.4521 15.302H12.5361L15.3361 7H16.7921L13.4741 16.8H11.5141L8.18213 7Z" fill="#333333"/>
                <path d="M18.1686 7H19.6386V16.8H18.1686V7Z" fill="#333333"/>
                <path d="M30 11L33 14L36 11" stroke="#4F4F4F"/>
              </svg>
            </div>
            <div className="search">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_4_1931)">
                  <path d="M15.4999 14H14.7099L14.4299 13.73C15.6299 12.33 16.2499 10.42 15.9099 8.39002C15.4399 5.61002 13.1199 3.39002 10.3199 3.05002C6.08989 2.53002 2.52989 6.09001 3.04989 10.32C3.38989 13.12 5.60989 15.44 8.38989 15.91C10.4199 16.25 12.3299 15.63 13.7299 14.43L13.9999 14.71V15.5L18.2499 19.75C18.6599 20.16 19.3299 20.16 19.7399 19.75C20.1499 19.34 20.1499 18.67 19.7399 18.26L15.4999 14ZM9.49989 14C7.00989 14 4.99989 11.99 4.99989 9.50002C4.99989 7.01002 7.00989 5.00002 9.49989 5.00002C11.9899 5.00002 13.9999 7.01002 13.9999 9.50002C13.9999 11.99 11.9899 14 9.49989 14Z" fill="#4F4F4F"/>
                </g>
                <defs>
                  <clipPath id="clip0_4_1931">
                    <rect width="24" height="24" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </ul>
          <ul className="tasks lu">
            <li className="nav-item home">
              <Link to="/" className="nav-links">
                Trang chủ
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-links">
                Giới thiệu
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-links">
                Thành viên
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-links">
                Tuyển dụng
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-links">
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
