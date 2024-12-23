import './App.css'
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
 
  const handleToggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark Mode has been enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
    }
  }
  return (
    <>
    <Router>
              <Navbar title="StringStudio" about="About" mode={mode} toggleMode={handleToggleMode}/>
              <Alert alert={alert}/>
              <div className="container">
                    <Routes>   
                        <Route exact path="/about" element={<About mode={mode}/>} />
                        <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>} />
                   </Routes>
              </div> 
             
   </Router>
   
    </>
  );
}

export default App;
