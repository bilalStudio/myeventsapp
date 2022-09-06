import React, {useEffect, useState} from 'react';

function UseEffectWithDependency(props) {
    const [count,setCount]=useState(0);
    useEffect(
        ()=>{
            'hello';
        },[count]
    )

    return (
        <div>
            <button  onClick={()=>setCount(count+1)} >Click to perform side effect</button>
            <h1>Count: {count}</h1>
        </div>
    );
}

export default UseEffectWithDependency;