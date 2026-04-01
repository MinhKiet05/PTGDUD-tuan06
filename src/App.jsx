
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Product from './components/Product'
import { Routes,Route,Link } from 'react-router-dom'

function App() {

  return (
    <>
    <nav>
      <Link to='/'>Home</Link> | 
      <Link to='/about'>About</Link> | 
      <Link to='/contact'>Contact</Link> |  
    </nav>
      <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/about' element={<About/>}>About</Route>
        <Route path='/contact' element={<Contact/>}>Contact</Route>
        <Route path='/products/:id' element={<Product/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </>
  )
}

export default App
