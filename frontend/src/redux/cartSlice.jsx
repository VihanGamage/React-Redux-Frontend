import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        cart: []
    },
    reducers: {
        addToCart: (state,action) => {
            state.cart.push(action.payload)
        },
        removeFromCart: (state,action) => {
            state.cart = state.cart.filter(x=>
                x.productName !== action.payload.productName )
        }

    }
})

export default cartSlice.reducer;
export const {addToCart,removeFromCart} = cartSlice.actions;