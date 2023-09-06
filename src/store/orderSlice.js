import { createSlice } from '@reduxjs/toolkit'

export const orderSilce = createSlice({
  name: 'counter',
  initialState: {
    order: null
  },
  reducers: {
    addOrder: (state, action) => {
      const [productsOrder, totalPrice] = action.payload
      const order = {
        id: 1,
        name: 'Camilo Lindarte',
        city: 'Bogota - Colombia',
        phoneNumber: '3107884456',
        idLocation: '+57',
        totalCount: totalPrice,
        productsOrder
      }
      state.order = order;
    },
    deleteOrder: (state) => {
      state.order = {}
    }
  },
})

export const { addOrder, deleteOrder } = orderSilce.actions

export default orderSilce.reducer