import React, { useState } from 'react'

const ItemCount = () => {
    const [count, setCount] = useState(1)

    const stock = 5

    const incrementar = () => {
        count < stock && setCount(count+1)
    }
    const decrementar = () => {
        count > 1 && setCount(count)
        setCount(count - 1)
    }
  return (
    <div className='item-count'>
        <button onClick={decrementar}>-</button>
        <p>{count}</p>
        <button onClick={incrementar}>+</button>
    </div>
  )
}

export default ItemCount