import styles from "./NavBar.module.css";
import CartWidget from "./CartWidget";
import { alertInfo } from "../../utils/alerts";
import logo from "../../assets/logo/logo.png";


function NavBar() {
  const handleOpenCart = () =>
    alertInfo({
      title: "Tus reservas 🪄",
      text: "Aún no has agregado ninguna.",
      confirmButtonText: "Ok",
    });

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${styles.navbar}`}
      data-bs-theme="dark"
      aria-label="Barra de navegación"
    >
      <div className="container">
        {/* Marca */}
        <a className={`navbar-brand ${styles.brand}`} href="/">
          <img
            src={logo}
            alt="The Wizard’s Table"
            className={styles.logo}
            width={28}
            height={28}
          />
          The Wizard’s Table
        </a>

        {/* Toggler móvil */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Abrir menú"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Links + acciones */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link ${styles.link}`} href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.link}`} href="#menu">Menú</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.link}`} href="#reservas">Reservas</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.link}`} href="#contacto">Contacto</a>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-2">
            <CartWidget count={0} onClick={handleOpenCart} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
