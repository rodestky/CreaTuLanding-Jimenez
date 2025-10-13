import styles from "./Hero.module.css";

function Hero({
  title = "The Wizard’s Table",
  subtitle = "Donde la magia de Hogwarts se encuentra con la alta cocina.",
  ctaText = "Ver menú",
  ctaHref = "#menu",
  imageUrl = "/img/hero.jpg",
}) {
  // ID  para asociar el subtítulo a la sección vía aria-describedby
  const subtitleId = "hero-subtitle";

  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${imageUrl})` }} // fondo via inline para permitir override por prop
      aria-label="Portada The Wizard’s Table"
      aria-describedby={subtitleId}
    >
      {/* Capa de oscurecimiento */}
      <div className={styles.overlay} />

      {/* Contenido en primer plano  */}
      <div className={styles.inner}>
        <h1 className={styles.title}>{title}</h1>

        {/* renderiza el subtítulo del Hero */}
        <p id={subtitleId} className={styles.subtitle}>
          {subtitle}
        </p>

        <a className={styles.cta} href={ctaHref}>
          {ctaText}
        </a>
      </div>
    </section>
  );
}

export default Hero;
