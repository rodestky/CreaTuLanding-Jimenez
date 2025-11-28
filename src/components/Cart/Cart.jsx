import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import styles from './Cart.module.css';

const Cart = () => {
  const { cart, clear, removeItem, cartTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h2>Tu carrito está vacío</h2>
        <p>¿Aún no has decidido qué comprar?</p>
        <Link to='/productos' className='btn btn-primary'>Ver productos</Link>
      </div>
    );
  }

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.title}>Tu Carrito</h1>
      <ul className={styles.itemList}>
        {cart.map((product) => (
          <li key={product.id} className={styles.item}>
            <div className={styles.itemDetails}>
              <h3 className={styles.itemName}>{product.name}</h3>
              <p className={styles.itemQuantity}>Cantidad: {product.quantity}</p>
              <p className={styles.itemPrice}>Precio: ${product.price}</p>
            </div>
            <button onClick={() => removeItem(product.id)} className={styles.removeItem}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <div className={styles.cartSummary}>
        <h3 className={styles.totalPrice}>Total: ${cartTotalPrice()}</h3>
        <button onClick={() => clear()} className={styles.clearCart}>
          Limpiar Carrito
        </button>
        <Link to='/checkout' className='btn btn-success'>
          Finalizar Compra
        </Link>
      </div>
    </div>
  );
};

export default Cart;
