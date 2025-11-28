import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductos } from "../mock/AsyncService";
import ItemList from "./ItemList";
import LoaderComponent from "./common/LoaderComponent";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../service/firebase"; 

function ItemListContainer({ message }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { type } = useParams();


useEffect(() => {
  setLoading(true);

  const productsCollection = type
   ? query(collection(db, "productos"), where("category", "==", type))
   : collection(db, "productos");

  getDocs(productsCollection)
    .then((res) => {
      const list = res.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setData(list);
    })
    .catch((error) => console.log("Error al cargar productos", error))
    .finally(() => setLoading(false));
}, [type]);









  // useEffect(() => {
  //   setLoading(true);
  //   getProductos()
  //     .then((res) => {
  //       let result = res;

  //       if (type) {
  //         result = res.filter((prod) => prod.category === type);
  //       } else {
  //         const mensajeLower = message.toLowerCase();
  //         if (
  //           mensajeLower.includes("muy pronto") ||
  //           mensajeLower.includes("carta encantada") ||
  //           mensajeLower.includes("comingsoon")
  //         ) {
  //           const categorias = {};
  //           const destacados = [];
  //           for (const prod of res) {
  //             if (!categorias[prod.category]) categorias[prod.category] = 0;
  //             if (categorias[prod.category] < 2 && destacados.length < 8) {
  //               destacados.push(prod);
  //               categorias[prod.category]++;
  //             }
  //           }
  //           result = destacados;
  //         }
  //       }

  //       setData(result);
  //     })
  //     .catch((err) => console.log("Error al cargar productos", err))
  //     .finally(() => setLoading(false));
  // }, [type, message]);

  return (
    <section className="container text-center my-5">
      <h2 className="text-warning mb-4">{message}</h2>
      {loading ? <LoaderComponent /> : <ItemList data={data} />}
    </section>
  );
}

export default ItemListContainer;


