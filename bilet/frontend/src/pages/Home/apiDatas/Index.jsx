import React, { useEffect, useState } from "react";
import style from "./products.module.scss";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/products").then((response) => {
      setData(response.data);
      console.log(data);
    });
  }, []);

  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.line}></div>
        <h1>Our Menu</h1>
        <div className={style.line}></div>
      </div>
      <div>
        <ul>
          <li>Breakfast</li>
          <li>Lunch</li>
          <li>Brunch</li>
          <li>Dinner</li>
        </ul>
      </div>
      <div  className={style.menu}>
        {data?.map((elem) => {
          return (
            <div key={elem.id}>
              <p>{elem.title}</p>

              <div className={style.price}>
                <p className={style.ingredient}>{elem.description}---------------------------------</p>
                <p>{elem.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
