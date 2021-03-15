import React from 'react';
import Navbar from './components/Navbar';
import Productos from './components/ItemListContainer';

function App() {
  const productos = [
    {
      nombre: "Producto1",
      precio: "15",
      stock: 5
    },
    {
      nombre: "Producto2",
      precio: "5",
      stock: "5"

    }

  ]


  return (
    <div>
      <Navbar />
      <Productos productos={productos} />
    </div>
  );
}

export default App;
