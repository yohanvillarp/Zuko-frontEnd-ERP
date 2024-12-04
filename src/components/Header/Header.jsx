import './Header.css';
import { Link } from 'react-router';
import NavigationLink from './NavigationLink';

const Header = () => {
  
  return (
    <header className="header py-3">
      <Link to="/" className="header__logo--link">
        <img src="logo.png"className='logo' />
        <h2>Zuko</h2>
      </Link>
      
      <nav className="header__nav">
        <ul className="header__nav-list d-flex gap-4">
          {itemsNav.map(
            (itemNav) => (
              <NavigationLink
                key= {itemNav.id}
                nombre = {itemNav.nombre}
              />
            )
          )}
        </ul>
      </nav>

      <div className="header__user d-flex gap-3">
        
        <Link to="/"  className='header__user-link'>
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
        
        <Link to="/" className='header__user-link'>
          <i className="fa-regular fa-heart fa-lg"></i>
        </Link>

        <Link to="/" className='header__user-link'>
          <i className="fa-regular fa-bell fa-lg"></i>
        </Link>

        <Link to="/login" className='header__user-link'>
          <i className="fa-regular fa-user fa-lg"></i>
        </Link>
        
      </div>

    </header>
  )
}

export default Header


let itemsNav = [
  {
    id: 1,
    nombre : 'Ventas'
  },
  {
    id: 2,
    nombre : 'Stock'
  },
  {
    id: 3,
    nombre : 'Productos'
  },
  {
    id: 4,
    nombre : 'Clientes'
  },
  {
    id: 5,
    nombre : 'Alertas'
  }
]