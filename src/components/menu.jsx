import React, { useState, useEffect } from "react";
import api from "../utils/api";

function Menu() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetchPizzas();
  }, []);

  const fetchPizzas = async () => {
    try {
      const response = await api.get("/pizzas/all");
      setPizzas(response.data);
    } catch (error) {
      console.error("Error fetching pizzas:", error);
    }
  };

  const addToCart = async (pizza) => {
    const userEmail = localStorage.getItem("email");
    if (!userEmail) {
      alert("Please log in to add items to the cart.");
      return;
    }

    try {
      await api.post(`/cart/add?userEmail=${userEmail}`, [pizza]);
      alert("Pizza added to cart!");
    } catch (error) {
      console.error("Error adding pizza to cart:", error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Our Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pizzas.map((pizza) => (
          <div
            key={pizza.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <img
              src={pizza.imageUrl || "https://via.placeholder.com/150"}
              alt={pizza.name}
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/150";
              }}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">{pizza.name}</h3>
              <p className="text-gray-600 mt-1">{pizza.description}</p>
              <span className="block text-2xl font-bold text-orange-600 mt-2">₹ {pizza.price}</span>
              <button
                onClick={() => addToCart(pizza)}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
