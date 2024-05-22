import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./basket.module.scss";
import { CiHeart } from "react-icons/ci";
import { ImBin } from "react-icons/im";
import {
  removeFromBasket,
  removeAll,
  incrementCount,
  decrementCount,
} from "../../redux/slices/basketSlices";
import { addToFav, removeFromFav } from "../../redux/slices/favSlice";

const Basket = () => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket);
  const wishlist=useSelector((state)=>state.wishlist.wishlist)

  const calculateTotalPrice = (item) => {
    return item.price * item.count;
  };

  const subTotal=()=>{
    return basket.reduce((acc,item)=>acc+calculateTotalPrice(item),0)
  }


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

  return (
    <>
      <button className={style.deleteall} onClick={() => dispatch(removeAll())}>
        Delete All
      </button>
      <div className={style.container}>
        {basket.map((elem) => (
          <div key={elem._id} className={style.menu}>
            <div className={style.fav}>
              <p>{elem.title}</p>
              <CiHeart
                  style={{ color: isInWishlist(elem._id) ? "red" : "black" }}
                  onClick={() => handleToggleWishlist(elem)}
                />
              <ImBin onClick={() => dispatch(removeFromBasket(elem._id))} />
            </div>

            <div className={style.price}>
              <p className={style.ingredient}>{elem.description}</p>
              <h4>{`$${calculateTotalPrice(elem)}`}</h4>

            </div>
            <div className={style.count}>
              <button onClick={() => dispatch(decrementCount(elem._id))}>
                -
              </button>
              <div>{elem.count}</div>
              <button onClick={() => dispatch(incrementCount(elem._id))}>
                +
              </button>
            </div>
            
          </div>
        ))}
      </div>
      <h2>{`$${subTotal()}`}</h2>

    </>
  );
};

export default Basket;
