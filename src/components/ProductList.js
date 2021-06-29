import React, { useEffect, useState } from 'react'
import { Product } from './Product';

export const ProductList = () => {
  
  const [misproductos, setMisproductos] = useState([]);
  
  useEffect( () => {
    getProductos();
  },[])
  
  const getProductos = async () => {  
    const stock = await require('../json/data.json');
    
    const productosDisponibles = stock.filter(item =>  {
      return item
    })
    setMisproductos(productosDisponibles);
  }

       
    return (
        <>
          <h2>Productos Disponibles</h2>
          <div className="card-grid">          
          {
            misproductos.map( producto => (
              <Product   
                  key={ producto.id } 
                  { ...producto }
                />
            ))
          }
          </div>
        </>
    )
}
