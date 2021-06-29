import React from 'react'
import { ProductList } from './components/ProductList';

export const PuestoFeriaApp = () => {
    return (
        <div>                        
            <h2>
                <img src='../logo.png' alt='logo' width="80px"/> 
                Puesto de Feria Santaolalla
            </h2>
            <hr/>
            <ProductList />
        </div>
    )
}
