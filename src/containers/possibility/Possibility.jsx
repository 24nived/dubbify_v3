import React from 'react';
import possibilityImage from '../../assets/possiblity.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">How to Dub Audio?</h1>
      <p className="gradient__text">Start dubbing your audio content in just a few steps:</p>
      
      <ol className="dubbing-steps">
        <li>
          <span className="step-circle">1</span> 
          <span className="step-text">Live record your audio content or upload an existing audio file.</span>
        </li>
        <li>
          <span className="step-circle">2</span> 
          <span className="step-text">Submit your audio content for processing.</span>
        </li>
        <li>
          <span className="step-circle">3</span> 
          <span className="step-text">Sit back and relax—your dubbed versions in multiple languages will be ready in seconds!</span>
        </li>
      </ol>

      <a href="http://localhost:3000/dubbing" className="start-button">Start Audio Dubbing</a>
    </div>
  </div>
);

export default Possibility;
