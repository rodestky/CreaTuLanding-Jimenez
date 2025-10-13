import styles from "./Reservas.module.css";
import { alertInfo } from "../../utils/alerts";


function Reservas() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    // Normalizacion
    const nombre = (data.get("nombre") || "mago/a").toString().trim();
    const fecha = data.get("fecha");
    const hora = data.get("hora");
    const personas = data.get("personas");

    alertInfo({
      title: "¡Reserva recibida! ✨",
      text: `Gracias, ${nombre}. Te esperamos el ${fecha} a las ${hora} para ${personas} persona(s).`,
      confirmButtonText: "Listo",
    });

    e.currentTarget.reset();
  };

  return (
    <section id="reservas" className={styles.wrapper} aria-label="Sección de reservas">
      <div className="container">
        <div className="row g-4">
          {/* Intro / info lateral */}
          <div className="col-12 col-lg-5">
            <h2 className={styles.title}>Reservas</h2>
            <p className={styles.subtitle}>
              Elige fecha y hora. Un elfo de cocina confirmará tu mesa por correo.
            </p>
            <ul className={styles.infoList}>
              <li><strong>Horario:</strong> Lun-Dom, 12:00 a 23:00</li>
              <li><strong>Ubicación:</strong> Callejón Mágico 9¾, Hogwarts Town</li>
              <li><strong>Teléfono:</strong> <a className={styles.link} href="tel:+56997873223">+56 9 9787 3223</a></li>
            </ul>

            <div className={styles.noteBox} role="note">
              <strong>Nota:</strong> si vienes con capas invisibles,
              por favor avísanos para preparar asientos especiales.
            </div>
          </div>

          {/* Formulario */}
          <div className="col-12 col-lg-7">
            <form className={styles.form} onSubmit={handleSubmit} aria-live="polite">
              <div className={styles.field}>
                <label htmlFor="nombre" className={styles.label}>Nombre</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  className={styles.input}
                  placeholder="Harry Potter"
                  autoComplete="name"
                  required
                  minLength={2}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={styles.input}
                  placeholder="harry@hogwarts.edu"
                  autoComplete="email"
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="telefono" className={styles.label}>Teléfono</label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  inputMode="tel"
                  className={styles.input}
                  placeholder="+56 9 1234 5678"
                  autoComplete="tel"
                />
              </div>

              <div className={styles.rowInline}>
                <div className={styles.field}>
                  <label htmlFor="fecha" className={styles.label}>Fecha</label>
                  <input
                    id="fecha"
                    name="fecha"
                    type="date"
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="hora" className={styles.label}>Hora</label>
                  <input
                    id="hora"
                    name="hora"
                    type="time"
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="personas" className={styles.label}>Personas</label>
                  <input
                    id="personas"
                    name="personas"
                    type="number"
                    min={1}
                    max={12}
                    step={1}
                    defaultValue={2}
                    className={styles.input}
                    required
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="comentario" className={styles.label}>Comentario</label>
                <textarea
                  id="comentario"
                  name="comentario"
                  rows={4}
                  className={styles.textarea}
                  placeholder="Ej: una mesa tranquila cerca de la ventana..."
                />
              </div>

              <button type="submit" className={styles.submit}>Confirmar reserva</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reservas;
