import React, { useState, useEffect } from "react";
import api from "../utils/api";
 
function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);
  const userEmail = localStorage.getItem("email");
  const token = localStorage.getItem("token");
 
  useEffect(() => {
    if (userEmail && token) {
      fetchCart();
    } else {
      setError("Please log in to view your cart");
    }
  }, [userEmail, token]);
 
  const fetchCart = async () => {
    try {
      const response = await api.get(`/cart/${userEmail}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setCartItems(response.data.pizzas || []);
      setError(null);
    } catch (error) {
      console.error("Error fetching cart:", error);
      setError("Error loading cart");
    }
  };
 
  const clearCart = async () => {
    if (!userEmail || !token) {
      setError("Please log in to perform this action");
      return;
    }
 
    try {
      await api.delete(`/cart/clear/${userEmail}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setCartItems([]);
      setError(null);
    } catch (error) {
      console.error("Error clearing cart:", error);
      setError("Error clearing cart");
    }
  };
 
  const total = cartItems.reduce((sum, item) => sum + Number(item.price), 0);
 
  if (error) {
    return <div className="text-red-500">{error}</div>;
  }
 
 
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">₹{item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <p className="text-xl font-bold">Total: ₹{total.toFixed(2)}</p>
            <button
              onClick={clearCart}
              className="mt-4 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}
 
export default Cart;