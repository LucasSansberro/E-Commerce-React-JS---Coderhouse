import React from "react";
import "../../styles.css";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const BookCard = (props) => {
  const { nombre, genero, precio, stock, img, id } = props;
  const onAdd = () => console.log("¡Agregado al carrito!");

  return (
    <div className="card bookCard text-center mb-5">
      <img
        className="card-img-top img-Bookcard"
        src={img}
        alt="Imagen de libro"
      />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{genero}</p>
      </div>
      <p className="btn btn-primary ">Precio: ${precio}</p>
      <Link to={`/item/${id}`}>
        <p className="btn btn-primary boton-detalles-Item">Ver más</p>
      </Link>
      <ItemCount stock={stock} initial={1} onAdd={onAdd} />
    </div>
  );
};

export default BookCard;
