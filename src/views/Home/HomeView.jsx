import { useEffect, useState } from 'react';


import './Home.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import {getUsuarios} from  '../../services/userServices';

const Home = () => {
  // Datos para los gráficos
  const salesData = [
    { day: 'Lunes', sales: 1200 },
    { day: 'Martes', sales: 1500 },
    { day: 'Miércoles', sales: 1800 },
    { day: 'Jueves', sales: 1000 },
    { day: 'Viernes', sales: 2000 },
    { day: 'Sábado', sales: 2500 },
    { day: 'Domingo', sales: 2200 },
  ];

  const inventoryData = [
    { name: 'Electrónica', value: 40 },
    { name: 'Ropa', value: 25 },
    { name: 'Alimentos', value: 15 },
    { name: 'Hogar', value: 10 },
    { name: 'Deportes', value: 10 },
  ];

  const [nroClientes, setNroClientes] = useState(0);


  useEffect(() => {
    const fetchUsuarios = async () => {
      const usuarios = await getUsuarios();
      if (usuarios) {
        setNroClientes(usuarios.length); // Actualiza el estado con el número de clientes
      }
    };
    fetchUsuarios();
  }, []);
  
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#d0ed57', '#a4de6c'];

  return (
    <main className="home">
      {/* Bloque: Panel de Resumen */}
      <section className="home__dashboard-summary">
        <div className="dashboard-summary__item">
          <h3 className="dashboard-summary__title">Total de Ventas Hoy</h3>
          <p className="dashboard-summary__value">S/ 1,200.00</p>
        </div>
        <div className="dashboard-summary__item">
          <h3 className="dashboard-summary__title">Stock Crítico</h3>
          <p className="dashboard-summary__value">5 productos</p>
        </div>
        <div className="dashboard-summary__item">
          <h3 className="dashboard-summary__title">Órdenes Pendientes</h3>
          <p className="dashboard-summary__value">3 órdenes</p>
        </div>
        <div className="dashboard-summary__item">
          <h3 className="dashboard-summary__title">Clientes Registrados</h3>
          <p className="dashboard-summary__value">{nroClientes} clientes</p>
        </div>
      </section>

      {/* Bloque: Gráficos */}
      <section className="home__dashboard-charts">
        {/* Gráfico de barras */}
        <div className="dashboard-charts__chart">
          <h3 className="dashboard-charts__title">Ventas Semanales</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Gráfico circular */}
        <div className="dashboard-charts__chart">
          <h3 className="dashboard-charts__title">Inventario por Categorías</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={inventoryData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
              >
                {inventoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Bloque: Acciones Rápidas */}
      <section className="home__quick-actions">
        <button className="quick-actions__button">Registrar Venta</button>
        <button className="quick-actions__button">Agregar Producto</button>
        <button className="quick-actions__button">Realizar Pedido</button>
        <button className="quick-actions__button">Consultar Reportes</button>
      </section>

      {/* Bloque: Alertas */}
      <section className="home__alerts">
        <h3 className="alerts__title">Alertas</h3>
        <ul className="alerts__list">
          <li className="alerts__item">Producto X está cerca de su fecha de vencimiento.</li>
          <li className="alerts__item">Pedido #123 está pendiente de recibir.</li>
          <li className="alerts__item">Promoción activa: Descuento en lácteos.</li>
        </ul>
      </section>
    </main>
  );
};

export default Home;