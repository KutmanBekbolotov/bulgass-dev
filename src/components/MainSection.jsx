import React from 'react';
import './MainSection.css'; 
import screen1 from '../assets/screen1.jpeg';
import screen3 from '../assets/screen3.png';
import screen4 from '../assets/screen4.png';
import screen2 from '../assets/screen2.jpeg';

const MainSection = () => {
  return (
    <div className="main-section">
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>

      <div className="content">
        <h1>Welcome to Our Website</h1>
        <p>Explore our innovative solutions and cutting-edge technologies.</p>
        <p>Our projects:</p>
      </div>

      <div className="slider">
        <div className="slide">
          <img src={screen1} alt="Project 1" />
        </div>
        <div className="slide">
          <img src={screen4} alt="Project 2" />
        </div>
        <div className="slide">
          <img src={screen3} alt="Project 3" />
        </div>
        <div className="slide">
          <img src={screen2} alt="Project 4" />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
