import { createSlice } from "@reduxjs/toolkit";

// mutation is possible due to rdux toolkit
const authSlice = createSlice({
    name: "auth",

    //here we initialize the state
    initialState: {isLoggedin:false},

    //here we perform fxns that changes the state
    reducers: {
        login(state){
            state.isLoggedin = true
        },
        logout(state){
            state.isLoggedin = false
        },
    }
})

export const authActions = authSlice.actions

export default authSlice