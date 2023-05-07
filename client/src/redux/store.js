/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import alertReducer from './features/alertSlice';

export const store = configureStore({
  reducer: {
    alert: alertReducer,
  },
});
