import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "antd/dist/reset.css";
import "./styles/globals.css";
import "./App.css";
import NavBar from "./components/common/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Home from "./pages/Home/Home";
import Reservas from "./pages/Reservas/Reservas";
import Contacto from "./pages/Contacto/Contacto";
import Footer from "./components/common/Footer";

import { SITE } from "./config/siteConfig";

function App() {
  return (
    <div className="app">
      <NavBar />
      <main className="app-main" aria-label="Contenido principal">
        <ItemListContainer message={SITE.messages.comingSoon} />
        {/* Bienvenida*/}
        <Home greeting={SITE.messages.greeting} />
        <Reservas />
        <Contacto />
      </main>

      <Footer />
    </div>
  );
}

export default App;
