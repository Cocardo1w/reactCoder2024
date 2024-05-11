import React, { useContext, useEffect, useState } from "react";
import { getProducts, GetProductsByCategory } from "../../data/asincMock";

import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import Context from "../../context/CartContext";

const ItemListContainer = ({ title }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryid } = useParams();

  // const { cart } = useContext(Context)
  // console.log(cart)

  useEffect(() => {
    setLoading(true);
    const dataProductos = categoryid
      ? GetProductsByCategory(categoryid)
      : getProducts();

    dataProductos
      .then((el) => setProducts(el))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categoryid]);

  return (
    <div>
      <div className="titulo">
        <h1>{title}</h1>
        {loading ? (
          <div className="spinner">
            <PuffLoader className="spinner" color="#F2B3B9" />
          </div>
        ) : (
          <ItemList products={products} />
        )}
      </div>
    </div>
  );
};
export default ItemListContainer;
