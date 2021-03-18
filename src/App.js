import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const [items, setItems] = useState([])
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

  React.useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos)
      }, 2000);
    }).then(
      (resultado) => setItems(resultado)
    )
  })
  return (
    <div>
      <Navbar />
      <ItemListContainer items={items} />
    </div>
  );
}

export default App;
