import React from 'react';
import videoDubbingImage from '../../assets/blog.png';
import './blog.css';

const Blog = () => (
  <div className="blog__how-to-dub section__padding" id="how-to-dub">
    <div className="blog__how-to-dub-content">
      <h1 className="gradient__text">How to Dub a Video?</h1>
      <p className="gradient__text">Follow these simple steps to dub your video content in multiple languages.</p>
      <ol className="dubbing-steps">
        <li><span className="step-circle">1</span> Upload your video file or choose from your library.</li>
        <li><span className="step-circle">2</span> Select the languages you want to dub your video into.</li>
        <li><span className="step-circle">3</span>Sit back and relax - your dubbed version of Video will be ready in minuites.</li>
        
      </ol>
      
    </div>
    <div className="blog__how-to-dub-image">
      <img src={videoDubbingImage} alt="video dubbing process" />
    </div>
  </div>
);

export default Blog;
