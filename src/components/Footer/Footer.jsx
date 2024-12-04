import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Información del Sistema */}
        <div className="footer__section footer__section--info">
          <h4 className="footer__title">ERP Supermercado</h4>
          <p className="footer__text">
            Sistema de gestión integral para supermercados. Optimizamos tus operaciones diarias.
          </p>
          <p className="footer__text">Versión: 1.0.0</p>
        </div>

        {/* Accesos Rápidos */}
        <div className="footer__section footer__section--shortcuts">
          <h4 className="footer__title">Accesos rápidos</h4>
          <ul className="footer__list">
            <li><Link to="/ventas" className="footer__link">Gestión de Ventas</Link></li>
            <li><Link to="/inventario" className="footer__link">Control de Inventario</Link></li>
            <li><Link to="/reportes" className="footer__link">Reportes</Link></li>
          </ul>
        </div>

        {/* Contacto Soporte */}
        <div className="footer__section footer__section--support">
          <h4 className="footer__title">Soporte</h4>
          <ul className="footer__list">
            <li><a href="mailto:soporte@erp.com" className="footer__link">soporte@erp.com</a></li>
            <li><a href="tel:+51915915670" className="footer__link">+51 123 456 789</a></li>
            <li><Link to="/manual" className="footer__link">Manual de Usuario</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
