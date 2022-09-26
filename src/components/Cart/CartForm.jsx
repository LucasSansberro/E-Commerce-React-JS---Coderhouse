import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Swal from "sweetalert2";

const CartForm = ({ items }) => {
  const { removeItem, clear } = useContext(CartContext);

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
      clear()
    }
  };

  return (
    <div className="container cuadroScripts">
      <div className="row justify-content-between">
        <div className="col-lg-8 col-xl-8 cuadroCarrito">
          <ul className=" listaCarrito">
            {items.map((item, index) => (
              <li className="m-3 d-flex justify-content-between" key={index}>
                {item.nombre} - {item.quantity} unidad/es
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
          <div className="d-flex justify-content-between col-12 inputCarrito">
            <label>Nombre completo:</label>
            <input
              className="col-7 text-center"
              type="text"
              value={name}
              onChange={nameChangeHandler}
              placeholder="Nombre"
            />
          </div>
          <div className="d-flex justify-content-between inputCarrito">
            <label>Correo electrónico:</label>
            <input
              className="col-7 text-center"
              type="email"
              value={email}
              onChange={emailChangeHandler}
              placeholder="Email"
            />
          </div>
          <div className="d-flex justify-content-between inputCarrito">
            <label>Teléfono:</label>
            <input
              className="col-7 text-center"
              type="number"
              value={cellphone}
              onChange={cellphoneChangeHandler}
              placeholder="Teléfono"
            />
          </div>
          <button className="botonesCarrito" onClick={clear}>
            Vaciar carrito
          </button>
          <button type="button" className="botonesCarrito col-12 removePointerCart">
            <span>Precio final: ${precioFinal}</span>
          </button>
          <button type="submit" className="botonesCarrito">
            <span>Confirmar compra</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default CartForm;
