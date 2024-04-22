import React, { useEffect, useState } from "react";
import { getProducts } from "../../data/asincMock";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = ({title}) => {
    const [products, setProducts] = useState([])
    useEffect(() =>{
        getProducts()
        .then((el) => setProducts(el))
        .catch((error) => console.log(error))
    }, [])


    return(
        <div>{title}
        <h3>Nuestras delicias</h3>
        <ItemList products={products} />
        </div>
    )
};
export default ItemListContainer