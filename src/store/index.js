import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

// CDS: CENTRAL DATA STORE
const store = configureStore({
    reducer:{
        auth: authSlice.reducer
    }
})

export default store