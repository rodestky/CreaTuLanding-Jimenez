import styles from "./Contacto.module.css";
import { alertInfo } from "../../utils/alerts";


function Contacto() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nombre = (data.get("nombre") || "mago/a").toString().trim();

    alertInfo({
      title: "¡Mensaje recibido! 🪄",
      text: `Gracias, ${nombre}. Te responderemos pronto.`,
      confirmButtonText: "Listo",
    });

    e.currentTarget.reset();
  };


  const email = "rodstki@gmail.com";
  const phone = "+56 9 9787 3223";

  return (
    <section id="contacto" className={styles.wrapper} aria-label="Sección de contacto">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-5">
            <h2 className={styles.title}>Contacto</h2>
            <p className={styles.subtitle}>
              ¿Tienes dudas sobre reservas, eventos o la carta?
              Escríbenos y un elfo de cocina te responderá.
            </p>

            <ul className={styles.infoList}>
              <li><strong>Dirección:</strong> Callejón Mágico 9¾, Hogwarts Town</li>
              <li>
                <strong>Teléfono:</strong>{" "}
                <a href={`tel:${phone.replace(/\s+/g, "")}`} className={styles.link}>
                  {phone}
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${encodeURIComponent(email)}`} className={styles.link}>
                  {email}
                </a>
              </li>
            </ul>

            {/* Placeholder de mapa (opcional) */}
            <div className={styles.mapPlaceholder} aria-hidden="true">
              Mapa próximamente
            </div>
          </div>

          {/* Formulario */}
          <div className="col-12 col-lg-7">
            <form className={styles.form} onSubmit={handleSubmit} aria-live="polite">
              <div className={styles.field}>
                <label className={styles.label} htmlFor="nombre">Nombre</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  className={styles.input}
                  placeholder="Hermione Granger"
                  autoComplete="name"
                  required
                  minLength={2}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={styles.input}
                  placeholder="hermione@hogwarts.edu"
                  autoComplete="email"
                  required
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="4"
                  className={styles.textarea}
                  placeholder="Quiero reservar para 4 magos el viernes..."
                  required
                  minLength={10}
                />
              </div>

              <button type="submit" className={styles.submit}>Enviar mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
