import './App.css'
import { Routes, Route, Link, Navigate, Outlet } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Product from './components/Product'
import Dashboard from './components/Dashboard'
import Orders from './components/Orders'
import Profile from './components/Profile'
import Settings from './components/Settings'
import Checkout from './components/Checkout'
import Login from './components/Login' // Giả sử bạn có trang Login
import { useAuth } from './contexts/AuthContext'

// 1. Tạo component bọc để bảo vệ Route
const ProtectedRoute = ({ isAllowed, redirectPath = '/login' }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />; // Cho phép vào các route con bên trong
};

function App() {
  const { user } = useAuth();
  const isLoggedIn = !!user;

  return (
    <>
      <nav>
        <Link to='/'>Home</Link> | 
        <Link to='/about'>About</Link> | 
        <Link to='/contact'>Contact</Link> |  
        <Link to='/dashboard'>Dashboard</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/login' element={<Login />} />

        <Route element={<ProtectedRoute isAllowed={isLoggedIn} />}>
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='orders' element={<Orders />} />
            <Route path='profile' element={<Profile />} />
            <Route path='settings' element={<Settings />} />
          </Route>
          <Route path='/checkout' element={<Checkout />} />
        </Route>

        {/* 404 Route */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App