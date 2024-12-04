import './Servicios.css';
import ServiceCard from './ServiceCard';

const Servicios = () => {
  return (
    <section className="services">

      <h2 className="services__title">Nuestros Servicios</h2>

      {servicios.map((servicio) => (
        <ServiceCard
          key={servicio.id}
          iconClass={servicio.iconClass}
          title={servicio.title}
          description={servicio.description}
        />
      ))}
    </section>
  )
}

export default Servicios

let servicios = [
  {
    id: 1,
    iconClass : 'fa-solid fa-cart-shopping fa-5x', 
    title : 'Compras Online: Rápidas y Seguras',
    description : 'Nuestra plataforma de compras online te ofrece una experiencia fácil y segura. Con solo un clic, podrás acceder a una gran variedad de productos frescos y de calidad. Ofrecemos pagos seguros, entrega a domicilio en tiempo récord y atención al cliente las 24 horas. ¡Todo lo que necesitas está al alcance de tu mano!'
  },
  {
    id: 2,
    iconClass : 'fa-solid fa-store fa-5x',
    title : 'Tu Supermercado de Confianza, en Persona',
    description : 'Visítanos en nuestra tienda física y disfruta de una experiencia de compra única. Desde los productos más frescos hasta las mejores ofertas, nuestro equipo estará encantado de ayudarte a encontrar todo lo que necesitas. ¡Ven y descubre la calidad y el servicio que nos hacen únicos!'
  },
  {
    id: 3,
    iconClass: 'fa-solid fa-apple-alt fa-5x',
    title: 'Productos Frescos y Naturales',
    description: 'Ofrecemos una amplia selección de frutas, verduras y alimentos frescos, directamente de los mejores proveedores. Nuestro compromiso es brindarte productos naturales, saludables y de calidad para que tu familia disfrute de lo mejor en cada comida.'
  },
  {
    id: 4,
    iconClass : 'fa-solid fa-bag-shopping fa-5x',
    title: 'Ofertas y Descuentos Especiales',
    description : 'Aprovecha nuestras increíbles ofertas y descuentos exclusivos. Te ofrecemos promociones especiales en productos seleccionados, así como descuentos por compras mayores. ¡Visítanos o compra en línea para obtener los mejores precios y ahorrar en tus compras!'
  }
];
