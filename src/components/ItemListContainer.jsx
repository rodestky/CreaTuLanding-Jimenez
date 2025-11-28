import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  return (
    <section className="container text-center my-5">
      <h2 className="text-warning mb-4">{message}</h2>
      {loading ? <LoaderComponent /> : <ItemList data={data} />}
    </section>
  );
}

export default ItemListContainer;
