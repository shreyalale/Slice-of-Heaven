import React, { useState, useEffect } from "react";
import api from "../../utils/api";

const Rewards = () => {
  const [rewards, setRewards] = useState([]);
  const [newReward, setNewReward] = useState({
    rewardName: "",
    pointsRequired: "",
    description: "",
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchRewards();
  }, []);

  const fetchRewards = async () => {
    try {
      const response = await api.get('/rewards');
      setRewards(response.data);
    } catch (error) {
      console.error("Error fetching rewards:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await api.put(`/rewards/admin/${editingId}`, newReward);
      } else {
        await api.post('/rewards/admin', newReward);
      }
      setNewReward({ rewardName: "", pointsRequired: "", description: "" });
      setEditingId(null);
      fetchRewards();
    } catch (error) {
      console.error("Error saving reward:", error);
    }
  };

  const handleEdit = (reward) => {
    setNewReward({
      rewardName: reward.rewardName,
      pointsRequired: reward.pointsRequired,
      description: reward.description,
    });
    setEditingId(reward.id);
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/rewards/admin/${id}`);
      fetchRewards();
    } catch (error) {
      console.error("Error deleting reward:", error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Manage Rewards</h2>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-bold mb-4">
          {editingId ? "Edit Reward" : "Add New Reward"}
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Reward Name</label>
              <input
                type="text"
                value={newReward.rewardName}
                onChange={(e) =>
                  setNewReward({ ...newReward, rewardName: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Points Required</label>
              <input
                type="number"
                value={newReward.pointsRequired}
                onChange={(e) =>
                  setNewReward({ ...newReward, pointsRequired: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-2">Description</label>
              <textarea
                value={newReward.description}
                onChange={(e) =>
                  setNewReward({ ...newReward, description: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {editingId ? "Update Reward" : "Add Reward"}
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Rewards List</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rewards.map((reward) => (
            <div key={reward.id} className="border p-4 rounded">
              <h4 className="font-bold">{reward.rewardName}</h4>
              <p className="text-sm text-gray-500 mb-2">{reward.description}</p>
              <p className="text-blue-500">{reward.pointsRequired} points</p>
              <div className="mt-4">
                <button
                  onClick={() => handleEdit(reward)}
                  className="text-blue-500 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(reward.id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rewards;