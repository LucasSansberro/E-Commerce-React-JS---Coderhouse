import React, { useState } from "react";
import Swal from "sweetalert2";
import "../../styles.css";

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1);
  const agregarItem = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      Swal.fire({
        title: "¡Lo sentimos!",
        text: "No tenemos más stock de ese libro",
        icon: "warning",
        confirmButtonText: "Continuar",
        allowOutsideClick: false,
        showCloseButton: true,
      });
    }
  };
  const quitarItem = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <div className="boton-itemCount">
        <button className="boton-agregar-quitar" onClick={quitarItem}>
          <i className="bi bi-dash-circle"></i>
        </button>
        <h5>{count}</h5>
        <button className="boton-agregar-quitar" onClick={agregarItem}>
          <i className="bi bi-plus-circle"></i>
        </button>
      </div>
      <button className="boton-itemCount boton-agregarCarrito">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
