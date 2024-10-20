
import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'AI-Driven Voice Synthesis:',
    text: 'Dubbify utilizes advanced AI technology to generate human-like voiceovers, ensuring that translations sound natural and engaging.',
  },
  {
    title: 'Speech Recognition',
    text: 'The application utilizes cutting-edge speech recognition to transcribe the original audio accurately, ensuring that every word is captured for effective translation and dubbing.',
  },
  {
    title: 'Multi-Language Support',
    text: 'Dubbify supports a wide range of Indian regional languages, allowing creators to choose from various dialects and linguistic nuances to cater to diverse audiences.',
  },
  {
    title: 'Real-Time Preview',
    text: 'Dubbify offers a real-time preview feature, allowing creators to listen to the translated audio alongside the original track',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Language is no longer a barrier - your content can speak to everyone, everywhere.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
