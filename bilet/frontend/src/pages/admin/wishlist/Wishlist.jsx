import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./wishlist.module.scss";
import { CiHeart } from "react-icons/ci";
import { ImBin } from "react-icons/im";
import { addToFav, removeAllFromWishlist, removeFromFav } from "../../../redux/slices/favSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  const handleRemoveFromFav = (id) => {
    dispatch(removeFromFav(id));
  };


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
    <button className={style.deleteall} onClick={()=>dispatch(removeAllFromWishlist())}>Delete all</button>

    <div className={style.container}>
      {wishlist.map((elem) => {
        return (
          
            <div key={elem._id} className={style.menu}>
              <div className={style.fav}>
                <p>{elem.title}</p>
                <CiHeart
                  style={{ color: isInWishlist(elem._id) ? "red" : "black" }}
                  onClick={() => handleToggleWishlist(elem)}
                />
                <ImBin onClick={() => handleRemoveFromFav(elem._id)} />
              </div>

              <div className={style.price}>
                <p className={style.ingredient}>{elem.description}</p>
                <p>${elem.price}</p>
              </div>
            </div>
        
        );
      })}

    </div>

    </>
  );
};

export default Wishlist;
