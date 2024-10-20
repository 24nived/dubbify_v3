import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <div className="gpt3__social-media">
    <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin"></i>
    </a>
    <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-github"></i>
    </a>
    <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram"></i>
    </a>
  </div>
    
    </div>
  </div>
);

export default Article;