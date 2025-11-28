import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function CartWidget() {
  const { cartTotal } = useCart();
  const total = cartTotal();

  // Limita el texto del badge para que no se desborde
  const display = total > 99 ? "99+" : total;

  return (
    <Link to="/cart" className="btn position-relative" title="Ver carrito" style={{ color: "var(--gold)" }}>
      {/* carrito */}
      <ShoppingCartOutlined style={{ fontSize: 22 }} />

      {total > 0 && (
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
          style={{ fontSize: 11, backgroundColor: "var(--moss)" }}
        >
          {display}
        </span>
      )}
    </Link>
  );
}

export default CartWidget;
