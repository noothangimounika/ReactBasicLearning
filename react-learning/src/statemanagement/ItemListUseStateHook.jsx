import React, { useState } from 'react'

const ItemListUseStateHook = () => {
    const [items,setItems]=useState([]);

    const addItem=()=>{
        setItems(prevItems =>[...prevItems, `Items ${prevItems.length +1}` ]);

    }
  return (
    <div className='ItemListUseStateHook-Container'>
        <button onClick={addItem}>Add Item</button>
        <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ItemListUseStateHook