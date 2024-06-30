import { Footer } from "../../Components/Footer/Footer";
import {HeadImage} from "../../Components/HeadImg/HeadImg";
import { Header } from "../../Components/Header/Header";
import { SearchBar } from "../../Components/Searcher/Searcher";
import "./Home.css";
import { Nav } from "../../Components/Nav/Nav";
import { About } from "../../Components/About/About";
import { Info } from "../../Components/Info/info";
import { Reviews } from "../../Components/Reviews/Reviews";
import { RegBtn } from "../../Components/button/regBtn";
import { HotelsList } from "../../Components/Hotels/HotelsList";


export  function HomePage() {
  return (
    <div className="home">
      <div className="photo-container">
        <Header/>
        <HeadImage />
        <SearchBar/>
        <Nav/>
         <HotelsList/>
         <Reviews/>
         <About/>
         <Info/>
         <RegBtn/>
        <Footer/>
      </div>
    </div>
  );
}
