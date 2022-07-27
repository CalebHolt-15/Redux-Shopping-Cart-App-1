import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import uiNotificationSlice from "./store/uiNotificationSlice";
///disable useEffect first render
let isFirstRendered = true

function App() {
  const cart = useSelector(state => state.cart)
  const isLoggedin = useSelector(state => (state.auth.isLoggedin)) 
  const dispatch = useDispatch()
  const notification = useSelector(state => (state.uiNotification.notification))

  console.log("notification:", notification);
  //async: wait till it finished then go to next
  useEffect(() => {
    //disable first render of UseEffect
    if(isFirstRendered){
      isFirstRendered = false
      return
    }

    //Send state as sending request
    dispatch(uiNotificationSlice.actions.showNotification({
      message: "Sending Request to DB",
      type: "warning",
      open: true
    }))

    const sendRequest = async() => {
      const res = await fetch('https://redux-http-c6eb9-default-rtdb.firebaseio.com/cartItem.json',{
        method: 'PUT',
        body: JSON.stringify(cart)
      })
      const data = await res.json()
      //Send state as Request is succesful
      dispatch(uiNotificationSlice.actions.showNotification({
        message:"Request Sent Successfully",
        type:"success",
        open: true
      }))
    }

    sendRequest().catch(err => {
      //Send Error
      dispatch(uiNotificationSlice.actions.showNotification({
        message: "Sending Request failed",
        type: "error",
        open: true
      }))
    } )
  },[cart])

  return (
    <div className="App">
       {notification && <Notification type={notification.type} message={notification.message} />}
       {!isLoggedin &&  <Auth />}
       {isLoggedin && <Layout />}
    </div>
  );
}

export default App;
