import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  { question: "Common question", answer: "Answer to common question 1." },
  { question: "Common question", answer: "Answer to common question 2." },
  { question: "Common question", answer: "Answer to common question 3." },
  { question: "Common question", answer: "Answer to common question 4." },
  { question: "Common question", answer: "Answer to common question 5." },
  { question: "Common question", answer: "Answer to common question 6." },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-title-container">
        <h2 className="faq-title">FAQs</h2>
      </div>
      <div className="faq-content">
        <div className="faq-line"></div>
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {item.question}
               <img src='/HotelDetails/Faqs/tel.png' className='faq-icon'></img>
            </div>
            {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
