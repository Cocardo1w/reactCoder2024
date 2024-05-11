import React, { useState } from "react";
import useCounter from "../../hooks/useCounter";

const ItemCount = ({ stock, initialValue, onAdd }) => {
  const { count, incrementar, decrementar } = useCounter(initialValue, stock);

  return (
    <div className="item-count">
      <button onClick={decrementar}>-</button>
      <p>{count}</p>
      <button onClick={incrementar}>+</button>
      <button onClick={() => onAdd(count)}>Agregar al carrito </button>
    </div>
  );
};

export default ItemCount;
