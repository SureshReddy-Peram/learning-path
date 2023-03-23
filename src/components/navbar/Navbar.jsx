import React, { useState } from "react";
import {NavLink} from 'react-router-dom';
import { FaGraduationCap, FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./Navbar.scss";


const courses = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Corporate Training",
    to: "/training",
  },
  {
    label: "Blog",
    to: "/blog",
  },

  {
    label: "Login",
    to: "/login",
  },
  {
    label: "Sign Up",
    to: "/signup",
  },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar__container">
          <Link to="/" className="navbar__container__logo">
            <FaGraduationCap size={50} />
          </Link>
          <h1 className="navbar__container__header">Edwisely</h1>
        </div>
        <ul className={`navbar__menu ${toggleIcon ? "active" : ""}`}>
          {courses.map((element, index) => (
            <li key={index} className="navbar__menu__item">
              <Link className="navbar__menu__item__links" to={element.to}>
                {element.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar__menuicon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      
    </>
  );
};

export default Navbar;
