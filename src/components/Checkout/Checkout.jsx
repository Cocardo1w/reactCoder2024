import React, { useState } from 'react'

const Checkout = () => {
    const [ user, setUser] = useState({
        name: '',
        email: '',
        repeatedEmail: '',
        phone: ''
    })

    const updateUser = (event) => {
        setUser((user) => ({
            ...user,
            [event.target.name] : event.target.value
        }))
    }
  return (
    <div>
        <table className="formulario" >
            <tbody className="formulario">

            <tr className="formulario">
                <td><input type="text" name='name' placeholder='Ingrese el nombre' onChange={updateUser} /></td>
                <td><input type="text" name='email' placeholder='Ingrese el email' onChange={updateUser} /></td>
                <td><input type="text" name='repeatedEmail' placeholder='Repita su email' onChange={updateUser} /></td>
                <td><input type="text" name='phone' placeholder='Ingrese su telefono' onChange={updateUser} /></td>
                <button className="boton-form">Finalizar compra</button>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Checkout