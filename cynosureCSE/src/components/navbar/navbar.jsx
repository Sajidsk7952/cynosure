import React, { useState } from "react";
import menu from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import down from "../../assets/down.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  const [click, setClick] = useState(false);
  console.log(click);
  return (
    <>
      <div className="main">
        <div className="Nav-bar">
          <div className="left">
            <div className="Image">
              <img src={logo} alt="logo" className="logo"></img>
            </div>
            <div className="College">
              <p className="college_text">Sri Venkateswara University</p>
              <p className="college_text">College of Engineering</p>
            </div>
            <div className="icon">
              {click ? (
                <img
                  src={down}
                  alt="logo"
                  onClick={() => setClick(!click)}
                  className="sv_icon"
                ></img>
              ) : (
                <img
                  src={menu}
                  alt="logo"
                  onClick={() => setClick(!click)}
                  className="sv_icon"
                ></img>
              )}
            </div>
          </div>
          <div className="right">
            <div className="Links">
              <ul className="links_container">
                <li>
                  <Link
                    to="/"
                    className="navi_links"
                    onClick={() => setClick(!click)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/events"
                    className="navi_links"
                    onClick={() => setClick(!click)}
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <button onClick={() => setClick(!click)} className="nav_but">
                    Register Now
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className={click ? "show-links" : "hide-links"}>
            <ul>
              <li>
                <Link
                  to="/"
                  className="navi_links"
                  onClick={() => setClick(!click)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="navi_links"
                  onClick={() => setClick(!click)}
                >
                  Events
                </Link>
              </li>
              <li>
                <button onClick={() => setClick(!click)} className="nav_but">
                  Register Now
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
