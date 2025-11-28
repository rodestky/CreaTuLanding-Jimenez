import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import LoaderComponent from "./common/LoaderComponent";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [invalid, setInvalid] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "productos", id);

    getDoc(docRef)
      .then((res) => {
        if (res.exists()) {
          setProduct({
            id: res.id,
            ...res.data(),
          });
        } else {
          setInvalid(true);
        }
      })
      .catch((error) => console.log("Error al cargar detalle", error))
      .finally(() => setLoading(false));
  }, [id]);

  // LOADING
  if (loading) return <LoaderComponent />;

  // NO EXISTE EL DOCUMENTO
  if (invalid)
    return (
      <h2 className="text-center mt-5 text-danger">
        El producto no existe 🧐
      </h2>
    );

  // FALLO CUALQUIER OTRA COSA
  if (!product)
    return (
      <h2 className="text-center mt-5 text-danger">
        Producto no encontrado 😢
      </h2>
    );

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <ItemDetail item={product} />
    </div>
  );
}

export default ItemDetailContainer;
