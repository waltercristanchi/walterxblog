import React, { useState, useEffect } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {

  const [nuevoStock, setNuevoStock] = useState(initial);
  let cantidad = document.getElementById("cantidad");

  return (
    <form>
      <p>Stock: {stock}</p>
      <input onChange={() => setNuevoStock(cantidad.value)} type="number" id="cantidad" placeholder={initial}></input>
      <br />
      <button onClick={(e) => onAdd(e, nuevoStock)}></button>
    </form>
  )
}

export default ItemCount
