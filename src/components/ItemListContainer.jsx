const productos = [
    { id: 1, nombre: "Pantalón Jean" },
    { id: 2, nombre: "Camisa Denim" },
    { id: 3, nombre: "Remera Clásica" },
    { id: 4, nombre: "Zapatillas Urbanas" }
  ];
  
  // Función para normalizar texto (eliminar acentos y convertir a minúsculas)
  const normalizarTexto = (texto) => {
    return texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };
  
  const ItemListContainer = ({ mensaje, searchTerm }) => {
    const productosFiltrados = productos.filter((producto) =>
      normalizarTexto(producto.nombre).includes(normalizarTexto(searchTerm))
    );
  
    return (
      <div className="item-list-container">
        <h2>{mensaje}</h2>
        <ul>
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map((producto) => (
              <li key={producto.id}>{producto.nombre}</li>
            ))
          ) : (
            <p>No se encontraron productos</p>
          )}
        </ul>
      </div>
    );
  };
  
  export default ItemListContainer;
  