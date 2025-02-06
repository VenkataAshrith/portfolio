import React from "react";
import "./NavBar.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import { useTheme } from "../../common/ThemeContext";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const Themeicon = theme === "light" ? sun : moon;
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a className="navbar-link" href="#hero">Home</a>
        </li>
        <li className="navbar-item">
          <a className="navbar-link" href="#skills">Skills</a>
        </li>
        <li className="navbar-item">
          <a className="navbar-link" href="#projects">Projects</a>
        </li>
        <li className="navbar-item">
          <a className="navbar-link" href="#aboutme">About Me</a>
        </li>
        <li className="navbar-item">
          <a className="navbar-link" href="#contact">Contact</a>
        </li>
        <li className="navbar-item">
          <img
            className="colorMode"
            src={Themeicon}
            alt="Color mode Icon"
            onClick={toggleTheme}
          ></img>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
