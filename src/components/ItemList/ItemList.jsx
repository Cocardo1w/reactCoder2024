import React from "react";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="container1">
      {products.map((elem) => (
        <div className="grid-item" key={elem.id}>
          <Item key={elem.id} {...elem} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
