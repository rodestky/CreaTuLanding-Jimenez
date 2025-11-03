//  Card individual de producto.
// - Recibe un producto y muestra nombre, descripción, precio.
// - Usa Link para navegar al detalle del producto.


import { Link } from "react-router-dom";

function Item({ item }) {
  return (
    <div className="card shadow-sm" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title text-warning fw-bold">{item.name}</h5>
        <p className="card-text text-muted">{item.description}</p>
        <p className="fw-semibold text-success">${item.price}</p>
        <Link to={`/item/${item.id}`} className="btn btn-outline-warning btn-sm">
          Ver detalle
        </Link>
      </div>
    </div>
  );
}

export default Item;
