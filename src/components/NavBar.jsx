import { useState } from "react";
import CartWidget from "./CartWidget";

const NavBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchTerm(query);
    onSearch(query);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">NI NO KUNI</h1>
        <p className="subtitulo">Tu tienda de ropa</p>
      </div>

      <div className="navbar-center">
        {/* Contenedor de búsqueda */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={handleInputChange}
            className="barra-busqueda"
          />
          <button className="boton-buscar" onClick={handleSearch}>Buscar</button>
        </div>

        {/* 🔹 Nuevo div para los enlaces, asegurando que estén debajo */}
        <div className="nav-links-container">
          <ul className="nav-links">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
      </div>

      <div className="navbar-right">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
