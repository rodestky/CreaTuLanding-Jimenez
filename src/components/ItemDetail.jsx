// src/components/ItemListContainer.jsx
// ============================================================
// ⚙️ Componente contenedor de lógica
// - Trae los productos desde AsyncService
// - Filtra por categoría (si la hay en la URL)
// - En la página principal, muestra solo 8 (2 por categoría aprox.)
// ============================================================

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductos } from "../mock/AsyncService";
import ItemList from "./ItemList";

function ItemListContainer({ message }) {
  const [data, setData] = useState([]); // Estado de productos
  const { type } = useParams(); // Categoría desde la URL

  useEffect(() => {
    getProductos()
      .then((res) => {
        let result = res;

        // Si hay categoría en la URL, filtramos
        if (type) {
          result = res.filter((prod) => prod.category === type);
        }

        // Si es la página principal, limitamos a 8 productos
        // (aproximadamente 2 por categoría)
        else if (message.includes("Muy pronto") || message.includes("carta encantada") || message.includes("comingSoon")) {
          const categorias = {};
          const destacados = [];

          // Recorremos todos los productos
          for (const prod of res) {
            // Si no hemos tomado 2 de esta categoría aún, lo agregamos
            if (!categorias[prod.category]) categorias[prod.category] = 0;
            if (categorias[prod.category] < 2 && destacados.length < 8) {
              destacados.push(prod);
              categorias[prod.category]++;
            }
          }

          result = destacados;
        }

        setData(result);
      })
      .catch((err) => console.log("Error al cargar productos", err));
  }, [type, message]);

  return (
    <section className="container text-center my-5">
      <h2 className="text-warning mb-4">{message}</h2>
      <ItemList data={data} />
    </section>
  );
}

export default ItemListContainer;
