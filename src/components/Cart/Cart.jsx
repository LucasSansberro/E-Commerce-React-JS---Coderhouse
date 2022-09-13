import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Swal from "sweetalert2";

const Cart = () => {
  const { items, removeItem, clear } = useContext(CartContext);
  const [precioFinal, setPrecioFinal] = useState(0);
  useEffect(() => {
    setPrecioFinal(items.reduce((acc, el) => acc + el.precio * el.quantity, 0));
  }, [items]);

  const [name, setName] = useState("");
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const [email, setEmail] = useState("");
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const [cellphone, setCellphone] = useState("");
  const cellphoneChangeHandler = (event) => {
    setCellphone(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (name === "" || email === "" || cellphone === "") {
      Swal.fire({
        title: "Error",
        text: "Por favor, rellene todos los campos",
        icon: "warning",
        confirmButtonText: "Continuar",
        allowOutsideClick: false,
        showCloseButton: true,
      });
    } else {
      Swal.fire({
        title: "Cargando...",
        html: "<b>Por favor, espere...</b>",
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      const order = {
        buyer: {
          name: name,
          email: email,
          cellphone: cellphone,
        },
        items: {
          item: items.map(
            (e) =>
              `Nombre: ${e.nombre} / Precio: $${e.precio} / ID: ${e.id} / Cantidad: ${e.quantity}`
          ),
          "Final price": `$${precioFinal}`,
        },
      };
      const db = getFirestore();
      const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order).then(({ id }) => {
        Swal.close();
        Swal.fire({
          title: "Su orden ha sido realizada",
          text: `Su número de pedido es ${id}`,
          icon: "success",
          confirmButtonText: "Continuar",
          allowOutsideClick: false,
          showCloseButton: true,
        });
      });
      setName("");
      setEmail("");
      setCellphone("");
    }
  };

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
              <form
                onSubmit={submitHandler}
                className="col-lg-4 col-xl-4 d-flex flex-column justify-content-around"
              >
                <div className="col-12">
                  <label>Nombre completo</label>
                  <input
                    type="text"
                    value={name}
                    onChange={nameChangeHandler}
                  />
                </div>
                <div className="col-12">
                  <label>Correo electrónico</label>
                  <input
                    type="text"
                    value={email}
                    onChange={emailChangeHandler}
                  />
                </div>
                <div className="col-12">
                  <label>Teléfono</label>
                  <input
                    type="text"
                    value={cellphone}
                    onChange={cellphoneChangeHandler}
                  />
                </div>
                <button className="botonesCarrito" onClick={clear}>
                  Vaciar carrito
                </button>
                <button className="botonesCarrito col-12">
                  <span>Precio final: ${precioFinal}</span>
                </button>
                <button type="submit" className="botonesCarrito">
                  <span>Confirmar compra</span>
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
