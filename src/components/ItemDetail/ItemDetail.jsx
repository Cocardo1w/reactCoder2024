import React, { useContext, useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Context from "../../context/CartContext";
import { Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const ItemDetail = ({ nombre, precio, imagen, descripcion, stock, id }) => {
  const [quantity, setQuantity] = useState(0);
  const [currentStock, setCurrentStock] = useState(stock);
  const { addItem } = useContext(Context);

  useEffect(() => {
    const fetchStock = async () => {
      try {
        const productRef = doc(db, "productos", id);
        const productDoc = await getDoc(productRef);
        if (productDoc.exists()) {
          const productData = productDoc.data();
          setCurrentStock(productData.stock);
        } else {
          console.error("El producto no existe en la base de datos");
        }
      } catch (error) {
        console.error("Error al obtener el stock del producto:", error);
      }
    };

    fetchStock();
  }, [id]);

  const onAdd = (quantity) => {
    console.log(`Agregaste ${quantity} unidades`);
    const item = {
      id,
      nombre,
      precio,
      stock: currentStock,
    };
    setQuantity(quantity);
    addItem(item, quantity);
  };

  if (currentStock === undefined) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <div className="container-item-detail">
        <div className="grid-item detail">
          <h3>{nombre}</h3>
          <img src={imagen} alt={nombre} />
          <p>
            <strong>Precio: </strong>${precio}
          </p>
          <p>
            <strong>Información: </strong>
            {descripcion}
          </p>
          {quantity > 0 ? (
            <Link className="boton-carrito" to="/cart">
              Ir al carrito
            </Link>
          ) : (
            <div className="items-compra">
              {currentStock && currentStock > 0 ? (
                <ItemCount
                  stock={currentStock}
                  initialValue={1}
                  onAdd={onAdd}
                />
              ) : (
                <button className="Boton-sin-stock" disabled>
                  No hay stock
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
