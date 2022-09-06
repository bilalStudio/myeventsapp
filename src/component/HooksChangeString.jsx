import React ,{useState} from 'react';

const HooksChangeString=()=> {
    const [color,changeColor]=useState('blue');
    return (
        <div>
            <h1>Color is {color}</h1>
            <button onClick={()=>changeColor('red')} >Red</button>
            <button onClick={()=>changeColor('yellow')} >Yellow</button>
            <button onClick={()=>changeColor('Blue')}>Blue</button>
            <button onClick={()=>changeColor('Black')} >Black</button>
        </div>
    );
}

export default HooksChangeString;