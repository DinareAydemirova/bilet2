import { configureStore } from '@reduxjs/toolkit'
import basketReducer from "./slices/basketSlices"
import wishlistReducer from "./slices/favSlice"


export const store = configureStore({
  reducer: {
    basket:basketReducer,
    wishlist:wishlistReducer
  },
})