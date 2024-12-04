import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ id, nombre_producto, descripcion, precio, stock, url_imagen}) => {
  return (
    <Link
      to="/productos/{id}"
      className="product-card"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div className={`product-card__content${id}`}>
        <img
          src={url_imagen}
          alt={nombre_producto}
          className="product-card__image"
        />
        <h3 className="product-card__title">{nombre_producto}</h3>
        <p className="product-card__description">{descripcion}</p>
        <div className="product-card__footer">
          <span className="product-card__price">${precio}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
