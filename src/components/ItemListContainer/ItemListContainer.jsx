import React, { useEffect, useState } from "react";
import { getProducts, GetProductsByCategory } from "../../data/asincMock";

import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({title}) => {
    const [products, setProducts] = useState([])
    const {categoryid} = useParams()
    useEffect(() =>{

        const dataProductos = categoryid ? GetProductsByCategory(categoryid) : getProducts()

        dataProductos
        .then((el) => setProducts(el))
        .catch((error) => console.log(error))
    }, [categoryid])


    return(
        <div>
            <div className="titulo">
            {title}
            </div>
        
        
        <ItemList products={products} />
        </div>
    )
};
export default ItemListContainer