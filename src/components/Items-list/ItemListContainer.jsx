import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import db from "../../services";
import { collection, getDocs } from "firebase/firestore";

function ItemListContainer({ greetings }) {
  const [items, setItems] = useState(0);
  const { categoryId } = useParams();

  useEffect(() => {
    const getColData = async () => {
      const data = collection(db, "libros");
      const col = await getDocs(data);
      const res = col.docs.map(
        (doc) => (doc = { firebaseId: doc.id, ...doc.data() })
      );
      let listaLibros = [];
      listaLibros = categoryId
        ? res.filter((e) => e.generourl === categoryId)
        : res;
      setItems(listaLibros);
    };
    getColData();
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
