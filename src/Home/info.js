import React from 'react';
import './info.css';

const info = () => {
    return (
        <div className="info-container">
          <h2 className="header">BE OUR REGULAR</h2>
          <div className="info-content">
            <div className="image-section">
              <img 
                src="/info.jpeg" 
                alt="Customer enjoying view"
                className="customer-image"
              />
            </div>
            <div className="text-section">
              <p>
                We believe that every customer deserves the best, and we're committed to providing top-class services to all of our clients. 
                When you book with us, you can enjoy not only great deals on your travel arrangements, but also exclusive discounts and special offers. 
                We value your loyalty and want to show our appreciation by giving back.
              </p>
              <p>
                So start your search today and discover the amazing rewards waiting for you on our website!
              </p>
            </div>
          </div>
         
        </div>
      );
    }
    
export default info;