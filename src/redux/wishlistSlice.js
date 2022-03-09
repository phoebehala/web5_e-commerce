import {createSlice} from "@reduxjs/toolkit"

const wishlistSlice = createSlice({
    name:"wishlist",
    initialState:{
        products:[],
        quantity: 0,
    },
    reducers:{
        addToWishlist:(state, action)=>{
        
            const existingWishlistItem =  state.products.find( item => item.id === action.payload.id)
    
            // if the item has already in the cart, do nothing
            if (existingWishlistItem ){
                return
            }else{
                state.quantity += 1;  // wishlist quantity 
                state.products.push(action.payload);
            }
        },
        removFromWishlist:(state, action)=>{
            //console.log('action.payload.id',action.payload.id);
            //console.log('state.products',state.products);
            state.quantity -= 1;  // wishlist quantity 
            state.products= state.products.filter(item => item.id !== action.payload.id) 
        }
    }
})

export const {addToWishlist, removFromWishlist} =wishlistSlice.actions;
export default wishlistSlice.reducer;