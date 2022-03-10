import {configureStore, combineReducers} from "@reduxjs/toolkit";

// slice
import  cartReducer  from "./cartSlice";
import userSlice from "./userSlice";
import wishlistReducer from "./wishlistSlice"


export const myStore = configureStore({
    reducer: {
        cart:cartReducer,
        wishlist:wishlistReducer,
        user:userSlice
    }
})