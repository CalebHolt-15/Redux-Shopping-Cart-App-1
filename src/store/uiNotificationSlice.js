import { createSlice } from "@reduxjs/toolkit";


const uiNotificationSlice = createSlice({
    name:'uiNotification',
    initialState: {notification : null},

    //here we'll do the things
    //"showNotification" is an action
    reducers:{
        showNotification(state, action){
            // initially {null}, but now we'll do sth
            state.notification = {
                message: action.payload.message,//payload comes from user
                type: action.payload.type,
                open: action.payload.open,
            }
        }
    }
})

export const uiNotificationAction = uiNotificationSlice.actions

export default uiNotificationSlice