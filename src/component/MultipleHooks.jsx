import React,{useState} from 'react';

function MultipleHooks() {
    const [color,changeColor]=useState('Blue');
    const [model,changeModel]=useState('Mustang');
    const [year,changeYear]=useState('2015');
    const [clas,changeClass]=useState('S');
    const [hp,changeHp]=useState('600');
    return (
        <div>
            <h1>Multiple Hooks</h1>
            <p>The color of my Car is {color}</p>
            <p>The model of my Car is {model}</p>
            <p>The year of my Car is {year}</p>
            <p>The class of my Car is {clas}</p>
            <p>The hospower of my Car is {hp}</p>
        </div>
    );
}

export default MultipleHooks;