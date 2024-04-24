import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'


const Item = ({nombre, precio, imagen, id}) => {
  return (
    <div>
        <div className="container1">
          <div className="grid-item">
            <h3>{nombre}</h3>
            <img src={imagen} alt="" />
            <p><strong>Precio: </strong>{precio}</p>
            <div className="items-compra">
            <button><Link className='boton-detalle' to={`/producto/${id}`}>Ver detalle</Link></button>
            <ItemCount />
          </div>
        </div>

    </div>
        

    </div>
  )
}

export default Item