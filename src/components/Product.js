import React from 'react';


export const Product = ({ id, nombre, precio, cantidad, unidad, imagen   }) => {    
    return (
        
        
        <div className="card">
          <img src={ imagen } alt={ nombre } />
          <p>Precio {precio} Clp</p>
          
        </div>
    )
}
