import React,{ useState } from "react";
import "./App.css";
import About from "./components/About";

import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {

  const [mode,setMode]=useState('light');       //for darkmode

  const [alertText,setAlert]=useState(null);    //created a simple js object called alertText

  const triggerAlert=(message,type)=>{          //we will invoke this message whenever we want to alert
    setAlert({
      mess:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='darkblue';
      triggerAlert("Darkmode turned on","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      triggerAlert("Darkmode turned off",'success');
    }
  }
  return (
    <>
    <Router>

      <Navbar title='TextTooL' mode={mode} toggleMode={toggleMode} />
      {/* <Navbar title={4} />              Gets error in console due to propTypes not match */}
      {/* <Navbar/>                   Gets Default prop */}

      <Alert alert={alertText} />


      <Routes>
          <Route exact path="/about" element={<About mode={mode} />}/>
          <Route path="/" element={<TextArea name="Enter Text Here" mode={mode} triggerAlert={triggerAlert}/>} />
      </Routes>

    </Router>
    </>
  );
}

export default App;
