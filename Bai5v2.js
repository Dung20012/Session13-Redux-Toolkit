// src/features/todos/todoThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const updateTodo = createAsyncThunk('todos/updateTodo', async (todo) => {
  const res = await axios.put(`http://localhost:3000/todos/${todo.id}`, todo);
  return res.data;
});
