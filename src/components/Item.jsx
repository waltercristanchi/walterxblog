import React from 'react'

const Item = (props) => {
  return (
    <div>
      <h3>{props.item.nombre}</h3>
      <p>{props.item.precio}</p>
    </div>
  )
}

export default Item
