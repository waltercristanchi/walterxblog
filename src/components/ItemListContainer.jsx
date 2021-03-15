import React, { useState } from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState(props.productos)
  const [stock, setStock] = useState(5)
  const restarStock = (e, nuevoStock) => {
    e.preventDefault()
    setStock(stock - nuevoStock)

  }
  React.useEffect(() => {
    // Actualiza el título del documento usando la API del navegador

  });
  return (
    <div>
      {productos.map(elemento => (
        <div key={elemento.nombre}>
          <h2>{elemento.nombre}</h2>
          <p>{elemento.precio}</p>
          <ItemCount nombre={elemento.nombre} stock={stock} initial={1} onAdd={restarStock} />
        </div>
      ))}
    </div>
  )
}

export default ItemListContainer
