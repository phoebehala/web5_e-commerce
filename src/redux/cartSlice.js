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
            // to check if the item has been already added in the cart
            console.log(state.products);
            const insideItemInCart = state.products.find( item => item.id === action.payload.id)
            console.log('insideItemInCart',insideItemInCart);

            if(insideItemInCart){
                  state.products = state.products.map(item => 
                  item.id === action.payload.id 
                  ?{ ...item, quantity: item.quantity + action.payload.quantity} 
                                    //  ...item >>> copy all properties of item
                                    //   quantity: item.quantity + action.payload.quantity >>> update quantity property by action.payload.quantity(the total amount the user selected)
                  : 
                  item
                 )
              }else{
                  // if this is the first time the item is added
                  state.quantity += 1;  // cart quantity which is how many different products the user put inside the cart
                  state.products.push(action.payload);
              }
              state.total += action.payload.price * action.payload.quantity 

        },

        // to add exisiting cart product by one
        addProductByOne:(state, action)=>{
            state.products = state.products.map(item => 
                item.id === action.payload.id 
                ?{ ...item, quantity: item.quantity + 1} 
                                  //  ...item >>> copy all properties of item
                                  //   quantity: item.quantity + 1 >>> update quantity property by one
                : 
                item
               )
            state.total += action.payload.price
        },

        // to remove exisiting cart product by one
        removeProductByOne:(state, action)=>{

            const insideItemInCart = state.products.find( item => item.id === action.payload.id)

            // if the current quantity is one, remove this product from cart
            if(action.payload.quantity===1){
                state.quantity -= 1;  // cart quantity 
                state.products= state.products.filter(item => item.id !== action.payload.id) 
            }else{   // else decresed by one
                state.products = state.products.map(item => 
                    item.id === action.payload.id 
                    ?{ ...item, quantity: item.quantity - 1} 
                                      //  ...item >>> copy all properties of item
                                      //   quantity: item.quantity + 1 >>> update quantity property by one
                    : 
                    item
                   )
            }
            state.total -= action.payload.price

        }

    }
})

export const {addProduct,  addProductByOne, removeProductByOne} =cartSlice.actions;
export default cartSlice.reducer;