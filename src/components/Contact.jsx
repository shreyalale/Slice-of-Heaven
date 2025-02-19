import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div style={styles.center}>
      <h1><b>Contact Us</b></h1>
      <p>We’d love to hear from you! Feel free to reach out using the form below or the provided contact details.</p><br></br>
      
      {/* Contact Details */}
      <div>
        <h2><b>Our Information</b></h2>
        <p><b>Email:</b> info@sliceofheaven.co.in </p>
        <p><b>Phone:</b> +91 9766993930</p>
        <p><b>Address:</b> Near CDAC Kharghar, Mumbai, India </p>
      </div>

      
    </div>
  );
};

const styles = {

  center: {
    fontSize: '20px',
    padding: '20px'
  }
 }


export default Contact;


