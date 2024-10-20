import React from 'react'
import './about.css'
import Feature from '../../components/feature/Feature';


const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="about">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is DUBBIFY ?" text="Dubbify is a web application that revolutionizes the way content creators translate and dub their media, specifically tailored for India's rich linguistic diversity. Leveraging advanced AI-driven voice synthesis, Dubbify delivers high-quality, human-like voiceovers in various regional languages with remarkable ease. Creators can effortlessly upload their audio or video files, receive culturally adaptive translations, and connect with broader audiences—all while saving time and reducing costs. By democratizing access to professional dubbing, Dubbify empowers everyone from educators to entertainers to break down language barriers and make their content accessible to millions across India." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Audio Dubbing" text="Audio to audio dubbing transforms original soundtracks by seamlessly replacing them with translated or re-recorded audio, using either talented voice actors or cutting-edge AI technology" />
      <Feature title="Voice Cloning" text="Voice cloning technology that leverages artificial intelligence to create a stunningly accurate digital replica of a person's voice,With its ability to evoke emotion and maintain authenticity." />
      <Feature title="Video Dubbing" text="Video dubbing is an innovative technique that enhances audiovisual content by replacing the original audio with translated or re-recorded dialogue, ensuring seamless synchronization with the visuals." />
    </div>
  </div>
);

export default WhatGPT3;