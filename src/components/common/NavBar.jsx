import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";
import "../../styles/globals.css";
import "./NavBar.css";

function NavBar() {
  const navigate = useNavigate();

  const categorias = [
    { nombre: "Entradas 🍞", ruta: "entrada" },
    { nombre: "Platos de Fondo 🍽️", ruta: "plato_fondo" },
    { nombre: "Veganos 🥗", ruta: "vegano" },
    { nombre: "Postres 🍰", ruta: "postre" },
    { nombre: "Bebidas 🍵", ruta: "bebida" },
    { nombre: "Sopas 🥣", ruta: "sopa" },
  ];

  const handleSelect = (ruta) => {
    navigate(`/category/${ruta}`);
  };

  return (
    <Navbar
      expand="lg"
      className="navbar"
      fixed="top" // Fijo arriba
      variant="dark"
    >
      <Container>
        <Navbar.Brand
          as={NavLink}
          to="/"
          className="brand"
          style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
        >
          {/* Si no se carga el logo local, muestra un ícono como respaldo */}
          <img
            src="/logo-shop.png"
            onError={(e) => {
              e.target.src =
                "https://upload.wikimedia.org/wikipedia/commons/9/99/Star_icon_stylized.svg";
            }}
            alt="Logo The Wizard’s Table"
            className="logo"
            width="40"
            height="40"
          />
          <span>The Wizard’s Table</span>
        </Navbar.Brand>

        {/* Botón hamburguesa (para pantallas pequeñas) */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Menú colapsable */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Enlace a Inicio */}
            <Nav.Link as={NavLink} to="/" className="link">
              Inicio
            </Nav.Link>

            {/* Dropdown de Categorías */}
            <NavDropdown title="Categorías" id="nav-dropdown-categorias">
              {/* Opción "Todos" separada con ícono mágico */}
              <NavDropdown.Item onClick={() => navigate("/productos")}>
                🪄 Todos
              </NavDropdown.Item>

              <NavDropdown.Divider />

              {/* Mapea las categorías */}
              {categorias.map((cat) => (
                <NavDropdown.Item
                  key={cat.ruta}
                  onClick={() => handleSelect(cat.ruta)}
                >
                  {cat.nombre}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <Nav.Link as={NavLink} to="/productos" className="link">
              Productos
            </Nav.Link>

            <Nav.Link as={NavLink} to="/reservas" className="link">
              Reservas
            </Nav.Link>

            <Nav.Link as={NavLink} to="/contacto" className="link">
              Contacto
            </Nav.Link>
          </Nav>

          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
