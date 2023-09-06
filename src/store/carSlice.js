import { createSlice } from '@reduxjs/toolkit'

export const carSlice = createSlice({
  name: 'counter',
  initialState: {
    products: []
  },
  reducers: {
    addProduct: (state, action) => {
      console.log(action.payload)
      state.products.push(action.payload)
    },
  },
})

export const { addProduct } = carSlice.actions

export default carSlice.reducer