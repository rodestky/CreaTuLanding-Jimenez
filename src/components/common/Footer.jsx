import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer({
  // ------------------------------------------------------------
  //  Props con valores por defecto

  brand = "The Wizard’s Table",
  links = [
    { label: "Inicio", href: "/" },
    { label: "Menú", href: "/productos" },
    { label: "Reservas", href: "/reservas" },
    { label: "Contacto", href: "/contacto" },
  ],
  contact = {
    address: "Callejón Mágico 9¾, Hogwarts Town",
    phone: "+56 9 97873223",
    email: "rodstki@gmail.com",
  },
}) {
  // Año actual dinámico (renderizado en la franja inferior)
  const year = new Date().getFullYear();
  return (
    <footer className={`mt-5 pt-4 ${styles.footer}`} aria-label="Pie de página">
      <div className="container">
        <div className="row gy-4 pb-4">
          <div className="col-12 col-md-4">
            <h3 className={styles.brandTitle}>{brand}</h3>
            <p className={styles.brandText}>
              Banquetes encantados y pociones artesanales.
            </p>
          </div>

          <div className="col-6 col-md-4">
            <h6 className={styles.sectionTitle}>Enlaces</h6>
            <ul className={`list-unstyled mb-0 ${styles.linksList}`}>
              {links.map((l) => (
                <li key={l.href}>
                  <NavLink
                    to={l.href}
                    className={({ isActive }) =>
                      `${styles.link} ${isActive ? styles.activeLink : ""}`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-md-4">
            <h6 className={styles.sectionTitle}>Contacto</h6>
            <ul className={`list-unstyled mb-0 ${styles.contactList}`}>
              {contact.address && <li>{contact.address}</li>}
              {contact.phone && <li>Tel: {contact.phone}</li>}
              {contact.email && (
                <li>
                  Email:{" "}
                  <a href={`mailto:${contact.email}`} className={styles.link}>
                    {contact.email}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <small>
            © {year} {brand}. Todos los derechos reservados —{" "}
            <a href={`mailto:${contact.email}`} className={styles.link}>
              {contact.email}
            </a>
            .
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
