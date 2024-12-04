import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({
    usernameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
    phoneNumberError: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const phoneRegex = /^[6-9]\d{9}$/;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    switch (name) {
      case "username":
        setErrors({
          ...errors,
          usernameError: !usernameRegex.test(value)
            ? "Username must be 3-15 characters, letters, numbers, or underscores."
            : "",
        });
        break;
      case "email":
        setErrors({
          ...errors,
          emailError: !emailRegex.test(value) ? "Enter a valid email address." : "",
        });
        break;
      case "password":
        setErrors({
          ...errors,
          passwordError: !passwordRegex.test(value)
            ? "Password must be at least 8 characters, with uppercase, lowercase, number, and special character."
            : "",
        });
        break;
      case "confirmPassword":
        setErrors({
          ...errors,
          confirmPasswordError:
            value !== formData.password ? "Passwords do not match." : "",
        });
        break;
      case "phoneNumber":
        setErrors({
          ...errors,
          phoneNumberError: !phoneRegex.test(value)
            ? "Enter a valid 10-digit phone number starting with 6-9."
            : "",
        });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const isFormValid =
      !errors.usernameError &&
      !errors.emailError &&
      !errors.passwordError &&
      !errors.confirmPasswordError &&
      !errors.phoneNumberError &&
      formData.username &&
      formData.email &&
      formData.password &&
      formData.confirmPassword &&
      formData.phoneNumber;

    if (isFormValid) {
      alert("Signup successful!");
    } else {
      alert("Please fix the errors before submitting.");
    }
  };

  return (
    <div style={styles.formPage}>
      <div style={styles.formContainer}>
        <h2>Signup</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
          {submitted && errors.usernameError && (
            <p style={styles.error}>{errors.usernameError}</p>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
          {submitted && errors.emailError && (
            <p style={styles.error}>{errors.emailError}</p>
          )}

          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
          {submitted && errors.phoneNumberError && (
            <p style={styles.error}>{errors.phoneNumberError}</p>
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
          {submitted && errors.passwordError && (
            <p style={styles.error}>{errors.passwordError}</p>
          )}

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
          {submitted && errors.confirmPasswordError && (
            <p style={styles.error}>{errors.confirmPasswordError}</p>
          )}

          <button type="submit" style={styles.button}>
            Signup
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login" style={styles.link}>
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  formPage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f4f4f9",
  },
  formContainer: {
    background: "#fff",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    width: "100%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  button: {
    padding: "10px",
    border: "none",
    borderRadius: "4px",
    background: "#5a67d8",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
  },
  buttonHover: {
    background: "#434190",
  },
  error: {
    color: "red",
    fontSize: "12px",
  },
  link: {
    color: "#5a67d8",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Signup;
