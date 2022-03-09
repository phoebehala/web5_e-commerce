import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity: 0,
        total: 0,
    },
    reducers:{
        addProduct:(state, action)=>{
            state.quantity += 1;  // cart quantity which is how many different products the user put inside the cart
            state.products.push(action.payload);
            //state.total += action.payload.subTotal;
            state.total += action.payload.price * action.payload.quantity  // action.payload.quantity >>> product quantity
        }
    }
})

export const {addProduct} =cartSlice.actions;
export default cartSlice.reducer;