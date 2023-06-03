import logo from './logo.svg';
import './App.css';
import Home from "./Components/Welcome"
import WrongPath from "./Components/WrongPath"
import ProductDetails from "./Components/ProductDetails"
import Header from "./Components/Header"
import About from './Components/About';
import { Route, Routes } from 'react-router-dom';
function App() { 
 
  return(
    <>
      <Header/>
      
        <Routes>
          <Route path="/" element={<Home/>}  />
          <Route path="xxx" element={<About/>}  />
          <Route path="product/:id" element={<ProductDetails/>}  />
          <Route path="*" element={<WrongPath/>}/>
        </Routes>

    </>
    // <Test/>
    
  )
     
  
}



export default App;

