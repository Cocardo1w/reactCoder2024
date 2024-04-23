import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'


const Item = ({nombre, precio, imagen, descripcion, id}) => {
  return (
    <div>
            
        <section className="section1">
            <div className="container1">
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

export default Item