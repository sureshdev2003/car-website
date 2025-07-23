import React from 'react';
import './Footer.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>Dr.Drivers</h2>
          <p>© 2025 Dr.Drivers.</p>
        </div>
          <div className="footer-map">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.6243021495657!2d77.7263703!3d8.7271784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b041150e702fb9b%3A0x9dc459b8cc0f579e!2sVSOFT%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1753290849654!5m2!1sen!2sin"
    width="100%"
    height="200"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google Map"
  ></iframe>
</div>
        <div className="footer-contact">
          <div>
            <FaMapMarkerAlt /> <strong>Office</strong><br />
            4517 Washington Ave.<br />
            Manchester, Kentucky 39495
          </div>
          <div>
            <FaEnvelope /> <strong>Email</strong><br />
            info@example.io
          </div>
          <div>
            <FaPhone /> <strong>Phone</strong><br />
            +(378) 555-0108
          </div>


        </div>

        <div className="footer-links">
          <div>
            <h4>WHAT WE DO</h4>
            <ul>
              <li>Intercity Rides</li>
              <li>24/7 Road Assistant</li>
              <li>Chauffeur Services</li>
              <li>Long-Term Leasing</li>
              <li>Airport Transfers</li>
              <li>Business Travel Packages</li>
            </ul>
          </div>

          <div>
            <h4>HOME</h4>
            <ul>
              <li>About us</li>
              <li>Services</li>
              <li>Car Fleet</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div>
            <h4>RESOURCES</h4>
            <ul>
              <li>Reviews</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Cancellation Policy</li>
              <li>License</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Designed by <a href="#">Crompton</a>. Powered by <a href="#">Life</a>.</p>
        <div className="social-links">
          <button>Facebook</button>
          <button>Instagram</button>
          <button>Twitter</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
