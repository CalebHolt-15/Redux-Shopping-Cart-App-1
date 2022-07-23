import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import cartSlice, { cartActions } from "./../store/cartSlice";
const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const removeItem = () => {
    dispatch(cartSlice.actions.removeFromCart(id));
  };
  const addItem = () => {
    dispatch(
      cartSlice.actions.addToCart({
        id,
        name,
        price,
      })
    );
  };

  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={removeItem}>
        -
      </button>
      <button className="cart-actions" onClick={addItem}>
        +
      </button>
    </div>
  );
};

export default CartItem;
