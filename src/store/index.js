import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";
import uiNotificationSlice from "./uiNotificationSlice";

// CDS: CENTRAL DATA STORE
const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
        uiNotification: uiNotificationSlice.reducer
    }
})

export default store