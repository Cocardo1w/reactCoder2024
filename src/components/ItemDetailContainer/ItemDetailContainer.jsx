import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../data/asincMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { productid } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const queryRef = doc(db, "productos", productid);
      const response = await getDoc(queryRef);
      const newItem = {
        ...response.data(),
        id: response.id,
      };
      setProducto(newItem);
      setLoading(false);
    };
    getProduct();
  }, [productid]);

  return (
    <div>
      <ItemDetail {...producto} />
    </div>
  );
};

export default ItemDetailContainer;
