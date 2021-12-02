import React from 'react'
import ProductRow from './ProductRow'

export default function ProductTable(props){
    const products = props.products
    return (
        <div>
            <table>
                <tr>
                  <th>Category</th>
                  <th>Name</th>
                  <th>Stocked</th>
                  <th>Price</th>
                </tr>
                {products.map((product, index)=>{
                return <ProductRow key={index} data={product} />
                })}
            </table>
            
        </div>
    )
}