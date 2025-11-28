import { useState } from 'react';
import styles from './ItemCount.module.css';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={styles.counter}>
      <div className={styles.controls}>
        <button className={styles.button} onClick={decrement}>-</button>
        <h4 className={styles.number}>{quantity}</h4>
        <button className={styles.button} onClick={increment}>+</button>
      </div>
      <button className={styles.button} onClick={() => onAdd(quantity)} disabled={!stock}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
