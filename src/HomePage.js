// HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="horror-mystique-container">
      <div className="horror-mystique-content">
        <h1>CHA-RG</h1>
        {/* Utilisez Link pour créer un lien vers la page Dog */}
        <Link to="/dog" className="start-button">Have Fun</Link>
      </div>
      <div className="horror-mystique-background"></div>
    </div>
  );
};

export default HomePage;
