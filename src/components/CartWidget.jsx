import "../styles.css"

function CartWidget() {
	return (
		<button id="botonAbrirCarrito" class="botonAbrirCarrito">
			<i className="bi bi-cart carrito ms-4"></i>
			<span id="cantidadCarrito" class="cantidadCarrito">0</span>
		</button>
		);
}

export default CartWidget;