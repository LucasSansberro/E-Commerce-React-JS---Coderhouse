import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import libros from "../../libros.json";
import { useParams } from "react-router-dom";

function ItemListContainer({ greetings }) {
  const [items, setItems] = useState(0);
  const { categoryId } = useParams();

  useEffect(() => {
    new Promise((resolve) => {
      let listaLibros = [];
      setTimeout(() => {
        listaLibros = categoryId
          ? libros.filter((e) => e.generourl === categoryId)
          : libros;
        resolve(listaLibros);
      }, 500);
    }).then((data) => {
      setItems(data);
    });
  }, [categoryId]);

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
