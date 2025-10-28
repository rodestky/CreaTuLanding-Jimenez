// src/components/ItemDetailContainer.jsx
// ============================================================
// ⚙️ Componente contenedor para mostrar el detalle de un producto.
// - Usa useParams() para obtener el id.
// - Busca el producto en el mock y lo pasa a ItemDetail.
// ============================================================

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductos } from "../mock/AsyncService";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getProductos()
      .then((res) => {
        const found = res.find((p) => p.id === id);
        setProduct(found);
      })
      .catch((err) => console.log("Error al cargar detalle", err));
  }, [id]);

  if (!product)
    return <h2 className="text-center mt-5 text-warning">Cargando detalle...</h2>;

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <ItemDetail item={product} />
    </div>
  );
}

export default ItemDetailContainer;
