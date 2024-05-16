import React from "react";
import ItemSucursales from "../ItemSucursales/ItemSucursales";
import { sucursales } from "../../data/asincMock";

const Sucursales = ({title}) => {
  return (
      <div className="sucursal">
          <h2>{title}</h2>
      {sucursales.map((sucursal) => (
          <div className="sucursal-div" key={sucursal.id}>
          <ItemSucursales {...sucursal} />
          
        </div>
      ))}
    </div>
  );
};

export default Sucursales;
