import React from 'react'

const ItemDetail = () => {
  return (
    <div>
        {data.map((item) => (
            <h3>{item.nombre}</h3>
            <img src={} alt="" />
            <p>{item.description}</p>
            <strong><p>Precio: {item.precio}</p></strong>
            <button>Agregar al carrito</button>
        ))};
    </div>
  )
}

export default ItemDetail