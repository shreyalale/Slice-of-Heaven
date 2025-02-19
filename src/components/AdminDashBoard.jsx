import React, { useState } from "react";

const AdminDashBoard = () => {
  const [activeSection, setActiveSection] = useState("add-item");
  const [items, setItems] = useState([]);
  const [toppings, setToppings] = useState([]);
  const [profile, setProfile] = useState({
    name: "Admin",
    email: "admin@example.com",
    password: "admin123",
  });

  const [orders, setOrders] = useState([
    { id: 1, status: "Pending" },
    { id: 2, status: "Processing" },
  ]);

  const handleAddItem = (event) => {
    event.preventDefault();
    const newItem = {
      type: event.target.type.value,
      name: event.target.name.value,
      description: event.target.description.value,
      size: event.target.size.value,
      price: event.target.price.value,
    };
    setItems([...items, newItem]);
    event.target.reset();
    alert("Item added successfully!");
  };

  const handleAddTopping = (event) => {
    event.preventDefault();
    const newTopping = {
      name: event.target.name.value,
      price: event.target.price.value,
    };
    setToppings([...toppings, newTopping]);
    event.target.reset();
    alert("Topping added successfully!");
  };

  const handleUpdateProfile = (event) => {
    event.preventDefault();
    setProfile({
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    });
    alert("Profile updated successfully!");
  };

  const handleChangeOrderStatus = (id, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div style={{ display: "flex", fontFamily: "Arial, sans-serif" }}>
      <aside
        style={{
          width: "250px",
          background: "#333",
          color: "#fff",
          height: "100vh",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <h2>Admin Dashboard</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {[
            { id: "add-item", label: "Add New Items" },
            { id: "add-topping", label: "Add New Toppings" },
            { id: "show-items", label: "Show Pizzas" },
            { id: "show-toppings", label: "Show Toppings" },
            { id: "orders", label: "Change Order Status" },
            { id: "profile", label: "View Profile" },
          ].map((section) => (
            <li
              key={section.id}
              style={{
                margin: "10px 0",
                cursor: "pointer",
                fontWeight: activeSection === section.id ? "bold" : "normal",
              }}
              onClick={() => setActiveSection(section.id)}
            >
              {section.label}
            </li>
          ))}
        </ul>
      </aside>

      <main style={{ flex: "1", padding: "20px", background: "#f4f4f4" }}>
        {activeSection === "add-item" && (
          <section>
            <h2>Add New Item</h2>
            <form onSubmit={handleAddItem}>
              <label>Type:</label>
              <select name="type" required>
                <option value="Veg">Veg</option>
                <option value="Non-Veg">Non-Veg</option>
                <option value="Beverages">Beverages</option>
                <option value="Pizza">Pizza</option>
              </select>
              <br />
              <label>Name:</label>
              <input type="text" name="name" required />
              <br />
              <label>Description:</label>
              <textarea name="description"></textarea>
              <br />
              <label>Size:</label>
              <input type="text" name="size" />
              <br />
              <label>Price:</label>
              <input type="number" name="price" required />
              <br />
              <button type="submit">Add Item</button>
            </form>
          </section>
        )}

        {activeSection === "add-topping" && (
          <section>
            <h2>Add New Topping</h2>
            <form onSubmit={handleAddTopping}>
              <label>Name:</label>
              <input type="text" name="name" required />
              <br />
              <label>Price:</label>
              <input type="number" name="price" required />
              <br />
              <button type="submit">Add Topping</button>
            </form>
          </section>
        )}

        {activeSection === "show-items" && (
          <section>
            <h2>Show Pizzas</h2>
            {items.length > 0 ? (
              <ul>
                {items.map((item, index) => (
                  <li key={index}>
                    {item.type} - {item.name} - {item.size} - ${item.price}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No items to show</p>
            )}
          </section>
        )}

        {activeSection === "show-toppings" && (
          <section>
            <h2>Show Toppings</h2>
            {toppings.length > 0 ? (
              <ul>
                {toppings.map((topping, index) => (
                  <li key={index}>
                    {topping.name} - ${topping.price}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No toppings to show</p>
            )}
          </section>
        )}

        {activeSection === "orders" && (
          <section>
            <h2>Change Order Status</h2>
            {orders.map((order) => (
              <div key={order.id}>
                <p>
                  Order #{order.id} - Status: {order.status}
                </p>
                <select
                  onChange={(e) =>
                    handleChangeOrderStatus(order.id, e.target.value)
                  }
                >
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            ))}
          </section>
        )}

        {activeSection === "profile" && (
          <section>
            <h2>View Profile</h2>
            <form onSubmit={handleUpdateProfile}>
              <label>Name:</label>
              <input type="text" name="name" defaultValue={profile.name} />
              <br />
              <label>Email:</label>
              <input type="email" name="email" defaultValue={profile.email} />
              <br />
              <label>Password:</label>
              <input
                type="password"
                name="password"
                defaultValue={profile.password}
              />
              <br />
              <button type="submit">Update Profile</button>
            </form>
          </section>
        )}
      </main>
    </div>
  );
};

export default AdminDashBoard;
