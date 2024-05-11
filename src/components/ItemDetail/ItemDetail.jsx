import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Context from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ nombre, precio, imagen, descripcion, stock, id }) => {
  const [quantity, setQuantity] = useState(0);
  const { addItem } = useContext(Context);

  const onAdd = (quantity) => {
    console.log(`agregaste ${quantity} unidades`);
    const item = {
      id,
      nombre,
      precio,
      stock,
    };
    setQuantity(quantity);
    addItem(item, quantity);
  };

  return (
    <div>
      <div className="container-item-detail">
        <div className="grid-item detail">
          <h3>{nombre}</h3>
          <img src={imagen} alt="" />
          <p>
            <strong>Precio: </strong>${precio}
          </p>
          <p>
            <strong>Informacion: </strong>
            {descripcion}
          </p>
          {quantity > 0 ? (
            <Link className="boton-carrito" to="/cart">Ir al carrito</Link>
          ) : (
            <div className="items-compra">
              <ItemCount stock={stock} initialValue={1} onAdd={onAdd} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
