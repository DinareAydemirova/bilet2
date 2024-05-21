import React from "react";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import style from "./header.module.scss";

const Header = () => {
  return (
    <div className={style.hero}>
      <div className={style.container}>
        <div className={style.navbar}>
          <h1>Pulse.</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="">About us</Link>
            </li>
            <li>
              <Link to="">Restarant</Link>
            </li>
          </ul>
          <div className={style.contact}>
            <p>Reservations </p>
            <div className={style.phone}>
              <FaPhone />
              <p>652-345 3222 11</p>
            </div>
          </div>
        </div>
        <div className={style.mainName}>
          <h1>Special Dish.</h1>
          <p className={style.chef}>By Chef Francis Smith</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
