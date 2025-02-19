import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isButtonHovered, setButtonHovered] = useState(false);
  const [isLinkHovered, setLinkHovered] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
  
    fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
      credentials: 'include'
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid credentials");
        }
        return response.json();
      })
      .then((data) => {
        // Store token and user info in localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.role);
        localStorage.setItem('email', data.email);
        localStorage.setItem('username', data.username);
        localStorage.setItem('userId', data.id); // Store user ID
  
        // Redirect based on role
        if (data.role === "ADMIN") {
          navigate("/admin");
        } else {
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        setError("Invalid email or password");
      });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Login</h1>
        <form onSubmit={handleSubmit}>
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
          {error && <p style={styles.error}>{error}</p>}
          <button
            type="submit"
            style={{
              ...styles.button,
              ...(isButtonHovered ? styles.buttonHover : {}),
            }}
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
          >
            Login
          </button>
        </form>
        <div style={styles.footer}>
          <span>Don't have an account? </span>
          <Link
            to="/signup"
            style={{
              ...styles.link,
              ...(isLinkHovered ? styles.linkHover : {}),
            }}
            onMouseEnter={() => setLinkHovered(true)}
            onMouseLeave={() => setLinkHovered(false)}
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f8f9fa",
    padding: "20px",
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
  dropdown: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
    backgroundColor: "#fff",
    color: "#555",
    cursor: "pointer",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
    boxSizing: "border-box",
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
    transition: "background-color 0.3s ease, transform 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#ff6f61",
    transform: "scale(1.05)",
  },
  footer: {
    marginTop: "15px",
    fontSize: "14px",
  },
  link: {
    color: "#e63946",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "color 0.3s ease",
  },
  linkHover: {
    color: "#d62828",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginBottom: "15px",
  },
};

export default Login;

