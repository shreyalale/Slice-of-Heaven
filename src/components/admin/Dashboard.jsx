import React from 'react';
import { Link } from 'react-router-dom';
 
const Dashboard = () => {
  const stats = [
    { title: 'Total Orders', value: '150' },
    { title: 'Active Orders', value: '25' },
    { title: 'Total Revenue', value: '₹3,250' },
    { title: 'Total Users', value: '450' },
  ];
 
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <header style={styles.header}>
          <span>Dashboard</span>
        </header>
 
        {/* Stats Section */}
        <div style={styles.statsSection}>
          {stats.map((stat, index) => (
            <div key={index} style={styles.statCard}>
              <div style={styles.statTitle}>{stat.title}</div>
              <div style={styles.statValue}>{stat.value}</div>
            </div>
          ))}
        </div>
 
        {/* Recent Orders Section */}
        <div style={styles.card}>
          <div style={styles.cardTitle}>Recent Orders</div>
          <ul style={styles.list}>
            <li>Order #001 - Delivered</li>
            <li>Order #002 - In Progress</li>
            <li>Order #003 - Cancelled</li>
          </ul>
        </div>
 
        {/* Popular Items Section */}
        <div style={styles.card}>
          <div style={styles.cardTitle}>Popular Items</div>
          <ul style={styles.list}>
            <li>Pepperoni Pizza - 30 orders</li>
            <li>Chicken Alfredo Pizza - 20 orders</li>
            <li>Veggie Pizza - 15 orders</li>
 
          </ul>
        </div>
      </div>
    </div>
  );
};
 
const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#eef2f7',
  },
  content: {
    padding: '30px',
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: '10px',
    marginLeft: '20px',
    overflowY: 'auto',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontSize: '26px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#333',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statsSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
  statCard: {
    padding: '20px',
    background: 'linear-gradient(135deg, #ff9a9e, #fad0c4)',
    color: '#333',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    fontSize: '18px',
    transition: '0.3s ease',
    cursor: 'pointer',
  },
  statTitle: {
    fontSize: '14px',
    color: '#555',
  },
  statValue: {
    fontSize: '22px',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    transition: '0.3s ease',
    marginBottom: '20px',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
};
 
export default Dashboard;