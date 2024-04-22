import React from 'react'
import ItemCount from '../ItemCount/ItemCount'


const Item = ({nombre, precio, imagen, descripcion}) => {
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
                    <ItemCount />
                    </div>
                </div>

            </div>
        </section>

    </div>
  )
}

export default Item