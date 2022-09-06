import React,{useState} from 'react';
//Using Hooks with object
function HooksMergeState() {
    const [name ,changeName]=useState({firstname:'',lastname:''})
    return (
        <div>
            <h1>Form</h1>

            <label>First Name</label>
            <input type={'text'} value={name.firstname} onChange={e=>changeName({...name ,firstname:e.target.value})} />
            <label>Last Name</label>
            <input type={'text'} value={name.lastname} onChange={e=>changeName({...name ,lastname:e.target.value})} />
        <h3>{JSON.stringify(name)}</h3>
        </div>
    );
}

export default HooksMergeState;