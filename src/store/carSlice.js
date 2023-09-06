import { createSlice } from '@reduxjs/toolkit'

export const carSlice = createSlice({
  name: 'counter',
  initialState: {
    products: []
  },
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload
      if (state.products.length === 0) {
        state.products.push({ ...product, count: 1 })
      } else {
        const { id } = product;
        const indexProduct = state.products.findIndex((product) => product.id === id);
        if (indexProduct >= 0) {
          const productExist = state.products.find((product) => product.id === id);
          const count = productExist.count += 1;
          const value = productExist.productValue * count
          state.products[indexProduct] = { ...productExist, count, productValue: value }
        } else {
          state.products.push({ ...product, count: 1 })
        }
      }
    },
    deleteProduct: (state, action) => {
      const result = state.products.filter((product) => product.id !== action.payload);
      state.products = result;
    },

    cleanProduct: (state, action) => {
      state.products = [];
    }
  },
})

export const { addProduct, deleteProduct, cleanProduct } = carSlice.actions

export default carSlice.reducer