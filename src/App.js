import logo from './logo.svg';
import './App.css';
import { Footer } from './Home/Footer';
import { Header } from './Home/Header';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header></Header>
      </header>
      
      <main className="App-main">
        {/* Основной контент  */}
      </main>

      <footer className="App-footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
