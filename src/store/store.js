import { configureStore } from '@reduxjs/toolkit';
import carSlice from './carSlice';
import orderSilce from './orderSlice';

export default configureStore({
  reducer: {
    carProducts: carSlice,
    order: orderSilce
  },
})