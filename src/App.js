import logo from './logo.svg';
import './App.css';
import { Footer } from './Home/Footer';
import { Header } from './Home/Header';
import { Nav } from './Home/Nav';

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
    </div>
  );
}

export default App;
