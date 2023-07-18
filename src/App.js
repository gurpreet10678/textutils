import './App.css';
// import About from './Components/About';
import { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
// import { BrowserRouter as Router,
//           Route,        
//           Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");
  const [textMode, setTextMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const colorMode = (event) => {
    let rcvdColor = event.target.value;
    setMode(rcvdColor);
    setTextMode(rcvdColor);
    if (rcvdColor === 'dark') {
      document.body.style.backgroundColor = '#6C757D';
      setTextMode('light');
    }else if(rcvdColor === 'danger'){
      document.body.style.backgroundColor = '#FA3C50';
      setTextMode('light');
    }
    else{
      document.body.style.backgroundColor = '#ffffff';
      setTextMode('dark')
    }
    showAlert("Dark Mode has been enabled", "success"); 
  }


  return (
    <div className="App">
      {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About Us" colorMode = {colorMode} textMode = {textMode} mode={mode} />
      <Alert alert={alert} />
      <div className="container">
     
        {/* <Routes>
          <Route path="/about" element={<About />} />
          <Route path='/'
            element={ */}
            <TextForm heading="Enter the text to utilize" textMode = {textMode} mode={mode} showAlert={showAlert} />
            {/* } >
          </Route>
        </Routes> */}
      </div>
      
        
    {/* </Router> */}
    </div> 
    
  );
}

export default App;
