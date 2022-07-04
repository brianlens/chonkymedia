import React from 'react';
//import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Home from './Home';
import About from './About';
import Photo from './Photo';
import Digital from './Digital';
import Food from './Food';

function App()  { 
  return (
    <Router>
      <div className="App">
        <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/aboutchonky' element={<About />}></Route>
            <Route path='/chonkyphotos' element={<Photo />}></Route>
            <Route path='/digitalchonk' element={<Digital />}></Route>
            <Route path='/chonkyfood' element={<Food />}></Route>
          </Routes> 
        <Footer />
      </div>
    </Router>
  );
}

export default App;