import React, { useState, useEffect } from "react";
import libros from "../../libros.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [items, setItems] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(libros.find((e) => e.id == id));
      }, 750);
    }).then((data) => {
      setItems(data);
    });
  }, [id]);
  return (
    <div>
      <div className="container-fluid ">
        {Object.getOwnPropertyNames(items).length === 0 ? (
          <div className="d-flex justify-content-center mt-5">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Cargando</span>
            </div>
          </div>
        ) : (
          <ItemDetail item={items} />
        )}
      </div>
    </div>
  );
};

export default ItemDetailContainer;
