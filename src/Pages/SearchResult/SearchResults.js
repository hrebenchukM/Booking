import { Footer } from "../../Components/Footer/Footer";
import { HeadImage } from "../../Components/HeadImg/HeadImg";
import { HeadImage2 } from "../../Components/HeadImg2/HeadImg";
import { Header } from "../../Components/Header/Header";
import { NavS } from "../../Components/Nav2/Nav2";
import { SearchBar } from "../../Components/Searcher/Searcher";

export  function SearchResultPage() {
    return (
      <div className="">
        <div className="">
          <Header />
          <HeadImage2></HeadImage2>
          <SearchBar></SearchBar>
          <NavS></NavS>
          <Footer/>
        </div>
      </div>
    );
  }
  