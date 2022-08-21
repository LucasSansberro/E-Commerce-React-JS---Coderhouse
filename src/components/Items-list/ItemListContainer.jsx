import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import libros from "../../libros.json";

function ItemListContainer({ greetings }) {
  const [items, setItems] = useState(0);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(libros);
      }, 2000);
    }).then((data) => {
      setItems(data);
    });
  }, []);

  return (
    <>
      <h2 className="text-center mt-4">{greetings}</h2>
      <div className="container-fluid ">
        {items.length ? (
          <ItemList items={items} />
        ) : (
          <div className="d-flex justify-content-center mt-5">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Cargando</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ItemListContainer;
