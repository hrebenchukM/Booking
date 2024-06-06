import React from 'react';
import './Footer.css';
import { Link,Outlet  } from 'react-router-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


export const MainPage = () => (
    <>
  
  <nav>
    <ul className='list'>

    <li className='column'>
        <Link to="/countries" className='nav'>Countries</Link> 
        <Link to="/regions" className='nav'>Regions</Link>
        <Link to="/cities" className='nav'>Cities</Link>
        <Link to="/districts" className='nav'>Districts</Link>
        <Link to="/airports" className='nav' >Airports</Link>
        <Link to="/hotels" className='nav'>Hotels</Link>
        <Link to="/places_of_interest" className='nav' >Places of interest</Link>
      </li>

      <li className='column'>
      <Link to="/homes" className='nav'>Homes</Link> 
        <Link to="/apartments" className='nav'>Apartments</Link>
        <Link to="/resorts" className='nav'>Resorts</Link>
        <Link to="/villas" className='nav'>Villas</Link>
        <Link to="/hostels" className='nav' >Hostels</Link>
        <Link to="/bbs" className='nav'>B&Bs</Link>
        <Link to="/guest_houses" className='nav' >Guest houses</Link>
      </li>

      <li className='column'>
      <Link to="/unique_places_to_stay" className='nav'>Unique places to stay</Link> 
        <Link to="/all_destinations" className='nav'>All destinations</Link>
        <Link to="/all_flight_destinations" className='nav'>All flight destinations</Link>
        <Link to="/all_car_hire_locations" className='nav'>All car hire locations </Link>
        <Link to="/discover" className='nav' >Discover</Link>
        <Link to="/reviews" className='nav'>Reviews</Link>
        <Link to="/awards" className='nav' >Awards</Link>
      </li>

      <li className='column'>
      <Link to="/car_hire" className='nav'>Car hire</Link> 
        <Link to="/flight_finder" className='nav'>Flight finder</Link>
        <Link to="/restaurant_reservations" className='nav'>Restaurant reservations</Link>
        <Link to="/for_travel_agents" className='nav'>For Travel Agents</Link>
      </li>

      <li className='column'>
          <Link to="/coronavirus" className='nav'> Coronavirus (COVID-19)</Link> 
        <Link to="/faqs_about " className='nav'>FAQs About </Link>
        <Link to="/booking_com_customer " className='nav'>Booking.com Customer</Link>
        <Link to="/service_help_partner " className='nav'>Service help Partner </Link>
        <Link to="/help_careers" className='nav'>help Careers</Link> 
        <Link to="/sustainability_press " className='nav'>Sustainability Press </Link>
        <Link to="/centre_safety_resource " className='nav'>centre Safety resource </Link>
        <Link to="/centre_investor_relations " className='nav'>centre Investor relations </Link>
        <Link to="/terms_conditions " className='nav'>Terms & Conditions </Link>
        <Link to="/partner_dispute_how_we_work " className='nav'>Partner dispute How we work </Link>
        <Link to="/privacy_cookie" className='nav'>Privacy & Cookie</Link>
        <Link to="/statement_msa" className='nav'>Statement MSA</Link>
        <Link to="/statement_corporate" className='nav'>Statement Corporate</Link>
        <Link to="/contact_we_price_match" className='nav'>contact We Price Match</Link>
      </li>
    

    </ul>  
  </nav>
   <hr/> 

  <Outlet/>
<hr/> 
  </>

);



export  function Countries(){
    return(
        <div></div>
    
) ;
}
export  function Regions(){
    return(
        <div></div>
    
) ;
}
export  function Cities(){
    return(
        <div></div>
    
) ;
}
export  function Districts(){
    return(
        <div></div>
    
) ;
}
export  function Airports(){
    return(
        <div></div>
    
) ;
}

export  function Hotels(){
    return(
        <div></div>
    
) ;
}

export  function PlacesOfInterest(){
    return(
        <div></div>
    
) ;
}




export function NotFound(){
    return(
        <div>ERROR 404</div>
    
) ;
}





export  function Homes(){
    return(
        <div></div>
    
) ;
}
export  function Apartments(){
    return(
        <div></div>
    
) ;
}
export  function Resorts(){
    return(
        <div></div>
    
) ;
}
export  function Villas(){
    return(
        <div></div>
    
) ;
}
export  function Hostels(){
    return(
        <div></div>
    
) ;
}
export  function BBs(){
    return(
        <div></div>
    
) ;
}
export  function GuestHouses(){
    return(
        <div></div>
    
) ;
}




export  function UniquePlacesToStay(){
    return(
        <div></div>
    
) ;
}
export  function AllDestinations(){
    return(
        <div></div>
    
) ;
}
export  function AllFlightDestinations(){
    return(
        <div></div>
    
) ;
}
export  function AllCarHireLocations(){
    return(
        <div></div>
    
) ;
}
export  function Discover(){
    return(
        <div></div>
    
) ;
}
export  function Reviews(){
    return(
        <div></div>
    
) ;
}
export  function Awards(){
    return(
        <div></div>
    
) ;
}







export  function CarHire(){
    return(
        <div></div>
    
) ;
}
export  function FlightFinder(){
    return(
        <div></div>
    
) ;
}
export  function RestaurantReservations(){
    return(
        <div></div>
    
) ;
}
export  function ForTravelAgents(){
    return(
        <div></div>
    
) ;
}

export  function Coronavirus(){
    return(
        <div></div>
    
) ;
}

export  function FAQsAbout(){
    return(
        <div></div>
    
) ;
}


export  function BookingcomCustomer(){
    return(
        <div></div>
    
) ;
}


export  function ServiceHelpPartner(){
    return(
        <div></div>
    
) ;
}

export  function HelpCareers(){
    return(
        <div></div>
    
) ;
}
       

       
export  function SustainabilityPress(){
    return(
        <div></div>
    
) ;
}

export  function CentreSafetyResource(){
    return(
        <div></div>
    
) ;
}
       

             
export  function CentreInvestorRelations(){
    return(
        <div></div>
    
) ;
}

export  function TermsConditions(){
    return(
        <div></div>
    
) ;
}


   
export  function PartnerDisputeHowWeWork(){
    return(
        <div></div>
    
) ;
}

export  function PrivacyCookie(){
    return(
        <div></div>
    
) ;
}



   
export  function StatementMSA(){
    return(
        <div></div>
    
) ;
}

export  function StatementCorporate(){
    return(
        <div></div>
    
) ;
}

export  function ContactWePriceMatch(){
    return(
        <div></div>
    
) ;
}

export  function Home(){
    return(
        <div></div>
    
) ;
}

export function Footer (props)
 {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<MainPage/> } >
  <Route index element={<NotFound />} />
   <Route path="countries" element={<Countries/> } />
  <Route path="regions" element={<Regions />} />
  <Route path="cities" element={<Cities />} />
  <Route path="districts" element={<Districts />} />
  <Route path="airports" element={<Airports />} />
  <Route path="hotels" element={<Hotels />} />
  <Route path="places_of_interest" element={<PlacesOfInterest />} />
  <Route path="*" element= {<NotFound />} />  


  <Route path="homes" element={<Homes />} />
  <Route path="apartments" element={<Apartments />} />
  <Route path="resorts" element={<Resorts />} />
  <Route path="Villas" element={<Villas />} />
  <Route path="hostels" element={<Hostels />} />
  <Route path="bbs" element={<BBs />} />
  <Route path="guest_houses" element={<GuestHouses />} />
 

  


  <Route path="unique_places_to_stay" element={<UniquePlacesToStay />} />
  <Route path="all_destinations" element={<AllDestinations />} />
  <Route path="all_flight_destinations" element={<AllFlightDestinations/>} />
  <Route path="all_car_hire_locations" element={<AllCarHireLocations />} />
  <Route path="discover" element={<Discover />} />
  <Route path="reviews" element={<Reviews />} />
  <Route path="awards" element={<Awards />} />
 



  <Route path="car_hire" element={<CarHire />} />
  <Route path="flight_finder" element={<FlightFinder />} />
  <Route path="restaurant_reservations" element={<RestaurantReservations />} />
  <Route path="for_travel_agents" element={<ForTravelAgents />} />
 





       
  <Route path="coronavirus" element={<Coronavirus />} />
  <Route path="faqs_about" element={<FAQsAbout />} />
  <Route path="booking_com_customer" element={<BookingcomCustomer />} />
  <Route path="service_help_partner" element={<ServiceHelpPartner />} />
  <Route path="help_careers" element={<HelpCareers />} />
  <Route path="sustainability_press" element={<SustainabilityPress  />} />
  <Route path="centre_safety_resource" element={<CentreSafetyResource  />} />
  <Route path="centre_investor_relations" element={<CentreInvestorRelations />} />
  <Route path="terms_conditions" element={<TermsConditions  />} />
  <Route path="partner_dispute_how_we_work" element={<PartnerDisputeHowWeWork />} />
  <Route path="privacy_cookie" element={<PrivacyCookie />} />
  <Route path="statement_msa" element={<StatementMSA  />} />
  <Route path="statement_corporate" element={<StatementCorporate />} />
  <Route path="contact_we_price_match" element={<ContactWePriceMatch />} />
  
  
 </Route>
</Routes>
</BrowserRouter>


  );
}


