import React from "react";
import "./Footer.css"; // Import the corresponding CSS file
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-brand"> 
          <div className="footer-logo">
            <img
              src="./images/logo.webp"
              alt="JobBox Logo"
              className="footer-logo-img"
            />
            <h2>Job Hunt</h2>
          </div>
          <div className="social-icons">
            <a href="facebook" className="social-icon" aria-label="Facebook">
            <FaFacebookSquare color="black" size={25}/>
            </a>
            <a href="twitter" className="social-icon" aria-label="Twitter">
            <FaTwitter color="black" size={25}/>
            </a>
            <a href="linkedin" className="social-icon" aria-label="LinkedIn">
            <FaLinkedin color="black" size={25}/>
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="about">About us</a></li>
              <li><a href="team">Our Team</a></li>
              <li><a href="contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Community</h4>
            <ul>
              <li><a href="feature">Feature</a></li>
              <li><a href="credit">Credit</a></li>
              <li><a href="faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="ios">iOS</a></li>
              <li><a href="android">Android</a></li>
              <li><a href="microsoft">Microsoft</a></li>
              <li><a href="desktop">Desktop</a></li>
            </ul>
          </div>
          <div>
            <h4>More</h4>
            <ul>
              <li><a href="privacy">Privacy</a></li>
              <li><a href="help">Help</a></li>
              <li><a href="terms">Terms</a></li>
              <li><a href="faq">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* App Download Section */}
        <div className="footer-app">
          <h4>Download App</h4>
          <div className="app-buttons">
            <a href="applestore" className="app-store" aria-label="Download on the App Store">
              <img
                src="./images/applestore.webp"
                alt="Download on the App Store"
                className="app-store-img"
              />
            </a>
            <a href="playstore" className="play-store" aria-label="Get it on Google Play">
              <img
                src="./images/playstore.webp"
                alt="Get it on Google Play"
                className="google-play-img"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          Copyright © 2022. JobBox. All rights reserved.
        </p>
        <ul className="footer-bottom-links">
          <li><a href="privacy">Privacy Policy</a></li>
          <li><a href="terms">Terms & Conditions</a></li>
          <li><a href="security">Security</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
