import React, { useState } from "react";
import "../../styles.css";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = (props) => {
  const [finCompra, setFinCompra] = useState(false);
  const onAdd = () => setFinCompra(true);

  return (
    <div className="my-5">
      <div className="container p-3 bg-info bg-opacity-10 border border-info rounded">
        <h3 className="text-center mt-3">{props.item.nombre}</h3>
        <div className="row justify-content-around mt-4 mb-3">
          <img className="col-6 img-ItemDetail" src={props.item.img} alt="" />
          <p className="col-6 sinopsis-ItemDetail">{props.item.sinopsis}</p>
        </div>
        <div className="row justify-content-around mt-4 mb-3">
          <p className="col-3 btn btn-primary boton-ItemDetail">
            Precio: ${props.item.precio}
          </p>
          <p className="col-3 btn btn-primary boton-ItemDetail">
            Stock: {props.item.stock}
          </p>
        </div>
        <div>
          {finCompra ? (
            <Link className="boton-NavBar" to={`/cart`}>
            <button
              className="boton-itemCount boton-agregarCarrito col-6 mx-auto "
            >
              <span className="span-boton-agregarCarrito ">
                Terminar compra
              </span>
            </button>
            </Link>
          ) : (
            <ItemCount stock={props.item.stock} initial={1} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
