/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import alertReducer from './features/alertSlice';
import authReducer from './features/auth/authSlice';

export const store = configureStore({
  reducer: {
    alert: alertReducer,
    auth: authReducer,
  },
});
