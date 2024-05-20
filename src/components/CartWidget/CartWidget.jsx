import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/CartContext";

const CartWidget = () => {
  const { getQuantity } = useContext(Context);

  return (
    <div>
      <li className="nav-li">
        <Link to="/cart">
          <span className="material-symbols-outlined">shopping_cart</span>
        </Link>
      </li>
      <div className="contadorProductos">
        <p>{getQuantity()}</p>
      </div>
    </div>
  );
};
export default CartWidget;
