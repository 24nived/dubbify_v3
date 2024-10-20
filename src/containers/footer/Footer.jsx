import React from 'react';
import gpt3Logo from '../../assets/logo.png';
import './footer.css';
import { nived,sivaram } from './imports';
import Article from '../../components/article/Article';

const Footer = () => (
  <div className="gpt3__footer section__padding" id="devlopers">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Meet Our Developers</h1>
    </div>
    <div className="gpt3__blog-container">
    <div className="gpt3__blog-container_groupB">
        <Article imgUrl={nived} date="Full-Stack Developer" text="NIVED S" />
        <Article imgUrl={sivaram}  text="SIVARAMAN B"date="Full-Stack Developer" />
        </div>
        </div>
        

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <div className="scrolling-text-container">
  <span className="scrolling-text">Special thanks to DR.R.Manavalan, Associate Professor, MCA, PSG College of Technology</span>
  <span className="scrolling-text">
        Special thanks to DR.R.Manavalan, Associate Professor, MCA, PSG College of Technology
      </span>
      
</div>

      </div>
      
      
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2024 DUBBIFY. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;