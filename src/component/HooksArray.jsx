import React, {useState} from 'react';

function HooksArray() {
    const [items,setItems]=useState([])
    const addItems=()=>{
        setItems(
            [...items,{
                id:items.length,
                value:Math.floor(Math.random()*10)+1
            }]
        )
    }
    return (
        <div>
            <button onClick={addItems} >Add number</button>
        <ul>
        {items.map(
        item=>(
            <li key={item.id}>{item.value}</li>
        ))}
        </ul>
        </div>
    );
}

export default HooksArray;