import styles from "./Footer.module.css";

function Footer({
  brand = "The Wizard’s Table",
  links = [
    { label: "Inicio", href: "/" },
    { label: "Menú", href: "#menu" },
    { label: "Reservas", href: "#reservas" },
    { label: "Contacto", href: "#contacto" },
  ],
  contact = {
    address: "Callejón Mágico 9¾, Hogwarts Town",
    phone: "+56 9 97873223",
    email: "rodstki@gmail.com",
  },
}) {
  // new Date().getFullYear() obtiene el año del sistema en tiempo de ejecución.
  const year = new Date().getFullYear();

  return (
    <footer className={`mt-5 pt-4 ${styles.footer}`} aria-label="Pie de página">
      <div className="container">
        {/* Fila superior: Marca + enlaces + contacto */}
        <div className="row gy-4 pb-4">
          {/* Marca / descripción */}
          <div className="col-12 col-md-4">
            <h3 className={styles.brandTitle}>{brand}</h3>
            <p className={styles.brandText}>
              Banquetes encantados y pociones artesanales.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="col-6 col-md-4">
            <h6 className={styles.sectionTitle}>Enlaces</h6>
            <ul className={`list-unstyled mb-0 ${styles.linksList}`}>
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={styles.link}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
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

        {/* Franja inferior */}
        <div className={styles.bottomBar}>
          <small>
            © {year} {brand}. Todos los derechos reservados rodstki@gmail.com.
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
