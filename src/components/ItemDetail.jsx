
// - Card del producto centrada.
// - Imagen del mago y texto aparecen desde la api,



import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRandomWizard } from "../api/hpApi";
import styles from "./ItemDetail.module.css";
import { useCart } from "../context/CartContext";
import ItemCount from "./ItemCount/ItemCount";
import Swal from 'sweetalert2';

function ItemDetail({ item }) {
  const [wizard, setWizard] = useState(null);
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useCart();

  useEffect(() => {
    getRandomWizard().then(setWizard);
  }, []);

  const handleOnAdd = (quantity) => {
    if (item.stock === 0) {
      Swal.fire({
        icon: 'error',
        title: '¡Sin stock!',
        text: 'Este producto no se encuentra disponible.',
      });
      return;
    }
    if (quantity === 0) {
      return;
    }
    setQuantityAdded(quantity);
    addItem(item, quantity);
    Swal.fire({
      icon: 'success',
      title: '¡Agregado!',
      text: `${item.name} fue agregado al carrito.`,
      showConfirmButton: false,
      timer: 1500
    });
  };

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
          {quantityAdded > 0 ? (
            <Link to='/cart' className='Option'>Terminar compra</Link>
          ) : (
            <ItemCount initial={1} stock={item.stock} onAdd={handleOnAdd} />
          )}
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
