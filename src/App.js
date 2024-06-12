import logo from './logo.svg';
import './App.css';
import { Footer } from './Home/Footer';
import { Header } from './Home/Header';
import { Nav } from './Home/Nav';
// branch hotels and reviews
import { ReviewsList } from './Components/ReviewsList.js';
import { HotelsList } from './Components/HotelsList.js';

import hotelsArr from './api/hotels.json';
import reviewsArr from './api/reviews.json';
// -----------------------
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header></Header>
      </header>
      
      <main className="App-main">
      <Nav></Nav>
      </main>

      <footer className="App-footer">
        <Footer></Footer>
      </footer>
      
      {/* <section className="hotels">
        <div className="container">
          <HotelsList cardsArr={hotelsArr} />
        </div>
      </section>
      <section className="reviews">
        <div className="container">
          <h3 className="reviews__title">reviews</h3>
          <ReviewsList reviewsArr={reviewsArr} />
        </div>
      </section>

       */}


    </div>
  );
}

export default App;
