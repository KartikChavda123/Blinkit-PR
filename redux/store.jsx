import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoslice";

export const store = configureStore({
    reducer: {
        todoskey: todoReducer, 
    }
})