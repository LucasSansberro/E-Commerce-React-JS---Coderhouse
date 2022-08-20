import React from "react";
import "../../styles.css";
import ItemCount from "./ItemCount";

const BookCard = (props) => {
  const { nombre, genero, precio, stock, img } = props;

  return (
    <div className="card bookCard text-center">
      <img
        className="card-img-top img-Bookcard"
        src={img}
        alt="Imagen de libro"
      />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{genero}</p>
      </div>
      <p href="" className="btn btn-primary ">
        Precio: ${precio}
      </p>
      <ItemCount stock={stock} />
    </div>
  );
};

export default BookCard;
