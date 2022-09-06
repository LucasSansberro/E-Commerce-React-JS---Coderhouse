import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { items, removeItem, clear } = useContext(CartContext);
  return (
    <>
      {!items.length ? (
        <>
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
        </>
      ) : (
        <>
          <div className="container cuadroScripts">
            <div className="row justify-content-between">
              <div className="col-lg-8 col-xl-8 cuadroCarrito">
                <ul className=" listaCarrito">
                  {items.map((item, index) => (
                    <li
                      className="m-3 d-flex justify-content-between"
                      key={index}
                    >
                      {item.nombre} - {item.quantity} unidades
                      <button onClick={() => removeItem(item.id)}>
                        <i className="bi bi-trash3"></i>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-4 col-xl-4 d-flex flex-column justify-content-around">
                <button className="botonesCarrito" onClick={clear}>
                  Vaciar carrito
                </button>
                <button className="botonesCarrito col-12">
                  <span>
                    Precio final: $
                    {items.reduce(
                      (acc, el) => acc + el.precio * el.quantity,
                      0
                    )}
                  </span>
                </button>
                <button className="botonesCarrito">
                  <span>Confirmar compra</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
