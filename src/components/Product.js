import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cartSlice from "../store/cartSlice";

import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {
  

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(cartSlice.actions.addToCart({
      //payload:
      name,
      id,
      price,

    }))
  }
  
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>${price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
