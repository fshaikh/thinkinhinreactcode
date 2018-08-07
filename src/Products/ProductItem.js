import React from 'react';
import './ProductItem.css';

export default function ProductItem({product}) {
       const nameClass = product.stocked ? 'normal' : 'outOfStock';
       return(
            <tr key={product.name} className={nameClass}>
               <td>{product.name}</td>
               <td>{product.price}</td>
           </tr>
       );
    
        
   
    
}