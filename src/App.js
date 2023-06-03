import logo from './logo.svg';
import './App.css';
import Products from "./Components/Welcome"
import WrongPath from "./Components/WrongPath"
import ProductDetails from "./Components/ProductDetails"
import Header from "./Components/Header"
import Introduction from './Components/Introduction';
import { Route, Routes } from 'react-router-dom';
function App() { 
 
  return(
    <>
      <Header/>
      
        <Routes>
          <Route path="/" element={<Introduction/>}  />
          <Route path="pro" element={<Products/>}/>
          <Route path="product/:id" element={<ProductDetails/>}  />
          <Route path="*" element={<WrongPath/>}/>
        </Routes>

    </>

    
  )
     
  
}



export default App;

