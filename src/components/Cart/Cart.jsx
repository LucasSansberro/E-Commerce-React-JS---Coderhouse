import React, { useContext } from "react";
import "./Cart.css";
import CartForm from "./CartForm";
import { CartContext } from "../../context/CartContext";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const { items } = useContext(CartContext);

  return <>{!items.length ? <EmptyCart /> : <CartForm items={items} />}</>;
};

export default Cart;
