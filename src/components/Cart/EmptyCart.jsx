import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="container cuadroScripts d-flex flex-column justify-content-between text-center">
      <div>
        <i className="bi bi-cart-x emptyCart"></i>
      </div>
      <div className="mb-3">
        <h3>Carrito vacío</h3>
      </div>
      <div>
        <Link to="/">
          <button className="botonesCarrito p-3">Volver al inicio</button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
