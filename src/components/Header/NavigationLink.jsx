import React from 'react'
import { Link } from 'react-router-dom';

const NavigationLink = ({id, nombre}) => {
  return (
    <li>
        <Link to={`/productos/categoria/${nombre.toLowerCase()}`}  className="header__nav-link">   {nombre.toUpperCase()}
        </Link>
    </li>
  )
}

export default NavigationLink