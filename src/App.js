import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Homepage/Home'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductPage from './Pages/Product/ProductPage';
import About from './Pages/Extra/About';
import Contact from './Pages/Extra/Contact';
import Login from './Pages/Auth/Login';
import Signup from './Pages/Auth/SignUp';
import ForgotPassword from './Pages/Auth/ForgotPassword';
import Cart from './Pages/Cart/Cart';
import UserProfile from './Pages/User/UserProfile';
import FAQ from './Pages/Extra/FAQ';
import Termsandconditions from './Pages/Extra/Termsandconditions';
import PrivacyPolicy from './Pages/Extra/PrivacyPolicy';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:prodid" 
          element={
            <ProductPage/>
          }
        />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path='/user/:activepage' element={<UserProfile/>} />
        <Route path="/FAQ" element={<FAQ/>} />
        <Route path="/termsandconditions" element={<Termsandconditions/>} />
        <Route path="/privacypolicy" element={<PrivacyPolicy/>} />

        <Route path="*" element={<div>
          <h1>404 NOT FOUND</h1>
        </div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App