import React, {useEffect, useState} from 'react';

function HookUseEffect(props) {
const [count,setCount]=useState(0);
useEffect(()=>{
    document.title=count+'times clicked '
})
    return (
        <div>
            <button onClick={()=>setCount(count+1)} >Click to change effect</button>
            <p>Count: {count} </p>
        </div>
    );
}

export default HookUseEffect;