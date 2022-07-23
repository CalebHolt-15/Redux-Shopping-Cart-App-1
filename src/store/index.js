import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";

// CDS: CENTRAL DATA STORE
const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        cart: cartSlice.reducer
    }
})

export default store