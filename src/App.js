import React, { useState } from 'react'
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

export default function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark mode has been enabled", "success")
      document.title = "TextUtils - Dark Mode"
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert(" Light mode has been enabled", "success")
      document.title = "TextUtils - Light Mode"
    }
  }

  return (
    <>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <About mode={mode}/> */}
        <TextForm showAlert={showAlert} heading="Enter the Text Below" mode={mode} />
      
    </>
  )
}

