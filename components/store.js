// src/components/store.js

import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';  // Đảm bảo đường dẫn đúng

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
