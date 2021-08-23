import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 // Link
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light'); // whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert= (message,type,theme)=>{
    setAlert({
      msg: message ,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been enabled","success ");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled","success ");
      document.title = 'TextUtils - Light Mode';
    }
    
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          </Route>
      </Switch>
       </div>
      </Router>
    </>
  );
}

export default App;
