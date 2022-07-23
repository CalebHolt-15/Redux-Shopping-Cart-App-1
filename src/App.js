import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
///

function App() {
  
  const isLoggedin = useSelector(state => (state.auth.isLoggedin)) 

  console.log(isLoggedin);

  const cartItems = useSelector(state => state.cart.itemsList)
  console.log(cartItems);

  return (
    <div className="App">
       {!isLoggedin &&  <Auth />}
       {isLoggedin && <Layout />}
    </div>
  );
}

export default App;
