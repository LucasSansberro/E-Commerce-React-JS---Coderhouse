import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import "./NavBar.css";

function NavBar() {
  const { items } = useContext(CartContext);
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid justify-content-between mt-3">
        <div className="navbar-brand mb-3">
          <Link className="brand-NavBar" to={"/"}>
            <i className="bi bi-book mx-3"></i>MyBooks{" "}
          </Link>{" "}
          {items.length ? (
            <Link to="/cart">
              <CartWidget />
            </Link>
          ) : (
            "" //Por algún motivo, si no uso ternario aparece un cero en el lugar del carrito cuando este está vacío
          )}
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div>
        <div className="collapse navbar-collapse mx-3 mt-3" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="boton-NavBar" to={"/"}>
                <p className="nav-link boton-NavBar">Inicio</p>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <p
                className="nav-link dropdown-toggle "
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Géneros
              </p>
              <ul className="dropdown-menu lista-generos">
                <li className="item-lista-generos me-5">
                  <Link
                    className="link-item-lista-generos"
                    to="/category/historica"
                  >
                    Histórica
                  </Link>
                </li>
                <li className="item-lista-generos me-5">
                  <Link
                    className="link-item-lista-generos"
                    to="/category/oriental"
                  >
                    Oriental
                  </Link>
                </li>
                <li className="item-lista-generos me-5">
                  <Link
                    className="link-item-lista-generos"
                    to="/category/tragedia"
                  >
                    Tragedia familiar
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
