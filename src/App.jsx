import './App.css'
import Navbar from './components/Navbar.jsx'
import ItemList from './components/ItemListContainer.jsx'
import CardDescription from './components/services/listCardDescription.jsx'
import ShowByCategory from './components/categoryShow.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route exact path='/' element ={<ItemList/>}/>
            <Route exact path='/products/:id' element={<CardDescription/>}/>
            <Route exact path='/products/category/:cat' element={<ShowByCategory/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
