import React from 'react'
import mani from '../assets/crema de mani.jpg'

const Section1 = () => {
  return (
    <section className='section1'>
        <h1>Nuestras delicias</h1>
    <div className='container1' >
        <div className="grid-item">
            <img src={mani} alt="" />
            <h3>CHOCOLATE</h3>
            <p>Informacion:</p> <br />
            <p>100% artesanal, sin azúcar agregada.</p>
            <p>Bajo en calorías, 98 kcal por pote.</p>
            <p>Peso:300gr.</p> <br />
            <button>Agregar al carrito</button>
        </div>
        <div className="grid-item">
            <img src={mani} alt="" />
            <h3>FRUTILLA</h3>
            <p>Informacion:</p> <br />
            <p>100% artesanal, sin azúcar agregada.</p>
            <p>Bajo en calorías, 98 kcal por pote.</p>
            <p>Peso:300gr.</p> <br />
            <button>Agregar al carrito</button>
        </div>
        <div className="grid-item">
            <img src={mani} alt="" />
            <h3>DULCE DE LECHE</h3>
            <p>Informacion:</p> <br />
            <p>100% artesanal, sin azúcar agregada.</p>
            <p>Bajo en calorías, 98 kcal por pote.</p>
            <p>Peso:300gr.</p> <br />
            <button>Agregar al carrito</button>
        </div>

        <div className="grid-item">
            <img src={mani} alt="" />
            <h3>DULCE DE LECHE</h3>
            <p>Informacion:</p> <br />
            <p>100% artesanal, sin azúcar agregada.</p>
            <p>Bajo en calorías, 98 kcal por pote.</p>
            <p>Peso:300gr.</p> <br />
            <button>Agregar al carrito</button>
        </div>
        
    </div>
    </section>
  )
}

export default Section1