import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import db from "../../services";
import { collection, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [items, setItems] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const getColData = async () => {
      const data = collection(db, "libros");
      const col = await getDocs(data);
      const res = col.docs.map(
        (doc) => (doc = { firebaseId: doc.id, ...doc.data() })
      );
      const libro = res.find((e) => e.id == id);
      setItems(libro);
    };
    getColData();
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
