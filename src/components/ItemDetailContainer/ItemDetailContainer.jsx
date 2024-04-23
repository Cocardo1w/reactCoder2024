import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../data/asincMock'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const { productid } = useParams()

    useEffect(() => {
        getProductById(productid)
        .then((prod) => setProducto(prod) )
        .catch((error) => console.log(error)) 
    }, [productid])
  return (
    <div >
        
    <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer