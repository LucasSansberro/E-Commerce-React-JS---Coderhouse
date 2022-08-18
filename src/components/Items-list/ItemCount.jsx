import React from "react";
import "../../styles.css";

const ItemCount = ({ count, agregarItem, quitarItem }) => {
  return (
    <div>
      <div className="boton-itemCount">
        <button className="boton-agregar-quitar" onClick={quitarItem}>
          <i class="bi bi-dash-circle"></i>
        </button>
        <h5>{count}</h5>
        <button className="boton-agregar-quitar" onClick={agregarItem}>
          <i class="bi bi-plus-circle"></i>
        </button>
      </div>
      <button className="boton-itemCount boton-agregarCarrito">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
