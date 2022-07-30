import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { fetchData, sendCartData } from "./store/cartActions";
///disable useEffect first render
let isFirstRendered = true

function App() {
  const cart = useSelector(state => state.cart)
  const isLoggedin = useSelector(state => state.auth.isLoggedin) 
  const dispatch = useDispatch()
  const notification = useSelector(state => state.uiNotification.notification)

  useEffect(() => {
    dispatch(fetchData())
  },[dispatch])

  //async: wait till it finished then go to next
  useEffect(() => {
    //disable first render of UseEffect
    if(isFirstRendered){
      isFirstRendered = false
      return
    }

    //thunk fxn in redux
    if(cart.changed){
      dispatch(sendCartData(cart))
    }

  },[cart,dispatch])

  return (
    //order/position matters
    <div className="App">
       {notification && <Notification type={notification.type} message={notification.message} />}
       {!isLoggedin &&  <Auth />}
       {isLoggedin && <Layout />}
    </div>
  );
}

export default App;
