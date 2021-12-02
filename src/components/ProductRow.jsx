import React from 'react'
export default function ProductRow(props){
    const {category, price, stocked, name} = props.data
    return (
    <tr>
        <td>{category}</td>
        {stocked && <td>{name}</td>}
        {!stocked && <td className="red">{name}</td>}
        <td>{price}</td>
    </tr>
    )
}