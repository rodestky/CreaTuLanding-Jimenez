// src/components/ItemList.jsx
// ============================================================
// 🎨 Presenta una lista de productos
// - Recibe "data" (array) y mapea cada producto en <Item />.
// ============================================================

import Item from "./Item";

function ItemList({ data }) {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-4">
      {data.map((prod) => (
        <Item key={prod.id} item={prod} />
      ))}
    </div>
  );
}

export default ItemList;
