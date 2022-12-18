
import Product from './page/Product'
import { Routes, Route } from 'react-router-dom'
import HomePage from './page/HomePage'
import Login from './page/Login'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/products' element={<Product />} />
    </Routes>
  )
}