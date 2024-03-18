import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlice.jsx";
import counterSlice from "./counterSlice.jsx";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        counter:counterSlice
    }
})