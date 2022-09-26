import React, { useState } from "react";
import Swal from "sweetalert2";
import "./ItemDetail.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
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
    <div className="row justify-content-around">
      <div className="boton-itemCount col-5 ">
        <button className="boton-agregar-quitar " onClick={quitarItem}>
          <i className="bi bi-dash-circle responsiveSizingItemDetail"></i>
        </button>
        <h5>{count}</h5>
        <button className="boton-agregar-quitar" onClick={agregarItem}>
          <i className="bi bi-plus-circle responsiveSizingItemDetail"></i>
        </button>
      </div>
      <button
        className="boton-itemCount boton-agregarCarrito col-5"
        onClick={() => onAdd(count)}
      >
        <span className="span-boton-agregarCarrito responsiveSizingItemDetail">Agregar al carrito</span>
      </button>
    </div>
  );
};

export default ItemCount;
