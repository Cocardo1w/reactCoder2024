import React from "react";

const ItemSucursales = ({ barrio, direccion, horario, imagen }) => {
  return (
    
    <div className="sucursal-item">
        
      <div className="sucursal-imagen">
        <img src={imagen} alt="" />
      </div>
      <div className="sucursal-texto">
        <h2>{barrio}</h2>
        <h3>
          <strong>Direccion: </strong>
          {direccion}
        </h3>
        <p>Horarios de atencion: {horario}</p>
      </div>
    </div>
  );
};

export default ItemSucursales;
