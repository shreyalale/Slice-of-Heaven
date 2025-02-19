import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrendingPizzas from "./components/TrendingPizzas";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Address from "./components/Address";
import Rewards from "./components/Rewards";
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";
import Menu from "./components/menu";
import Contactus from "./components/ContactUs";
 
// User Dashboard Components
import DashboardWelcome from "./components/UserDashboard/DashboardWelcome";
import Dashboard from "./components/UserDashboard/Dashboard";
import Profile from "./components/UserDashboard/Profile";
import Orders from "./components/UserDashboard/Orders";
import Addresses from "./components/UserDashboard/Addresses";
import Favourites from "./components/UserDashboard/Favourites";
import Payment from "./components/UserDashboard/Payment";
 
// Admin Components
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './components/admin/Dashboard';
import PizzaInventory from './components/admin/PizzaInventory';
import AdminToppings from './components/admin/Toppings';
import AdminRewards from './components/admin/Rewards';
import Users from './components/admin/Users';
 
import { CartProvider } from "./context/CartContext";
import "./index.css";
 
// Protected Route Components
const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('role');
  
  if (!token) {
    return <Navigate to="/login" />;
  }
  
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  }
  
  return children;
};
 
// Auth Check Component
const AuthRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (token) {
    const role = localStorage.getItem('role');
    return <Navigate to={role === 'ADMIN' ? '/admin' : '/dashboard'} />;
  }
  return children;
};
 

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Routes>
            <Route path="/admin/*" element={null} />
            <Route path="*" element={<Navbar />} />
          </Routes>
          
          <main className="flex-grow">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<><Hero /><TrendingPizzas /></>} />
              <Route path="/about" element={<Aboutus />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/contact" element={<Contactus />} />
 
              {/* Auth Routes */}
              <Route 
                path="/login" 
                element={
                  <AuthRoute>
                    <Login />
                  </AuthRoute>
                } 
              />
              <Route 
                path="/signup" 
                element={
                  <AuthRoute>
                    <Signup />
                  </AuthRoute>
                } 
              />
 
              {/* Protected Customer Routes */}
              <Route
                path="/cart"
                element={
                  <ProtectedRoute allowedRoles={['USER']}>
                    <Cart />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/checkout"
                element={
                  <ProtectedRoute allowedRoles={['USER']}>
                    <Checkout />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/address"
                element={
                  <ProtectedRoute allowedRoles={['USER']}>
                    <Address />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rewards"
                element={
                  <ProtectedRoute allowedRoles={['USER']}>
                    <Rewards />
                  </ProtectedRoute>
                }
              />
 
 <Route
  path="/payment"
  element={
    <ProtectedRoute allowedRoles={['USER']}>
      <Payment />
    </ProtectedRoute>
  }
/>

             
              {/* Protected User Dashboard Routes */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute allowedRoles={['USER']}>
                    <Dashboard />
                  </ProtectedRoute>
                }
              >
                <Route index element={<DashboardWelcome />} />
                <Route path="/dashboard/menu" element={<Menu />} />
                 <Route path="/dashboard/profile" element={<Profile />} />  
                <Route path="/dashboard/rewards" element={<Rewards />} />  
                <Route path="menu" element={<Menu />} />
                <Route path="cart" element={<Cart />} />
                <Route path="orders" element={<Orders />} />
                <Route path="addresses" element={<Addresses />} />
                <Route path="rewards" element={<Rewards />} />
                <Route path="profile" element={<Profile />} />
                <Route path="payment" element={<Payment />} />
                <Route path="favorite" element={<Favourites />} />
               
              </Route>
 
              {/* Protected Admin Routes */}
              <Route
                path="/admin"
                element={
                  <ProtectedRoute allowedRoles={['ADMIN']}>
                    <AdminLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<AdminDashboard />} />
                <Route path="inventory" element={<PizzaInventory />} />
                <Route path="toppings" element={<AdminToppings />} />
                <Route path="rewards" element={<AdminRewards />} />
                <Route path="users" element={<Users />} />
              </Route>
 
              {/* Catch-all route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
 
          <Routes>
            <Route path="/admin/*" element={null} />
            <Route path="*" element={<Footer />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}
 
export default App;