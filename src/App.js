import React,{ useState } from "react";
import "./App.css";
import About from "./components/About";

import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";

function App() {

  const [mode,setMode]=useState('light');

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='darkblue';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
      <Navbar title='TextTooL' mode={mode} toggleMode={toggleMode} />
      {/* <Navbar title={4} />              Gets error in console due to propTypes not match */}
      {/* <Navbar/>                   Gets Default prop */}



      <TextArea name="Enter Text Here" mode={mode} />



      {/* <About/> */}
    </>
  );
}

export default App;
