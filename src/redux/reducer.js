import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoReducer = createSlice({
  name: "todos",

  initialState,

  reducers: {
    //here we will write our reducer
    //Adding todos
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    removeTodo(state, action) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state.splice(index, 1);
    },
    setTodoStatus(state, action) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].state = action.payload.state;
    },
    setTodoName(state, action) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].title = action.payload.title;
    },
  },
});

export const { addTodos, removeTodo,setTodoStatus,setTodoName } = todoReducer.actions;
export const reducer = todoReducer.reducer;
