import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';

export const cartContext=createContext();
function App() {

  const [cart,setCart]=useState([]);

  return (
    <>
      <div className=''>
       <cartContext.Provider value={{cart,setCart}}>
       <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
       </cartContext.Provider>
      </div>
    </>
  )
}

export default App;
