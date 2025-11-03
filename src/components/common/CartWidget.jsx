import { ShoppingCartOutlined } from "@ant-design/icons";

function CartWidget({ count = 0, onClick = () => {} }) {
  // Limita el texto del badge para que no se desborde
  const display = count > 99 ? "99+" : count;

  return (
    <button
      type="button"
      className="btn position-relative"
      onClick={onClick}
      title="Abrir reservas"
      style={{ color: "var(--gold)" }}
    >
      {/* carrito */}
      <ShoppingCartOutlined style={{ fontSize: 22 }} />

      {count > 0 && (
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
          style={{ fontSize: 11, backgroundColor: "var(--moss)" }}
        >
          {display}
        </span>
      )}
    </button>
  );
}

export default CartWidget;
