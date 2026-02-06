import './App.css'
import Navbar from './components/Navbar.jsx'
import ItemList from './components/ItemListContainer.jsx'
import CardDescription from './components/services/listCardDescription.jsx'
import ShowByCategory from './components/categoryShow.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'
import Cart from './components/cart.jsx'

function App() {
  return (
    <CartProvider>
       <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route exact path='/' element ={<ItemList/>}/>
            <Route exact path='/products/:id' element={<CardDescription/>}/>
            <Route exact path='/products/category/:cat' element={<ShowByCategory/>}/>
            <Route exact path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
export default App
