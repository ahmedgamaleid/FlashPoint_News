import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import backgroundImagelogo from "../img/Group 47.png";

import backgrounImagelogo from "../img/Group 48.png";

const Navbar = ({ username, handleLogout }) => {
  const [navBackground, setNavBackground] = useState("bg-light");
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token") !== null;

  return (
    <nav className={`navbar navbar-expand-md foont navbar-dark bg-black ${navBackground}`}>
      <div className="container-fluid">
        {/* Left-aligned Hamburger Button on small screens */}
        <div className="d-flex d-md-none">
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Logo */}
        <a className="navbar-brand mx-auto d-md-none" href="#">
          <img src={backgroundImagelogo} style={{ width: "130px" }} alt="Logo" />
        </a>

        <a className="navbar-brand d-none d-md-block ms-auto" href="#">
          <img src={backgroundImagelogo} style={{ width: "130px" }} alt="Logo" />
        </a>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            <li className="nav-item fs-6">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? "active nav-link text-white" : "nav-link text-white"
                }
                style={({ isActive }) =>
                  isActive
                    ? {
                        borderBottom: "2px solid #FFFFFF", // underline color
                        paddingBottom: "2px",
                        display: "inline-block",
                      }
                    : {}
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item fs-6">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "active nav-link text-white" : "nav-link text-white"
                }
                style={({ isActive }) =>
                  isActive
                    ? {
                        borderBottom: "2px solid #FFFFFF", // underline color
                        paddingBottom: "2px",
                        display: "inline-block",
                      }
                    : {}
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item fs-6">
              <NavLink
                to="/NEWS"
                className={({ isActive }) =>
                  isActive ? "active nav-link text-white" : "nav-link text-white"
                }
                style={({ isActive }) =>
                  isActive
                    ? {
                        borderBottom: "2px solid #FFFFFF", // underline color
                        paddingBottom: "2px",
                        display: "inline-block",
                      }
                    : {}
                }
              >
                News
              </NavLink>
            </li>
            <li className="nav-item fs-6">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "active nav-link text-white" : "nav-link text-white"
                }
                style={({ isActive }) =>
                  isActive
                    ? {
                        borderBottom: "2px solid #FFFFFF", // underline color
                        paddingBottom: "2px",
                        display: "inline-block",
                      }
                    : {}
                }
              >
                Contact
              </NavLink>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
