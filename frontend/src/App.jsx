import React from 'react'
import HomePage from './screens/HomePage'
import {Routes,Route} from 'react-router-dom'
import SignUp from './screens/SignUp'
import LogIn from './screens/LogIn'
import Card from './components/Card'
import Cart from './components/Cart.jsx'
import { CartProvider } from './components/ContextReducer.jsx'
const App = () => {
  return (
    
    <CartProvider>
    <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/signup" element={<SignUp />}></Route>
    <Route path="/login" element={<LogIn />}></Route>
    <Route path="/card" element={<Card />}></Route>
    <Route path="/cart" element={<Cart />}></Route>
    </Routes>
   
    </CartProvider>
    
  )
}

export default App