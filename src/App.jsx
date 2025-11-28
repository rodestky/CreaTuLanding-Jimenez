import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/globals.css";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="app">
          <NavBar />

          <main className="app-main" aria-label="Contenido principal">
            <AppRoutes />
          </main>

          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
