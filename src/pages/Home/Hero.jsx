

import { useNavigate } from "react-router-dom";
import styles from "./Hero.module.css";

function Hero({
  title = "The Wizard’s Table",
  subtitle = "Donde la magia de Hogwarts se encuentra con la alta cocina.",
  imageUrl = "/img/hero.jpg",
}) {
  //  Hook para navegar entre rutas sin recargar la página
  const navigate = useNavigate();

  // 🔹 Redirige al catálogo de productos
  const handleVerMenu = () => {
    navigate("/productos");
  };

  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${imageUrl})` }}
      aria-label="Portada The Wizard’s Table"
    >
      {/* Capa oscura sobre la imagen para mejorar contraste */}
      <div className={styles.overlay} />

      {/* Contenido principal */}
      <div className={styles.inner}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>

      
        <button
          type="button"
          className={styles.btn}
          onClick={handleVerMenu}
          aria-label="Ver menú completo"
        >
          🪄 Ver menú
        </button>
      </div>
    </section>
  );
}

export default Hero;
