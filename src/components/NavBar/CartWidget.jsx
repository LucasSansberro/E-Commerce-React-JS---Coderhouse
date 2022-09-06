import "../../styles.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartWidget() {
  const { items } = useContext(CartContext);
  return (
    <button id="botonAbrirCarrito" className="botonAbrirCarrito">
      <i className="bi bi-cart carrito ms-4"></i>
      <span id="cantidadCarrito" className="cantidadCarrito">
        {items.reduce((acc, el) => acc + el.quantity, 0)}
      </span>
    </button>
  );
}

export default CartWidget;
