import React from 'react';
import './components/HomePage.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleReportClick = () => {
    navigate('/report');
  };

  return (
    <div className="homepage">
      <header className="site-title">Fix My City</header>

      <h1>Report Local Issues</h1>
      <p>Help improve your city by reporting problems in your area.</p>

      <div className="report-input">
        <input type="text" placeholder="Enter your location" />
        <button className="report-btn" onClick={handleReportClick}>
          REPORT
        </button>
      </div>

      <button className="learn-more-btn">Learn More</button>

      <div className="category-gallery">
        <div className="category-card">
          <img src="/images/pothole.jpeg" alt="Pothole" />
          <span>Potholes</span>
        </div>
        <div className="category-card">
          <img src="/images/trash.jpeg" alt="Trash" />
          <span>Garbage</span>
        </div>
        <div className="category-card">
          <img src="/images/light.jpeg" alt="Street Light" />
          <span>Streetlights</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
