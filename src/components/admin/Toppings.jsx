import React, { useState, useEffect } from "react";
import api from "../../utils/api";

const Toppings = () => {
  const [toppings, setToppings] = useState([]);
  const [newTopping, setNewTopping] = useState({ type: "VEG", name: "", price: "" });
  const [editingId, setEditingId] = useState(null);

  const fetchToppings = async () => {
    try {
      const response = await api.get('/toppings');
      setToppings(response.data);
    } catch (error) {
      console.error("Error fetching toppings:", error);
    }
  };

  useEffect(() => {
    fetchToppings();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await api.put(`/toppings/${editingId}`, newTopping);
      } else {
        await api.post('/toppings', newTopping);
      }
      setNewTopping({ type: "VEG", name: "", price: "" });
      setEditingId(null);
      fetchToppings();
    } catch (error) {
      console.error("Error saving topping:", error);
    }
  };

  const handleEdit = (topping) => {
    setNewTopping({ type: topping.type, name: topping.name, price: topping.price });
    setEditingId(topping.id);
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/toppings/${id}`);
      fetchToppings();
    } catch (error) {
      console.error("Error deleting topping:", error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Manage Toppings</h2>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-bold mb-4">{editingId ? "Edit Topping" : "Add New Topping"}</h3>
        <form onSubmit={handleSubmit} className="flex gap-4">
          <select
            value={newTopping.type}
            onChange={(e) => setNewTopping({ ...newTopping, type: e.target.value })}
            className="p-2 border rounded"
            required
          >
            <option value="VEG">Veg</option>
            <option value="NON_VEG">Non-Veg</option>
          </select>

          <input
            type="text"
            placeholder="Topping Name"
            value={newTopping.name}
            onChange={(e) => setNewTopping({ ...newTopping, name: e.target.value })}
            className="flex-1 p-2 border rounded"
            required
          />

          <input
            type="number"
            placeholder="Price"
            value={newTopping.price}
            onChange={(e) => setNewTopping({ ...newTopping, price: e.target.value })}
            className="w-32 p-2 border rounded"
            required
          />

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            {editingId ? "Update" : "Add"}
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Toppings List</h3>
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Type</th>
              <th className="text-left py-2">Name</th>
              <th className="text-left py-2">Price</th>
              <th className="text-right py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {toppings.map((topping) => (
              <tr key={topping.id} className="border-b">
                <td className="py-2">{topping.type}</td>
                <td className="py-2">{topping.name}</td>
                <td className="py-2">₹{topping.price}</td>
                <td className="py-2 text-right">
                  <button onClick={() => handleEdit(topping)} className="text-blue-500 mr-2">Edit</button>
                  <button onClick={() => handleDelete(topping.id)} className="text-red-500">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Toppings;