import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = (props) => {
  console.log(props.items)
  return (
    <div>
      <ItemList items={props.items} />
    </div>
  )
}

export default ItemListContainer
