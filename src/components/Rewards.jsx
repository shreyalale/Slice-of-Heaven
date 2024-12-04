import React from 'react';
import { useCart } from '../context/CartContext';

const rewards = [
  {
    id: 1,
    title: 'Free Garlic Bread',
    description: 'Complimentary garlic bread with your next order',
    points: 100,
    image: 'https://images.unsplash.com/photo-1573140401552-3fab0b24306f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    title: 'Free Regular Pizza',
    description: 'Get any regular size pizza for free',
    points: 300,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591'
  },
  {
    id: 3,
    title: 'Special Discount',
    description: '20% off on your next order',
    points: 200,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'
  }
];

const Rewards = () => {
  const { state, dispatch } = useCart();

  const claimReward = (points) => {
    if (state.points >= points) {
      dispatch({ type: 'ADD_POINTS', payload: -points });
      alert('Reward claimed successfully!');
    } else {
      alert('Not enough points to claim this reward');
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Rewards</h1>
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🎁</span>
          <span className="text-xl font-semibold">{state.points} points</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rewards.map((reward) => (
          <div key={reward.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={reward.image}
              alt={reward.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{reward.title}</h3>
              <p className="text-gray-600 mb-4">{reward.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-orange-500 font-semibold">
                  {reward.points} points
                </span>
                <button
                  onClick={() => claimReward(reward.points)}
                  className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
                >
                  Claim Reward
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rewards;