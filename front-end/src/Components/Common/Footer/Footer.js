import React, { useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export function Footer() {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <div className="footer-container">
      <div className={`footer-category ${activeCategory === 'places' ? 'active' : ''}`} onClick={() => toggleCategory('places')}>
        <span>Places</span>
        <span className="arrow"><img src="/Common/footer/tel.png" className='footer-icon' /></span>
      </div>
      <div className={`footer-text-container ${activeCategory === 'places' ? 'active' : ''}`}>
        <div className="footer-texts">
          <Link to="/countries" className='footer-text'>Countries</Link>
          <Link to="/regions" className='footer-text'>Regions</Link>
          <Link to="/cities" className='footer-text'>Cities</Link>
          <Link to="/districts" className='footer-text'>Districts</Link>
          <Link to="/airports" className='footer-text'>Airports</Link>
          <Link to="/hotels" className='footer-text'>Hotels</Link>
          <Link to="/places_of_interest" className='footer-text'>Places of interest</Link>
        </div>
      </div>

      <div className={`footer-category ${activeCategory === 'homes' ? 'active' : ''}`} onClick={() => toggleCategory('homes')}>
        <span>Homes</span>
        <span className="arrow"><img src="/Common/footer/tel.png" className='footer-icon' /></span>
      </div>
      <div className={`footer-text-container ${activeCategory === 'homes' ? 'active' : ''}`}>
        <div className="footer-texts">
          <Link to="/homes" className='footer-text'>Homes</Link>
          <Link to="/apartments" className='footer-text'>Apartments</Link>
          <Link to="/resorts" className='footer-text'>Resorts</Link>
          <Link to="/villas" className='footer-text'>Villas</Link>
          <Link to="/hostels" className='footer-text'>Hostels</Link>
          <Link to="/bbs" className='footer-text'>B&Bs</Link>
          <Link to="/guest_houses" className='footer-text'>Guest houses</Link>
        </div>
      </div>

      <div className={`footer-category ${activeCategory === 'destinations' ? 'active' : ''}`} onClick={() => toggleCategory('destinations')}>
        <span>Destinations</span>
        <span className="arrow"><img src="/Common/footer/tel.png" className='footer-icon' /></span>
      </div>
      <div className={`footer-text-container ${activeCategory === 'destinations' ? 'active' : ''}`}>
        <div className="footer-texts">
          <Link to="/unique_places_to_stay" className='footer-text'>Unique places to stay</Link>
          <Link to="/all_destinations" className='footer-text'>All destinations</Link>
          <Link to="/all_flight_destinations" className='footer-text'>All flight destinations</Link>
          <Link to="/all_car_hire_locations" className='footer-text'>All car hire locations </Link>
          <Link to="/discover" className='footer-text'>Discover</Link>
          <Link to="/reviews" className='footer-text'>Reviews</Link>
          <Link to="/awards" className='footer-text'>Awards</Link>
        </div>
      </div>

      <div className={`footer-category ${activeCategory === 'transport' ? 'active' : ''}`} onClick={() => toggleCategory('transport')}>
        <span>Transport</span>
        <span className="arrow"><img src="/Common/footer/tel.png" className='footer-icon' /></span>
      </div>
      <div className={`footer-text-container ${activeCategory === 'transport' ? 'active' : ''}`}>
        <div className="footer-texts">
          <Link to="/car_hire" className='footer-text'>Car hire</Link>
          <Link to="/flight_finder" className='footer-text'>Flight finder</Link>
          <Link to="/restaurant_reservations" className='footer-text'>Restaurant reservations</Link>
          <Link to="/for_travel_agents" className='footer-text'>For Travel Agents</Link>
        </div>
      </div>

      <div className={`footer-category ${activeCategory === 'questions' ? 'active' : ''}`} onClick={() => toggleCategory('questions')}>
        <span>Questions</span>
        <span className="arrow"><img src="/Common/footer/tel.png" className='footer-icon' /></span>
      </div>
      <div className={`footer-text-container ${activeCategory === 'questions' ? 'active' : ''}`}>
        <div className="footer-texts">
          <Link to="/coronavirus" className='footer-text'> Coronavirus (COVID-19)</Link>
          <Link to="/faqs_about" className='footer-text'>FAQs About</Link>
          <Link to="/booking_com_customer" className='footer-text'>Booking.com Customer</Link>
          <Link to="/service_help_partner" className='footer-text'>Service help Partner </Link>
          <Link to="/help_careers" className='footer-text'>help Careers</Link>
          <Link to="/sustainability_press" className='footer-text'>Sustainability Press</Link>
          <Link to="/centre_safety_resource" className='footer-text'>centre Safety resource</Link>
          <Link to="/centre_investor_relations" className='footer-text'>centre Investor relations</Link>
          <Link to="/terms_conditions" className='footer-text'>Terms & Conditions</Link>
          <Link to="/partner_dispute_how_we_work" className='footer-text'>Partner dispute How we work</Link>
          <Link to="/privacy_cookie" className='footer-text'>Privacy & Cookie</Link>
          <Link to="/statement_msa" className='footer-text'>Statement MSA</Link>
          <Link to="/statement_corporate" className='footer-text'>Statement Corporate</Link>
          <Link to="/contact_we_price_match" className='footer-text'>contact We Price Match</Link>
        </div>
      </div>
      
      <div className='footer-category' style={{ border:'none',borderRadius:'0px' }}>
        <span> <Link to="/booking_com_customer" className='footer-text'>Support</Link></span>
      </div>
      <div className='footer-category' style={{ border:'none',borderRadius:'0px' }}>
      <span><Link to="/privacy_cookie" className='footer-text'>Privacy policy</Link></span>
      
      </div>
    </div>
  );
}
