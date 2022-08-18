import React, { useState } from "react";
import Swal from "sweetalert2";
import "../../styles.css";
import ItemCount from "./ItemCount";

const BookCard = (props) => {
  const { nombre, genero, precio, stock, img } = props;
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
        allowOutsideClick:false,
        showCloseButton: true
      });
    }
  };
  const quitarItem = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

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
      <ItemCount
        count={count}
        agregarItem={agregarItem}
        quitarItem={quitarItem}
      />
    </div>
  );
};

export default BookCard;
