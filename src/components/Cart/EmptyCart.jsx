import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="container cuadroScripts w-25 d-flex justify-content-between">
      <div className="row">
        <h3 className="col-12">Carrito vacío</h3>
      </div>
      <div className="row">
        <Link className="col-12" to="/">
          <button className="botonesCarrito">Volver al inicio</button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
