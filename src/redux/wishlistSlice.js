import {createSlice} from "@reduxjs/toolkit"

const wishlistSlice = createSlice({
    name:"wishlist",
    initialState:{
        products:[],
        quantity: 0,
    },
    reducers:{
        addToWishlist:(state, action)=>{
            state.quantity += 1;  // wishlist quantity which is how many different products the user put inside the cart
            state.products.push(action.payload);
            //state.total += action.payload.subTotal;
        }
    }
})

export const {addToWishlist} =wishlistSlice.actions;
export default wishlistSlice.reducer;