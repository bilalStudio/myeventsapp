import React, {useEffect, useState} from 'react';

function UseEffectTimer(props) {
    const [count ,setCount]=useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=>count+1)
        },1000)

    },[])/*<--an empty brackets here to stop the useEffect if you remove this then timer is not stop */
    return (
        <div>
            <h2>This is rendered {count} times</h2>
        </div>
    );
}

export default UseEffectTimer;