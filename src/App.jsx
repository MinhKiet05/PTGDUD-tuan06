
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Product from './components/Product'
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Orders from './components/Orders'
import Profile from './components/Profile'
import Settings from './components/Settings'


function App() {

  return (
    <>
    <nav>
      <Link to='/'>Home</Link> | 
      <Link to='/about'>About</Link> | 
        <Link to='/contact'>Contact</Link> |  
        <Link to = '/dashboard'>Dashboard</Link>
    </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/products/:id' element={<Product />}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route path='orders' element={<Orders></Orders>}/>
          <Route path='profile' element={<Profile></Profile>}/>
          <Route path='settings' element={<Settings></Settings>}/>
        </Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </>
  )
}

export default App
