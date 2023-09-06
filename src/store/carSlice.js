import { createSlice } from '@reduxjs/toolkit'

export const carSlice = createSlice({
  name: 'counter',
  initialState: {
    products: []
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload)
    },
    deleteProduct: (state, action) => {
      const result = state.products.filter((product) => product.id != action.payload);
      state.products = result;
    }
  },
})

export const { addProduct, deleteProduct } = carSlice.actions

export default carSlice.reducer