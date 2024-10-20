import React from 'react';
import { coqui, python, elevenlabs, assemblyai,WhisperAI ,react } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={python} />
    </div>
    <div>
      <img src={react} />
    </div>
    <div>
      <img src={WhisperAI} />
    </div>
    <div>
      <img src={coqui} />
    </div>
    <div>
      <img src={assemblyai} />
    </div>
    <div>
      <img src={elevenlabs} />
    </div>
  </div>
);

export default Brand;