import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const [countryCode, setCountryCode] = useState("+91");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    // Submit data to the API
    fetch("http://localhost:8080/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formData.username,
        email: formData.email,
        phoneNumber: `${countryCode}${formData.phoneNumber}`,
        password: formData.password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            try {
              const data = JSON.parse(text);
              throw new Error(data.message || "Signup failed");
            } catch {
              throw new Error(text || "An unexpected error occurred");
            }
          });
        }
        return response.json();
      })
      .then((data) => {
        setSuccessMessage("Signup successful! Redirecting...");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Signup</h1>
        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleInputChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Phone Number</label>
            <div style={styles.phoneContainer}>
              <select
                value={countryCode}
                onChange={handleCountryCodeChange}
                style={styles.select}
              >
                <option value="+91">+91 (IN)</option>
                <option value="+1">+1 (US)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+61">+61 (AU)</option>
                <option value="+81">+81 (JP)</option>
              </select>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                style={styles.input}
                maxLength="10"
                required
              />
            </div>
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              style={styles.input}
              required
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#ff6f61")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

// Inline CSS styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f8f9fa",
    padding: "40px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  inputGroup: {
    marginBottom: "15px",
    textAlign: "left",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
    boxSizing: "border-box",
  },
  phoneContainer: {
    display: "flex",
    alignItems: "center",
  },
  select: {
    padding: "10px",
    marginRight: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
    cursor: "pointer",
  },
  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.3s ease",
},
};