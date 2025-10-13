import { alertInfo } from "../utils/alerts";

function ItemListContainer({
  // Mensaje que llega por props
  message = "Muy pronto verás aquí nuestra carta encantada.",
}) {
  // Abre un modal informando que la Carta aún no está disponible
  const handleShowComingSoon = () => {
    alertInfo({
      title: "Carta en preparación 🍽️",
      text:
        "Dentro de pronto, aquí verás la carta completa. " +
        "Estamos terminando los conjuros de carga.",
      confirmButtonText: "Entendido",
    });
  };

  return (
    <section
      className="container-narrow"
      style={{ padding: "2rem 0" }}
      aria-label="Sección Carta (placeholder)"
    >
      {/* Texto de estado: proviene del prop `message` */}
      <p style={{ color: "var(--text-muted)", margin: 0 }}>{message}</p>

      <div style={{ marginTop: "1rem" }}>
        <button
          type="button"
          onClick={handleShowComingSoon}
          style={{
            padding: ".6rem 1rem",
            borderRadius: "var(--radius)",
            background: "var(--accent)",
            color: "var(--accent-contrast)",
            border: "1px solid rgba(0,0,0,.05)",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Ver carta (pronto)
        </button>
      </div>
    </section>
  );
}

export default ItemListContainer;
