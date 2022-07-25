import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
///

function App() {

  const cart = useSelector(state => state.cart)
  
  const isLoggedin = useSelector(state => (state.auth.isLoggedin)) 

  useEffect(() => {
    fetch('https://redux-http-c6eb9-default-rtdb.firebaseio.com/cartItem.json',{
      method: 'PUT',
      body: JSON.stringify(cart)
    })
  },[cart])

  return (
    <div className="App">
       {!isLoggedin &&  <Auth />}
       {isLoggedin && <Layout />}
    </div>
  );
}

export default App;
