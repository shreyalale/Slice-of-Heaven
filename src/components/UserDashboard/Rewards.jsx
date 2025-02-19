import React from 'react';
import { Gift, Star, Trophy } from 'lucide-react';

function Rewards() {
  const rewards = {
    points: 750,
    tier: "Gold Member",
    nextTier: {
      name: "Platinum",
      pointsNeeded: 250
    },
    history: [
      {
        id: 1,
        date: '2024-03-15',
        points: 150,
        type: 'Earned',
        description: 'Order: Maharaja Special Pizza'
      },
      {
        id: 2,
        date: '2024-03-10',
        points: 200,
        type: 'Earned',
        description: 'Order: Family Feast Combo'
      },
      {
        id: 3,
        date: '2024-03-05',
        points: 400,
        type: 'Earned',
        description: 'Special Event Bonus'
      }
    ],
    benefits: [
      {
        id: 1,
        name: "Free Delivery",
        points: 200,
        description: "Get free delivery on your next order"
      },
      {
        id: 2,
        name: "Extra Toppings",
        points: 300,
        description: "Get 2 free toppings on any pizza"
      },
      {
        id: 3,
        name: "Dessert Special",
        points: 400,
        description: "Free Gulab Jamun with your next order"
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center mb-6">
        <Trophy className="w-8 h-8 text-yellow-500 mr-3" />
        <h2 className="text-3xl font-bold">Rewards Program</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-6 rounded-lg shadow-lg text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Current Balance</h3>
            <Star className="w-6 h-6" />
          </div>
          <p className="text-4xl font-bold mb-2">{rewards.points} points</p>
          <p className="text-sm opacity-90">Current Tier: {rewards.tier}</p>
          <div className="mt-4 text-sm">
            <p>{rewards.nextTier.pointsNeeded} points needed for {rewards.nextTier.name}</p>
            <div className="w-full bg-yellow-200 rounded-full h-2 mt-2">
              <div
                className="bg-white rounded-full h-2"
                style={{ width: `${(rewards.points / (rewards.points + rewards.nextTier.pointsNeeded)) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <Gift className="w-6 h-6 text-purple-500 mr-2" />
            <h3 className="text-xl font-semibold">Available Rewards</h3>
          </div>
          <div className="space-y-3">
            {rewards.benefits.map((benefit) => (
              <div key={benefit.id} className="border rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold">{benefit.name}</h4>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                  <button
                    className="px-4 py-2 bg-purple-500 text-white rounded-md text-sm hover:bg-purple-600"
                  >
                    {benefit.points} pts
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Points History</h3>
        <div className="space-y-4">
          {rewards.history.map((entry) => (
            <div key={entry.id} className="flex justify-between items-center border-b pb-3">
              <div>
                <p className="font-semibold">{entry.description}</p>
                <p className="text-sm text-gray-600">{entry.date}</p>
              </div>
              <div className="font-bold text-green-600">
                +{entry.points} points
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rewards;