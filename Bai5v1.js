// src/features/todos/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { updateTodo } from './todoThunks';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateTodo.fulfilled, (state, action) => {
        const index = state.findIndex(todo => todo.id === action.payload.id);
        if (index !== -1) {
          state[index] = action.payload;
        }
      });
  },
});

export default todoSlice.reducer;
