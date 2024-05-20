import React, { useContext } from "react";
import Context from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, getTotal, removeItem, clearCart } = useContext(Context);

  if (cart.length === 0) {
    return (
      <div className="cart">
        <h2>Necesitas seleccionar algun producto</h2>
        <Link className="boton-form" to="/">
          Ver Productos
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <h2 id="Titulo-Carrito">Mi carrito</h2>
        <table className="form">
          <tbody>
            <tr>
              <td className="form-td">Producto</td>
              <td className="form-td">Cantidad</td>
              <td className="form-td">Precio</td>
              <td className="form-td">Subtotal</td>
              <td className="form-td"></td>
            </tr>
            {cart.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.nombre}</td>
                <td>{prod.quantity}</td>
                <td>{prod.precio}</td>
                <td>{prod.precio * prod.quantity}</td>
                <td>
                  <button onClick={() => removeItem(prod.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#b41c1c"
                    >
                      <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td>Total: ${getTotal()}</td>
              <td>
                {/* <button className="boton-form" onClick={() => clearCart}>
                  Vaciar carrito
                </button> */}
                <button className="boton-form" onClick={clearCart}>
                  Vaciar carrito
                </button>
              </td>
              <td>
                <Link to="/checkout" className="boton-form">
                  Finalizar compra
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};

export default Cart;
