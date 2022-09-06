import React, { useState, createContext } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      let aux = items;
      let itemIndex = aux.findIndex((e) => e.id === item.id);
      let test = aux[itemIndex].quantity + quantity;
      if (test <= aux[itemIndex].stock) {
        aux[itemIndex].quantity += quantity;
      } else {
        Swal.fire({
          title: "¡Lo sentimos!",
          text: "Su carrito posee el máximo stock de este libro",
          icon: "warning",
          confirmButtonText: "Continuar",
          allowOutsideClick: false,
          showCloseButton: true,
        });
      }
      setItems([...aux]);
    } else {
      setItems([...items, { ...item, quantity }]);
    }
  };
  const removeItem = (itemId) => {
    setItems(items.filter((e) => e.id !== itemId));
  };
  const clear = () => setItems([]);
  const isInCart = (itemId) => {
    return items.find((e) => e.id === itemId);
  };

  return (
    <CartContext.Provider value={{ addItem, removeItem, clear, items }}>
      {children}
    </CartContext.Provider>
  );
};
