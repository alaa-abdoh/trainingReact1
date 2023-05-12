import logo from './logo.svg';
import './App.css';
import Warning from "./Components/Welcome"
import Button from "./Components/Classcomp"
import { useState } from 'react';
import ProductDetails from "./Components/ProductDetails"
import Header from "./Components/Header"
import About from './Components/About';
import { Route, Routes } from 'react-router-dom';
function App() { 
 
  return(
    <>
      <Header/>
      
        <Routes>
          <Route path="/" element={<Warning/>}  />
          <Route path="xxx" element={<About/>}  />
          <Route path="product/:id" element={<ProductDetails/>}  />
        </Routes>

    </>
    // <Test/>
    
  )
     
  
}



export default App;

