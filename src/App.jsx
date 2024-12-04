import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrendingPizzas from './components/TrendingPizzas';
import Login from './components/Login';
import Signup from './components/Signup';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Address from './components/Address';
import Rewards from './components/Rewards';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import './index.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow pt-16">
            <Routes>
              <Route 
                path="/" 
                element={
                  <>
                    <Hero />
                    <TrendingPizzas />
                  </>
                } 
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/Address" element ={<Address />} />
              <Route path="/rewards" element={<Rewards />} />
              <Route path ="/Login"  element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;