import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({nombre, precio, stock, imagen, descripcion, id}) => {
  return (

    <div>
        <section className="">
            <div className="">
                <div className="grid-item">
                    <h3>{nombre}</h3>
                    <img src={imagen} alt="" />
                    <p><strong>Precio: </strong>{precio}</p>
                    <p><strong>Informacion: </strong>{descripcion}</p>
                    <div className="items-compra">
                    <button>Agregar al carrito</button>
                    <Link to={`/producto/${id}`}>Ver detalle</Link>
                    <ItemCount />
                    </div>
                </div>

            </div>
        </section>

    </div>
  )
}

export default ItemDetail