// import './App.css';
// import About from './Components/About';
import { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";

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

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setTextMode('light');
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      setTextMode('dark');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  const redMode = () => {
    setMode('danger');
    setTextMode('light');
    document.body.style.backgroundColor = '#ff6666';
    textMode === 'dark' || 'light' ? setTextMode('light') : setTextMode('dark');
    showAlert('Red mode has been enabled', 'success');
  }


  return (
    <div className="App">
      <Navbar
        title="TextUtils"
        aboutText="About Us"
        toggleMode={toggleMode}
        redMode = {redMode}
        textMode = {textMode}
        mode={mode}
      />
      <Alert alert={alert} />
      <div className="container">
        <TextForm heading="Enter the text to utilize" textMode = {textMode} mode={mode} showAlert={showAlert} />
        {/* <About /> */}
      </div>
    </div>
  );
}

export default App;
