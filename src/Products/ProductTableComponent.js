import React from 'react';
import ProductItem from './ProductItem';
import './ProductTableComponent.css'


export default function ProductTableComponent(props) {
       return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(props.products).map((category) => {
                        var row = []
                        row.push(<tr key={category} className="category">
                            <td>{category}</td>
                        </tr>);
                        row.push(props.products[category].map((product)=>{
                            return <ProductItem key={product.name} product={product} />
                        }));
                        return row;
                    })}
                </tbody>
            </table>
       );
    
        
   
    
}