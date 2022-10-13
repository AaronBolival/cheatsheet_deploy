import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Abap from './Components/Abap';
import './styles/main.css';
import { BrowserRouter as Router,
         Routes as Switch,
         Route
       } from 'react-router-dom';



function App() {
  return (
    <div className="App">  
          <Router>
          <Navbar />
            <Switch>
              <Route exact path="/" element={Home} />
              <Route exact path="/Abap" element={Abap} />           
            </Switch>
          </Router>
    
    </div>
  );
}

export default App;
