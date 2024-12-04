import './Nosotros.css';
import NosotrosCard from './NosotrosCard'

const Nosotros = () => {
  return (
    <section className="about-us">
    <h1 className="about-us__title">Nosotros</h1>
    <div className="about-us__content">
        {nosotros.map((seccion) => (
            <NosotrosCard 
                key={seccion.id}
                title={seccion.title}
                contenido={seccion.contenido}
                classIcon={seccion.classIcon}
            />
        ))}
    </div>

    <footer className="about-us__footer">
      
    </footer>
    
</section>

  )
}

export default Nosotros


const nosotros = [
  {
    id: 1,
    title : 'Misión',
    contenido : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nihil eveniet molestiae illum cumque ducimus natus ratione iusto, minima error nemo rem repudiandae voluptate asperiores atque minus. Impedit, blanditiis quo.',
    classIcon:'fas fa-bullhorn fa-3x'
  },
  {
    id: 2, 
    title: 'Visión',
    contenido : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aut dignissimos expedita quia laborum nostrum suscipit vero? Repudiandae, expedita optio, non culpa accusantium aspernatur porro natus quo nobis eius provident?',
    classIcon:'fas fa-globe fa-3x'
  }
]