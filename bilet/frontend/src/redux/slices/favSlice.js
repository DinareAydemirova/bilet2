import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
  
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToFav: (state, action) => {
      const elemIndex = state.wishlist.findIndex(
        (elem) => elem._id === action.payload.id
      );
      if (elemIndex === -1) {
        state.wishlist = [...state.wishlist, { ...action.payload }];
      } else {
        state.wishlist = state.wishlist.filter(
          (elem) => elem._id !== action.payload.id
        );
      }
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    removeFromFav: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (elem) => elem._id !== action.payload
      );
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    removeAllFromWishlist: (state, action) => {
      state.wishlist = [];
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
  },
});

export const { addToFav, removeFromFav, removeAllFromWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
