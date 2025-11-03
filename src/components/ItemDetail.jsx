
// - Card del producto centrada.
// - Imagen del mago y texto aparecen desde la api,



import { useEffect, useState } from "react";
import { getRandomWizard } from "../api/hpApi";
import styles from "./ItemDetail.module.css";

function ItemDetail({ item }) {
  const [wizard, setWizard] = useState(null);

  useEffect(() => {
    getRandomWizard().then(setWizard);
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* 🧁 Card principal centrada */}
      <article className={styles.card}>
        <h2 className={styles.title}>{item.name}</h2>
        <p className={styles.description}>{item.description}</p>
        <p className={styles.stock}>Stock disponible: {item.stock}</p>
        <hr />
        <div className={styles.footer}>
          <span className={styles.price}>${item.price}</span>
          <button className={styles.btnAdd}>Agregar al carrito</button>
        </div>
      </article>

      {/* ✨ Imagen lateral fija a la izquierda */}
      {wizard && (
        <aside className={styles.wizardAside}>
          <div className={styles.wizardCard}>
            <img
              src={wizard.image}
              alt={wizard.name}
              className={styles.wizardImg}
              loading="lazy"
            />
            <div className={styles.wizardInfo}>
              <h4>{wizard.name}</h4>
              {wizard.house && <p>Casa: {wizard.house}</p>}
              {wizard.actor && <p>Actor: {wizard.actor}</p>}
            </div>
          </div>
        </aside>
      )}
    </div>
  );
}

export default ItemDetail;
