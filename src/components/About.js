import React, { useState } from "react";

export default function About(props) {
  
  const [buttonText,setButton]=useState('Turn on Dark Mode')

  let customStyle={
      backgroundColor:props.mode==='light'?'white':'darkblue',
      color:props.mode==='light'?'black':'white'
  }

  return (
    <div className="container p-4" style={customStyle}>
      <h2>About Us</h2>
      <div className="accordion" id="accordionExample" style={customStyle}>
        <div className="accordion-item" style={customStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={customStyle}
            >
              Website
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This Website allow us to convert our text to Uppercase as well as
               to lowercase and copy the text to clipboard. It also tells us 
               the number of words and number of characters in the text
            </div>
          </div>
        </div>
        <div className="accordion-item" style={customStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={customStyle}
            >
              Technology
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This website is created using Reactjs and Bootstrap. 
              It has a dark mode too . React Router is used to 
              routing between pages which makes it a Single Page 
              Application
            </div>
          </div>
        </div>
        <div className="accordion-item" style={customStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={customStyle}
            >
              Developer
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              I aditya have developed this website for practicing the 
              Reactjs.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
