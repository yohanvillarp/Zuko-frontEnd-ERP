import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomeView from './views/Home/HomeView';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Nosotros from './components/Footer/FooterLinks/Nosotros/Nosotros';
import Guia from './components/Footer/FooterLinks/Guia/Guia';
import Privacidad from './components/Footer/FooterLinks/Privacidad/Privacidad';
import Servicios from './components/Footer/FooterLinks/Servicios/Servicios';
import FAQ from './components/Footer/FooterLinks/FAQ/FAQ';
import Productos from './components/Productos/Productos';


function App() {

  return (
    <Router>
      <MainContent />
    </Router>
  )
}

function MainContent(){

  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  console.log(isLoginPage);

  return(
    <div className="app">
        {! isLoginPage && <Header />}
          <main className="app__main">
            <Routes>
              <Route path="/" element=  {<HomeView />} />
              <Route path="/nosotros" element=  {<Nosotros />} />
              <Route path="/productos/categoria/ropa" element=  {<Productos categoria='ropa'/> } />
              <Route path="/productos/categoria/electrónica" element=  {<Productos categoria='electrónica'/> } />
              <Route path="/productos/categoria/alimentos" element=  {<Productos categoria='alimentos'/> } />
              <Route path="/productos/categoria/hogar" element=  {<Productos categoria='hogar'/> } />
              <Route path="/productos/categoria/deportes" element=  {<Productos categoria='deportes'/> } />
              <Route path="/servicios" element=  {<Servicios />} />
              <Route path="/privacidad" element=  {<Privacidad />} />
              <Route path="/faq" element=  {<FAQ />} />
              <Route path="/guia" element=  {<Guia />} />
            </Routes>
          </main>
        {! isLoginPage && <Footer />}
      </div>
  )
}

export default App
