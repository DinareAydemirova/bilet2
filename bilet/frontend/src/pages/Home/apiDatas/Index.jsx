import React, { useEffect, useState } from "react";
import style from "./products.module.scss";
import axios from "axios";
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../../../redux/slices/basketSlices";
import { addToFav, removeFromFav } from "../../../redux/slices/favSlice";

const Products = () => {
  const [data, setData] = useState([]);
  const [sortType, setsortType] = useState("");
  const dispatch=useDispatch()
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  useEffect(() => {
    axios.get("/products").then((response) => {
      setData(response.data);
      console.log(data);
    });
  }, []);

  const isInWishlist = (id) => {
    return wishlist.some((item) => item._id === id);
  };

  const handleToggleWishlist = (item) => {
    if (isInWishlist(item._id)) {
      dispatch(removeFromFav(item._id));
    } else {
      dispatch(addToFav(item));
    }
  };

  if (sortType === "a-z") {
    data.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortType === "z-a") {
    data.sort((a, b) => b.title.localeCompare(a.title));
  } else if (sortType === "high-low") {
    data.sort((a, b) => b.price - a.price);
  }else if(sortType==="low-high"){
    data.sort((a,b)=>a.price- b.price)
  }

  const handleSort = (type) => {
    setsortType(type);
  };

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
      <button className={style.sort} onClick={() => handleSort("a-z")}>
        a-z
      </button>
      <button className={style.sort} onClick={() => handleSort("z-a")}>
        z-a
      </button>
      <button className={style.sort} onClick={() => handleSort("high-low")}>
        high-low
      </button>
      <button className={style.sort} onClick={() => handleSort("low-high")}>
        low-high
      </button>

      <div className={style.menu}>
        {data?.map((elem) => {
          return (
            <div key={elem._id}>
              <p>{elem.title}</p>

              <div className={style.price}>
                <p className={style.ingredient}>
                  {elem.description}---------------------------------
                </p>
                <p>${elem.price}</p>
              </div>
             <div className={style.func}>
             <button className={style.basket}
             onClick={()=>{
              dispatch(addBasket(elem))
             }}
             >add to card</button>
              <CiHeart
                  style={{ color: isInWishlist(elem._id) ? "red" : "black" }}
                  onClick={() => handleToggleWishlist(elem)}
                />
             </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
