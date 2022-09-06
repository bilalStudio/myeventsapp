import React, {useState} from 'react';

function HooksChangeState() {
    const [count, setCount]=useState(0);
    const incrementBy5=()=>{
        for(let i=0;i<5;i++){
            setCount(count =>count+1);
        }
    }
        return (
        <div>
            Button is Clicked {count} Times
            <button onClick={()=>setCount(count*0)} >Reset</button>
            <button onClick={()=>setCount(count+1)} >Increment</button>
            <button onClick={()=>setCount(count-1)} >Increment</button>
            <button onClick={incrementBy5} >Increment 5</button>

        </div>
    );
}

export default HooksChangeState;