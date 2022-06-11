import React from "react";

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import './App.css';
import { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert('dark mode has  been enabled', 'success');
      document.body.style.backgroundColor = "#000";
      document.body.style.color = "#fff";
    } else {
      setMode('light');
      showAlert('Light mode has  been enabled', 'success');
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";

    }
  }
  return (

    <div>
      {/* <Router> */}

      <Navbar titleUtils="Logo Here" aboutText="about here" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <Switch> */}
      {/* <Route exact path="/about"> */}
      <TextForm heading="this is heading" showAlert={showAlert} />
      <About />

      {/* </Route> */}
      {/* <Route exact path="/"> */}

      {/* </Route> */}
      {/* </Switch> */}

      {/* </Router> */}
    </div>


  );
}

export default App;
