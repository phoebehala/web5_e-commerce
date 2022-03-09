import {configureStore, combineReducers} from "@reduxjs/toolkit";
import  cartReducer  from "./cartSlice";
import wishlistReducer from "./wishlistSlice"


export const myStore = configureStore({
    reducer: {
        cart:cartReducer,
        wishlist:wishlistReducer
    }
})