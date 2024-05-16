import React, { useContext, useEffect, useState } from "react";
import { getProducts, GetProductsByCategory } from "../../data/asincMock";

import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import Context from "../../context/CartContext";
import {db} from "../../config/firebase"
import { collection, getDocs, query, where } from "firebase/firestore";

 
const ItemListContainer = ({ title }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryid } = useParams();

  // const { cart } = useContext(Context)
  // console.log(cart)

  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      const coleccion = collection(db, 'productos')
      const queryRef = !categoryid ?
      coleccion
      :
      query(coleccion, where('categoria', '==', categoryid))
      const response = await getDocs(queryRef)

      const productos = response.docs.map((doc) => {
        const newItem = {
          ...doc.data(),
          id: doc.id 
        }
        return newItem
      })
      setProducts(productos)
      setLoading(false)
    }
    getData()
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
