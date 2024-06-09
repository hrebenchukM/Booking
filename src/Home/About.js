import React from 'react';
import './About.css';

const features = [
  {
    icon: '🏨',
    title: 'We choose hotels that meet our standards',
  },
  {
    icon: '💳',
    title: 'Secure payment without hidden fees',
  },
  {
    icon: '📍',
    title: 'Current prices and best deals',
  },
  {
    icon: '⏱️',
    title: 'Easy booking which will not take you long',
  },
  {
    icon: '📧',
    title: "We'll promptly email booking confirmation",
  },
];

const About = () => {
  return (
    <div className="features-container">
      <h2 className="header">SAFE WITH US</h2>
      <div className="features">
        {features.map((feature, index) => (
          <div className="feature" key={index}>
            <div className="icon">{feature.icon}</div>
            <div className="description">{feature.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;