import React, { useState } from 'react'

export default function TextArea(props) {
    const [enterText,setText]= useState('enter the Text');

    const upperCaseFunc=()=>{
        let newText=enterText.toUpperCase();
        setText(newText);
        props.triggerAlert("UpperCASING is done","success")
    };

    const handleOnchange=(event)=>{
        console.log('On change is triggered')
        setText(event.target.value);
    };
  return (
    <>
        <div className={`container text-${props.mode==="dark"?"white":"dark"}`}>
            <h1>{props.name}</h1>
            <div className="mb-3">
                <textarea onChange={handleOnchange} value={enterText} className="form-control" id="exampleFormControlTextarea1" rows="6" style={{backgroundColor:props.mode==="dark"?"#050b30":"white" ,color:props.mode==="dark"?"white":"black"}}></textarea>
            </div>
            <button disabled={enterText.length===0} className="btn btn-success" onClick={upperCaseFunc}>Change to Uppercase</button>
        </div>
        <div className={`container my-4 text-${props.mode==="dark"?"light":"dark"}`}>

            <h2>Your Text Summary</h2>
            <p>There are {enterText.split(" ").filter((element)=>{return element.length!==0;}).length} words and {enterText.length} characters in Text </p>
        </div>
    </>
  );
}
