import React, { useEffect, useState } from 'react'
import { getProducts } from '../../data/asincMock'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductsById('1')
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])
  return (
    <div className='ItemDetailContainer'>
        <ItemDetailContainer {...product} />
    
    </div>
  )
}

export default ItemDetailContainer