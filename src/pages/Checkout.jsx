import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../service/firebase";

export default function Checkout() {
  const { cart, cartTotalPrice, clearCart } = useCart();

  const [buyer, setBuyer] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // evitar enviar carrito vacío
    if (cart.length === 0) {
      alert("Tu carrito está vacío ❌");
      return;
    }

    const order = {
      buyer,
      items: cart,
      total: cartTotalPrice(),
      date: serverTimestamp(),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error creando orden:", error);
    }
  };

  if (orderId) {
    return (
      <div className="text-center mt-5">
        <h2>✨ ¡Compra realizada con éxito! ✨</h2>
        <p>Tu ID de compra es:</p>
        <h4 className="text-primary">{orderId}</h4>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Checkout</h2>

      <h4>Total a pagar: ${cartTotalPrice()}</h4>

      <form onSubmit={handleSubmit} className="mt-4">
        <input
          className="form-control mb-3"
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={buyer.nombre}
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-3"
          type="email"
          name="email"
          placeholder="Email"
          value={buyer.email}
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-3"
          type="text"
          name="telefono"
          placeholder="Teléfono"
          value={buyer.telefono}
          onChange={handleChange}
          required
        />

        <button className="btn btn-primary w-100" type="submit">
          Finalizar compra
        </button>
      </form>
    </div>
  );
}
