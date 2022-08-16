import CartWidget from "./CartWidget";
import "../../styles.css";

function NavBar() {
  const navBarItems = ["Nosotros", "Ofertas", "Contacto"];

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid justify-content-between mt-3">
        <p className="navbar-brand" href="">
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
            {navBarItems.map((item) => (
              <li key={item} className="nav-item">
                <p className="nav-link" href="">
                  {" "}
                  {item}{" "}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
