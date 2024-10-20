import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.jpeg';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Say It in Every Tongue     - Dubbing Your Voice in Minutes</h1>
      <p>Dubbify revolutionizes how creators reach India’s diverse audiences with effortless, AI-driven dubbing into regional languages. With a quick upload, creators receive natural-sounding, high-quality voiceovers while saving time and costs. Dubbify breaks language barriers, making professional dubbing accessible to all.</p>

      <div className="gradient__text">
      <p>Welcome to Dubbify! Explore the power of AI-driven dubbing for your content.</p>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;