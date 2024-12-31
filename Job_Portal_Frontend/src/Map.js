import React from 'react';
import Header from './Home Components/Header';
import './Map.css'; // Custom CSS for styling

export const Map = () => {
  return (
    <>
      <Header />
      <div className="map-container">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.4374170143033!2d77.39696127374748!3d28.526569288887924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9572297bbe9%3A0xef13bb505e8c1709!2sMeteoxperts%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1735658573809!5m2!1sen!2sin" 
      width="1280" 
      height="600" 
      style={{border:0}} 
      allowfullscreen="" 
      loading="lazy" 
      title='Map'
      referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      </div>
    </>
  );
};
