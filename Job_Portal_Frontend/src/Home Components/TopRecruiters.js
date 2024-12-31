import React from 'react';
import './TopRecruiters.css'; 

const TopRecruiters = () => {
  const recruiters = [
    {
      name: 'LinkedIn',
      logo: './images/linkedin.png', 
      rating: 68,
      location: 'Noida, India',
      openJobs: 25,
    },
    {
      name: 'Adobe',
      logo: './images/adobe.png',
      rating: 42,
      location: 'Gururgam, India',
      openJobs: 17,
    },
    {
      name: 'Dailymotion',
      logo: './images/dailymotion.png',
      rating: 46,
      location: 'Banglore, India',
      openJobs: 65,
    },
    {
      name: 'NewSum',
      logo: './images/newsum.jpg',
      rating: 68,
      location: 'Hyderabad, India',
      openJobs: 25,
    },
    {
      name: 'PowerHome',
      logo: './images/powerhome.webp',
      rating: 52,
      location: 'New Delhi, India',
      openJobs: 34,
    },

  ];

  return (
    <div className="top-recruiters">
      <div className="container">
        <h2 className="section-title">Top Recruiters</h2>
        <p className="section-description">
          Discover your next career move, freelance gig, or internship
        </p>
        <div className="recruiters-grid">
          {recruiters.map((recruiter, index) => (
            <div key={index} className="recruiter-card">
              <img src={recruiter.logo} alt={`${recruiter.name} logo`} className="recruiter-logo" />
              <h3 className="recruiter-name">{recruiter.name}</h3>
              <div className="recruiter-rating">
                {'⭐'.repeat(Math.floor(recruiter.rating / 10))} ({recruiter.rating})
              </div>
              <p className="recruiter-location">{recruiter.location}</p>
              <p className="recruiter-jobs">{recruiter.openJobs} Open Jobs</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRecruiters;
