import {configureStore, combineReducers} from "@reduxjs/toolkit";

// slice
import  cartReducer  from "./cartSlice";
import userReducer from "./userSlice";
import wishlistReducer from "./wishlistSlice"
import fetchStatusReducer from "./fetchStatusSlice"

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}
const rootReducer = combineReducers({ 
    user: userReducer, 
    cart: cartReducer, 
    wishlist:wishlistReducer,
    fetchStatus:fetchStatusReducer 
});
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const myStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
})
export let persistor = persistStore(myStore)