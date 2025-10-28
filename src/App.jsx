// src/App.jsx
// ============================================================
// 🧙 App principal con todas las rutas.
// ============================================================

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/globals.css";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home/Home";
import Reservas from "./pages/Reservas/Reservas";
import Contacto from "./pages/Contacto/Contacto";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { SITE } from "./config/siteConfig";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />

        <main className="app-main" aria-label="Contenido principal">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home greeting={SITE.messages.greeting} />
                  <ItemListContainer message={SITE.messages.comingSoon} />
                </>
              }
            />
            <Route
              path="/productos"
              element={
                <ItemListContainer message="Catálogo completo de productos mágicos 🪄" />
              }
            />
            <Route
              path="/category/:type"
              element={<ItemListContainer message="Categoría seleccionada ✨" />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/reservas" element={<Reservas />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route
              path="*"
              element={
                <h2 className="text-center text-danger mt-5">
                  404 - Página no encontrada 🧭
                </h2>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
