import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import "../../styles.css";

function NavBar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid justify-content-between mt-3">
        <p className="navbar-brand">
          <i className="bi bi-book mx-3"></i>MyBooks <CartWidget />
        </p>
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
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
