import React from 'react'
import './Categoria.css';
import { Link } from 'react-router-dom';

const Categoria = ({id, imagen, name, description}) => {
  return (
    <section className="categoria">
      <Link
              to={`/productos/categoria/${name.toLowerCase()}`}
              className="home__category-card"
      >

<img src={imagen} alt={name} className="categoria__imagen"/>
<h4 className="categoria__title">{name}</h4>
<p>{description}</p>

            </Link>
        
    </section>
  )
}

export default Categoria