import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { getProductosPorCategoria } from '../../services/productServices';
import './Productos.css';

const Productos = ({ categoria }) => {  // Aseguramos que categoria es un prop

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const listaProductos = async () => {
      try {
        setLoading(true);
        // Verificamos si categoria tiene valor y hacemos la consulta
        const productos = categoria ? await getProductosPorCategoria(categoria) : [];
        setProductos(productos);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    listaProductos();  // Llamamos a la función cuando el componente se monta o categoria cambia
  }, [categoria]); // Ahora depende de categoria, se vuelve a ejecutar si cambia

  if (loading) {
    return (
      <div className="loading-container">
        <div className="breeding-rhombus-spinner">
          <div className="rhombus child-1"></div>
          <div className="rhombus child-2"></div>
          <div className="rhombus child-3"></div>
          <div className="rhombus child-4"></div>
          <div className="rhombus child-5"></div>
          <div className="rhombus child-6"></div>
          <div className="rhombus child-7"></div>
          <div className="rhombus child-8"></div>
          <div className="rhombus big"></div>
        </div>
      </div>
    );
  }

  return (
    <section className="productos">
      <header className="productos__header">
        <h1 className="productos__header--title">
          Productos [{productos.length}]
        </h1>
        <p className="productos__header--text">
          Estos son todos nuestros productos
        </p>
      </header>
    
      <main className="productos__content">
        {productos.map((producto) => (
          <ProductCard
            key={producto.id}
            nombre={producto.nombre_producto}
            descripcion={producto.descripcion}
            precio={producto.precio}
            stock={producto.stock}
            url_imagen={`http://localhost:8080/images/${producto.url_imagen}`}
          />
        ))}
      </main>
    </section>
  );
}

export default Productos;
