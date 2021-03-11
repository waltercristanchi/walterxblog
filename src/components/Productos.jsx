import React from 'react'

const Productos = (props) => {

  return (
    <div>
      {props.productos.map(elemento => (
        <div>
          <h2>{elemento.nombre}</h2>
          <p>{elemento.precio}</p>
        </div>
      ))}
    </div>
  )
}

export default Productos
