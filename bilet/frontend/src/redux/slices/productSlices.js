import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    deleteProduct: (state, action) => {
        state.products = state.products.filter(product => product._id !== action.payload);
    },
   
  },
})

export const {deleteProduct } = productSlice.actions

export default productSlice.reducer