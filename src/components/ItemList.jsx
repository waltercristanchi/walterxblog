import React from 'react'
import Item from './Item'

const ItemList = (props) => {
  return (
    <div>
      {props.items.map((el, index) => <Item key={index} item={el} />)}
    </div>
  )
}

export default ItemList
