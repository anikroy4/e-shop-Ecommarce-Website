import Home from './pages/homepage/Home'
import { Route, Routes } from 'react-router-dom'
import ProductList from './pages/productlist/ProductList'
import ProductDetails from './pages/productdetails/ProductDetails'
import CheckOutPage from './pages/checkout/CheckOutPage'
import ContactPage from './pages/contact/ContactPage'
import BlogPage from './pages/blogpage/BlogPage'
import RootLayout from './components/rootlayouts/RootLayout'
function App() {
   

  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/contact" element={<ContactPage />} />      
      </Route>
      
    </Routes>
  )
}

export default App
