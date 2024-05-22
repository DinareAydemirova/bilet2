import { createSlice } from "@reduxjs/toolkit";

const initialBasket = JSON.parse(localStorage.getItem("basket")) || [];

const initialState = {
  basket: initialBasket,
  total: initialBasket.reduce((acc, item) => acc + item.count, 0),
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      let elemIndex = state.basket.findIndex(
        (elem) => elem._id === action.payload.id
      );
      if (elemIndex === -1) {
        state.basket = [...state.basket, { ...action.payload, count: 1 }];
      } else {
        state.basket[elemIndex].count++;
      }
      state.total = state.basket.reduce((acc, item) => acc + item.count, 0);
      localStorage.setItem("basket", JSON.stringify([...state.basket]));
    },
    removeFromBasket: (state, action) => {
      state.basket = state.basket.filter((elem) => elem._id !== action.payload);
      state.total = state.basket.reduce((acc, item) => acc + item.count, 0);
      localStorage.setItem("basket", JSON.stringify([...state.basket]));
    },
    removeAll: (state, action) => {
      state.basket = [];
      state.total = 0;
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    incrementCount: (state, action) => {
      const item = state.basket.find((item) => item._id === action.payload);
      if (item) {
        item.count++;
        state.total++;
      }
      localStorage.setItem("basket", JSON.stringify([...state.basket]));
    },
    decrementCount: (state, action) => {
      const item = state.basket.find((item) => item._id === action.payload);
      if (item && item.count > 1) {
        item.count--;
        state.total--;
      }
      localStorage.setItem("basket", JSON.stringify([...state.basket]));
    },
  },
});

export const { incrementCount, decrementCount, removeAll, addBasket, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
