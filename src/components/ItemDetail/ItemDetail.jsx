import React from 'react'

import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({nombre, precio, imagen, descripcion, id}) => {
  return (

    <div>
        
            <div className="container-item-detail">
                <div className="grid-item detail">
                    <h3>{nombre}</h3>
                    <img src={imagen} alt="" />
                    <p><strong>Precio: </strong>{precio}</p>
                    <p><strong>Informacion: </strong>{descripcion}</p>
                    <div className="items-compra">
                    <button>Agregar al carrito</button>
                    <ItemCount />
                    </div>
                </div>

            </div>
        

    </div>
  )
}

export default ItemDetail