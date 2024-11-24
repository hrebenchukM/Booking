import { Footer } from "../../Components/Common/Footer/Footer";
import {HeadImage} from "../../Components/Home/HeadImg/HeadImg";
import { Header } from "../../Components/Common/Header/Header";
import { SearchBar } from "../../Components/Common/Searcher/Searcher";
import "./Home.css";
import { Nav } from "../../Components/Home/Nav/Nav";
import { About } from "../../Components/Home/About/About";
import { Info } from "../../Components/Home/Info/info";
import { Reviews } from "../../Components/Home/Reviews/Reviews";
import { RegBtn } from "../../Components/Home/button/regBtn";
import { HotelsList } from "../../Components/Home/Hotels/HotelsList";


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
