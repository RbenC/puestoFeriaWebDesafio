import React from 'react';


export const Product = ({ id, nombre, precio, cantidad, unidad, imagen   }) => {    
    return (
        // <div classNameNameName="kard">
        //   <img src={ imagen } alt={ nombre } />
        //   <p>Precio {precio}Clp { unidad } </p>
        // </div>


          <div className="col">
              <div className="card h-100">
                <img className="card-img-top "src={ imagen } alt={ nombre } />
                  <div className="card-body">                    
                  </div>
                  <h5 className="card-title text-dark text-center">{ nombre } ${ new Intl.NumberFormat("de-DE").format(  precio  ) } { unidad }</h5>
                  
                  <button type="button" className="btn btn-primary">
                Mayor informaciòn
              </button>
              
              </div>
              
          </div>


        
        


        
          






     
    )
}
