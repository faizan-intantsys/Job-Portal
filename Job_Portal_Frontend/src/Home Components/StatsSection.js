import React from 'react';
import './StatsSection.css'; // Create a CSS file to style the component

const StatsSection = () => {
  const stats = [
    {
      number: '25K+',
      title: 'Completed Cases',
      description: 'Successfully delivered over 25K projects with excellence and dedication',
    },
    {
      number: '17+',
      title: 'Our Office',
      description: 'Our office is a dynamic, collaborative space fostering innovation and productivity daily',
    },
    {
      number: '86+',
      title: 'Skilled People',
      description: 'Our skilled people drive success with expertise, creativity, and a passion for excellence',
    },
    {
      number: '28+',
      title: 'Happy Clients',
      description: 'Our happy clients trust us for exceptional service and lasting, impactful results',
    },
  ];

  return (
    <div className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <h2 className="stat-number">{stat.number}</h2>
              <h3 className="stat-title">{stat.title}</h3>
              <p className="stat-description">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
