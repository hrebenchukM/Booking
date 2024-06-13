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
import './Components/styles.css';

// -----------------------
function App() {
  return (
    <div className="App">

      <header className="App-header">
      <Header></Header>
      </header>
      
      <main className="App-main">
      <Nav></Nav>



      
      <section className="hotels">
        <div className="container1">
          <HotelsList cardsArr={hotelsArr} />
        </div>
      </section>


      
      <section className="reviews">
        <div className="container1">
          <h3 className="reviews__title">reviews</h3>
          <ReviewsList reviewsArr={reviewsArr} />
        </div>
      </section>
      </main>

      <footer className="App-footer">
        <Footer></Footer>
      </footer>
      
   

      


    </div>
  );
}

export default App;
