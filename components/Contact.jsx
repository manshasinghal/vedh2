import React from 'react';
import logo from '../images/logo1.png'


function Contact() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
       
          <h3 className="section-title">Quick Links</h3>
          <ul className="link-list">
            <li><a href="/">Home</a></li>
            <li><a href="/">Products</a></li>
            <li><a href="/">Cart</a></li>
            <li><a href="/">Checkout</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="section-title">Contact Us</h3>
          <p className="contact-info">123 Main Street</p>
          <p className="contact-info">City, State 12345</p>
          <p className="contact-info">Email: info@example.com</p>
        </div>
        <div className="footer-section">
          <h3 className="section-title">Follow Us</h3>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-square"></i></a>
            <a href="#"><i className="fab fa-twitter-square"></i></a>
            <a href="#"><i className="fab fa-instagram-square"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
