import React, { useState, useEffect } from 'react';
import api from '../../utils/api';

const PizzaInventory = () => {
    const [pizzas, setPizzas] = useState([]);
    const [newPizza, setNewPizza] = useState({
        name: '',
        price: '',
        description: '',
        imageUrl: '',
    });

    useEffect(() => {
        fetchPizzas();
    }, []);

    const fetchPizzas = async () => {
        try {
            const response = await api.get('/pizzas/all');
            setPizzas(response.data);
        } catch (error) {
            console.error('Error fetching pizzas:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/pizzas/add', newPizza);
            setPizzas([...pizzas, response.data]);
            setNewPizza({ name: '', price: '', description: '', imageUrl: '' });
        } catch (error) {
            console.error('Error adding pizza:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await api.delete(`/pizzas/delete/${id}`);
            setPizzas(pizzas.filter(pizza => pizza.id !== id));
        } catch (error) {
            console.error('Error deleting pizza:', error);
        }
    };
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Pizza Inventory</h2>
 
      {/* Add New Pizza Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-bold mb-4">Add New Pizza</h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Name</label>
              <input
                type="text"
                value={newPizza.name}
                onChange={(e) => setNewPizza({ ...newPizza, name: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Price</label>
              <input
                type="number"
                value={newPizza.price}
                onChange={(e) => setNewPizza({ ...newPizza, price: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-2">Description</label>
              <textarea
                value={newPizza.description}
                onChange={(e) => setNewPizza({ ...newPizza, description: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-2">Image URL</label>
              <input
                type="url"
                value={newPizza.imageUrl}
                onChange={(e) => setNewPizza({ ...newPizza, imageUrl: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Pizza
          </button>
        </form>
      </div>
 
      {/* Pizza List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Pizza List</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="border p-4 rounded">
              <img src={pizza.imageUrl} alt={pizza.name} className="w-full h-48 object-cover rounded mb-2" />
              <h4 className="font-bold">{pizza.name}</h4>
              <p className="text-gray-600">₹{pizza.price}</p>
              <p className="text-sm text-gray-500">{pizza.description}</p>
              <button
                onClick={() => handleDelete(pizza.id)}
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
 
export default PizzaInventory;