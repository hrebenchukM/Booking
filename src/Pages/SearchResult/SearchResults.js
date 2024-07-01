import { Footer } from "../../Components/Common/Footer/Footer";
import { HeadImage } from "../../Components/Home/HeadImg/HeadImg";
import { HeadImage2 } from "../../Components/SearchResult/HeadImg2/HeadImg";
import { Header } from "../../Components/Common/Header/Header";
import { NavS } from "../../Components/SearchResult/Nav2/Nav2";
import { SearchBar } from "../../Components/Common/Searcher/Searcher";
import { HotelList2 } from "../../Components/SearchResult/SearchCard/HotelList2";
import SearchItem from "../../Components/SearchResult/SearchCard/HotelCards";

export  function SearchResultPage() {
    return (
      <div className="">
        <div className="">
          <Header />
          <HeadImage2></HeadImage2>
          <SearchBar></SearchBar>
          <NavS></NavS>
          <HotelList2></HotelList2>
        
          <Footer/>
        </div>
      </div>
    );
  }
  