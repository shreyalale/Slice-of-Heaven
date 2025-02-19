import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Checkout = ({ userId }) => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/addresses/${userId}`);
        setAddresses(response.data);
      } catch (error) {
        console.error("Error fetching addresses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAddresses();
  }, [userId]);

  const handlePayment = async () => {
    try {
      await axios.post(`http://localhost:8080/api/orders?userId=${userId}&addressId=${selectedAddress}`);
      navigate("/payment");
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Select Address</h2>
      {addresses.map((address) => (
        <div key={address.id}>
          <input
            type="radio"
            name="address"
            value={address.id}
            onChange={(e) => setSelectedAddress(e.target.value)}
          />
          <p>{address.street}, {address.city}, {address.state}, {address.zipCode}</p>
        </div>
      ))}
      <button onClick={handlePayment}>Proceed to Payment</button>
    </div>
  );
};

export default Checkout;