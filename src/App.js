import About from "./About";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./Textform";
import React, { useState } from 'react'
import Alert from "./Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const[mode,setMode]= useState('light');
  const[alert,setAlert]= useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
       setAlert(null);
    },2000);
  }
  const toggleMode = ()=>{
    if(mode ==="light"){
      setMode ('dark');
      document.body.style.backgroundColor='#585858';
      showAlert("Dark mode has been enabled","Success");
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","Success");
    }

  }
  return (
    <>
    <Router>
      <Navbar title = "Diwali_2021" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <Textform heading = 'Enter the text below' mode={mode}/>
          </Route>
        </Switch>
     
      </div>  
      </Router>    
    </>
  );
}

export default App;

