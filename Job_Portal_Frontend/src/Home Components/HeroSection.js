import React from "react";
import "./HeroSection.css"; // Import the corresponding CSS for styling

const HeroSection = () => {
  return (
    
    <section className="hero-section">
      <div className="hero-content">
        <h4 className="hero-subtitle">Millions Of Jobs.</h4>
        <h1 className="hero-title">
          Find The One That’s<span className="highlight"> Right</span> For You
        </h1>
        <p className="hero-description">
          Search all the open positions on the web. Get your own personalized
          salary estimate. Read reviews on over 200,000 companies worldwide.
          The right job is out there.
        </p>
        <div className="hero-buttons">
          <button className="btn primary-btn">Search Jobs</button>
          <button className="btn secondary-btn">Learn More</button>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="./images/people.webp"
          alt="Team of professionals"
          className="hero-img"
        />
      </div>
    </section>
  );
};

export default HeroSection;
