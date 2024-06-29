import { About } from "../../Components/About/About";
import { Footer } from "../../Components/Footer/Footer";
import {HeadImage} from "../../Components/HeadImg/HeadImg";
import { Header } from "../../Components/Header/Header";

import { SearchBar } from "../../Components/Searcher/Searcher";


import "./Home.css";

export  function HomePage() {
  return (
    <div className="home">
      <div className="photo-container">
        <Header/>
        <HeadImage />
        <SearchBar/>
    
        <Footer/>
      </div>
    </div>
  );
}
