import './FAQ.css';
import QCard from './QCard';

const FAQ = () => {
  return (
    <section className="faq">

      <h2 className="faq__title"> Preguntas frecuentes </h2>

      {preguntas.map( (pregunta) =>(
        <QCard
        key = {pregunta.id}
        title={pregunta.title}
        pregunta={pregunta .pregunta}
        />  
      ))}
    </section>
    
  )
}

export default FAQ;

const preguntas = [
  {
    id: 1,
    title: '¿Cómo puedo saber la fecha de vencimiento de los productos?',
    pregunta: 'Cada producto tiene su fecha de vencimiento indicada en el empaque. Si necesitas más información, nuestro personal estará encantado de ayudarte a verificar los productos antes de tu compra.'
  },
  {
    id: 2,
    title: '¿Realizan envíos a todo el país?',
    pregunta: 'Realizamos envíos a varias ciudades dentro del país. Puedes consultar las áreas disponibles en nuestra sección de envíos para obtener más detalles sobre las zonas de cobertura.'
  },
  {
    id: 3,
    title: '¿Qué métodos de pago aceptan?',
    pregunta: 'Aceptamos tarjetas de crédito y débito, transferencias bancarias, pagos en efectivo en puntos de pago y servicios como PayPal. Además, contamos con promociones y descuentos para ciertos métodos de pago.'
  },
  {
    id: 4,
    title: '¿Puedo cambiar o devolver un producto si no me gusta o está dañado?',
    pregunta: 'Sí, ofrecemos cambios y devoluciones dentro de un plazo de 15 días desde la recepción del producto, siempre que este en su empaque original y sin usar. Si el producto está dañado, cubrimos los gastos de devolución.'
  },
  {
    id: 5,
    title: '¿Los productos son frescos y de buena calidad?',
    pregunta: 'Sí, trabajamos con proveedores de confianza que nos garantizan productos frescos y de calidad. Realizamos revisiones diarias para asegurarnos de que todos los productos cumplen con nuestros estándares de frescura.'
  },
  {
    id: 6,
    title: '¿Puedo hacer mi pedido y recogerlo en tienda?',
    pregunta: 'Sí, ofrecemos la opción de realizar un pedido en línea y recogerlo en nuestra tienda física. Solo selecciona la opción "Recoger en tienda" al finalizar la compra.'
  },
  {
    id: 7,
    title: '¿Tienen productos sin gluten o aptos para personas con alergias?',
    pregunta: 'Sí, contamos con una selección de productos sin gluten y aptos para personas con diversas alergias alimentarias. Puedes filtrar por estas categorías en nuestro sitio web o preguntar a nuestro personal si necesitas más información.'
  },
  {
    id: 8,
    title: '¿Ofrecen descuentos por compras al por mayor?',
    pregunta: 'Sí, ofrecemos descuentos exclusivos para compras al por mayor. Si deseas realizar un pedido grande, no dudes en contactar a nuestro equipo de ventas para obtener una cotización especial.'
  }
];
