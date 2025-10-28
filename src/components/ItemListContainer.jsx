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

        // Si hay categoría, filtramos
        if (type) {
          result = res.filter((prod) => prod.category === type);
        } else {
          // 🔎 Normalizamos el mensaje para evitar errores por mayúsculas/minúsculas
          const mensajeLower = message.toLowerCase();

          // Si el mensaje es el de la página principal → mostrar 8 productos
          if (
            mensajeLower.includes("muy pronto") ||
            mensajeLower.includes("carta encantada") ||
            mensajeLower.includes("comingsoon")
          ) {
            const categorias = {};
            const destacados = [];

            for (const prod of res) {
              if (!categorias[prod.category]) categorias[prod.category] = 0;
              if (categorias[prod.category] < 2 && destacados.length < 8) {
                destacados.push(prod);
                categorias[prod.category]++;
              }
            }

            result = destacados;
          }
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
