import React from 'react';
import './App.css';
import Home from './components/pages/home';
import chitietchuongtrinh from './components/pages/chitietchuongtrinh';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    
      
      <Router>

        <Routes>
         
          <Route path='/' Component={Home} />
          <Route path='/chitietchuongtrinh' Component={chitietchuongtrinh}/>
    
        </Routes>
        
      </Router>
      
    
  );
}

export default App;
