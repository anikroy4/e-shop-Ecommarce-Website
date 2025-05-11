import Home from './pages/homepage/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ProductList from './pages/productlist/ProductList'
import ProductDetails from './pages/productdetails/ProductDetails'
import BlogPage from './pages/blog/blogPage'
import CheckOutPage from './pages/checkout/CheckOutPage'
import ContactPage from './pages/contact/ContactPage'
function App() {
   

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product-list" element={<ProductList />} />
      <Route path="/product-details" element={<ProductDetails />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/checkout" element={<CheckOutPage />} />
      <Route path="/contact" element={<ContactPage />} />
     
    </Routes>
  )
}

export default App
