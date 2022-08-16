import "../styles.css";

function CartWidget() {
  return (
    <button id="botonAbrirCarrito" className="botonAbrirCarrito">
      <i className="bi bi-cart carrito ms-4"></i>
      <span id="cantidadCarrito" className="cantidadCarrito">
        0
      </span>
    </button>
  );
}

export default CartWidget;
