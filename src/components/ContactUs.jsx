import React from "react";

const ContactUs = () => {
  const styles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
      width: "90%",
      maxWidth: "1200px",
      margin: "50px auto",
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
    },
    mapContainer: {
      flex: "1 1 50%",
      minHeight: "400px",
    },
    iframe: {
      width: "100%",
      height: "100%",
      border: "none",
    },
    detailsFormContainer: {
      flex: "1 1 50%",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: "#f4f4f4",
    },
    details: {
      marginBottom: "20px",
    },
    detailsHeading: {
      fontSize: "24px",
      marginBottom: "10px",
      color: "#333",
    },
    detailsText: {
      margin: "5px 0",
      fontSize: "16px",
      color: "#555",
    },
    icon: {
      color: "#ff4b5c",
      marginRight: "10px",
    },
    formContainer: {
      marginTop: "20px",
    },
    formHeading: {
      fontSize: "24px",
      color: "#333",
      marginBottom: "10px",
    },
    formGroup: {
      marginBottom: "15px",
    },
    label: {
      display: "block",
      fontSize: "14px",
      color: "#555",
      marginBottom: "5px",
    },
    input: {
      width: "100%",
      padding: "10px",
      fontSize: "14px",
      border: "1px solid #ddd",
      borderRadius: "5px",
    },
    textarea: {
      width: "100%",
      padding: "10px",
      fontSize: "14px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      resize: "none",
      height: "80px",
    },
    button: {
      backgroundColor: "#ff4b5c",
      color: "#fff",
      padding: "10px 20px",
      fontSize: "16px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#e33b4a",
    },
  };

  return (
    <div style={styles.container}>
      {/* Map Section */}
      <div style={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8096852503955!2d73.0542462!3d19.0258994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24cce39457b%3A0x8bd69eab297890b0!2sCentre%20for%20Development%20of%20Advanced%20Computing%20(CDAC)!5e0!3m2!1sen!2sin!4v1696934738032!5m2!1sen!2sin
"
          title="Google Map"
          style={styles.iframe}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Details and Form */}
      <div style={styles.detailsFormContainer}>
        {/* Contact Details */}
        <div style={styles.details}>
          <h2 style={styles.detailsHeading}>Meet us</h2>
          <p style={styles.detailsText}>
            <i className="fa fa-phone" style={styles.icon}></i> +91 9766993930
          </p>
          <p style={styles.detailsText}>
            <i className="fa fa-map-marker" style={styles.icon}></i> CDAC,
            Raintree Marg, near Bharati Vidyapeeth, Sector 7, CBD Belapur, Navi Mumbai, Maharashtra 400614
          </p>
          <p style={styles.detailsText}>
            <i className="fa fa-envelope" style={styles.icon}></i>{" "}
            info@sliceofheaven.co.in
          </p>
        </div>

        {/* Contact Form */}
        <div style={styles.formContainer}>
          <h2 style={styles.formHeading}>Get in Touch</h2>
          <form>
            <div style={styles.formGroup}>
              <label htmlFor="name" style={styles.label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your Name"
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter a valid email address"
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="message" style={styles.label}>
                How can we help?
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                required
                style={styles.textarea}
              ></textarea>
            </div>
            <button
              type="submit"
              style={styles.button}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = styles.button.backgroundColor)
              }
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
