import React, { useState } from "react";
import "./Filter.css";
import options from "./Filter.json"; 
const SearchForm = ({
    }) => {
  const [minPrice, setMinPrice] = useState(76);
  const [maxPrice, setMaxPrice] = useState(230);

  
  const [search, setSearch] = useState('');
 
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPopular, setSelectedPopular] = useState(null);
  const [selectedStars, setSelectedStars] = useState(null);
  const [selectedNear, setSelectedNear] = useState(null);
  const [selectedFaculties, setSelectedFaculties] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedChain, setSelectedChain] = useState(null);
  const {
    ratingOptions,
    popularOptions,
    starsOptions,
    nearOptions,
    facultiesOptions,
    typeOptions,
    chainOptions
  } = options;

  return (
    <div className="result-page-search-container">
      <div className="result-page-options">
      <label className="hlabel">Price</label>
      <label className="clabel">
      {minPrice}$night  
      <span className="c">{maxPrice}$night</span>
      </label>
        <input
          className="result-page-options-input"
          type="range"
          min="0"
          max="1000"
          value={maxPrice}
          onChange={(e) => {
            setMinPrice(76);
            setMaxPrice(e.target.value);
          
          }}
        />
        <span className="vec"></span>
      </div>





      <div className="result-page-options">
        
        <input
        type="text"
        placeholder="Attractions nearby"
        value={search}
        
        onChange={(e) => setSearch(e.target.value)
        }
        className="result-page-options-input2"
        />
       <img src="./SearchResult/SearchForm/but.png" className="simg" ></img>
       <span className="vec"></span>
      </div>



      <div className="result-page-options">
      <label className="hlabel">Rating</label>
  {ratingOptions.map((rating) => (
    <div key={rating.rating} className="result-page-option-option">
      <input
        type="radio"
        value={rating.rating}
        checked={selectedRating === rating.rating}
        onChange={() => setSelectedRating(rating.rating)}
         className="result-page-options-input"
      />
      <label>
        {`${rating.rating}+`}
      </label>
      <span className="count">{rating.count}</span>
    </div>
  ))}
  <span className="vec"></span>
</div>




      <div className="result-page-options">
      <label className="hlabel">Popular</label>
  {popularOptions.map((popular) => (
    <div key={popular.name} className="result-page-option-option">
      <input
        type="radio"
        value={popular.name}
        checked={selectedPopular === popular.name}
        onChange={() => setSelectedPopular(popular.name)}
         className="result-page-options-input"
      />
      <label>
        {popular.name}
      </label>
      <span className="count">{popular.count}</span>
    </div>
  ))}
  <span className="vec"></span>
</div>



<div className="result-page-options">
  <label className="hlabel">Stars</label>
  {starsOptions.map((stars, index) => (
    <div key={index} className="result-page-option-option">
      <input
        type="radio"
        value={stars.stars}
        checked={selectedStars === stars.stars}
        onChange={() => setSelectedStars(stars.stars)}
         className="result-page-options-input"
      />
      <label>
        {(() => {
          let starsIcons = [];
          for (let i = 0; i < stars.stars; i++) {
            starsIcons.push(
              <img
                key={i}
                src="/SearchResult/SearchForm/star.png"
                className="stars-icon-search"
              />
            );
          }
          return starsIcons;
        })()}
      </label>
      <span className="count">{stars.count}</span>
    </div>
  ))}
  <span className="vec"></span>
</div>


           

<div className="result-page-options">
<label className="hlabel">Near</label>
  {nearOptions.map((near) => (
    <div key={near.name} className="result-page-option-option">
      <input
        type="radio"
        value={near.name}
        checked={selectedNear === near.name}
        onChange={() => setSelectedNear(near.name)}
         className="result-page-options-input"
      />
      <label>
        {near.name}
      </label>
      <span className="count">{near.count}</span>
    </div>
  ))}
  <span className="vec"></span>
</div>










<div className="result-page-options">
<label className="hlabel">Faculties</label>
  {facultiesOptions.map((faculties) => (
    <div key={faculties.name} className="result-page-option-option">
      <input
        type="radio"
        value={faculties.name}
        checked={selectedFaculties === faculties.name}
        onChange={() => setSelectedFaculties(faculties.name)}
         className="result-page-options-input"
      />
      <label>
        {faculties.name}
      </label>
      <span className="count">{faculties.count}</span>
    </div>
  ))}
  <span className="vec"></span>
</div>


<div className="result-page-options">
<label className="hlabel">Type of hotel</label>
  {typeOptions.map((type) => (
    <div key={type.name} className="result-page-option-option">
      <input
        type="radio"
        value={type.name}
        checked={selectedType === type.name}
        onChange={() => setSelectedType(type.name)}
         className="result-page-options-input"
      />
      <label>
        {type.name}
      </label>
      <span className="count">{type.count}</span>
    </div>
  ))}
  <span className="vec"></span>
</div>




<div className="result-page-options">
<label className="hlabel">Chain hotels</label>
  {chainOptions.map((chain) => (
    <div key={chain.name} className="result-page-option-option">
      <input
        type="radio"
        value={chain.name}
        checked={selectedChain === chain.name}
        onChange={() => setSelectedChain(chain.name)}
         className="result-page-options-input"
      />
      <label>
        {chain.name}
      </label>
      <span className="count">{chain.count}</span>
    </div>
  ))}
</div>

    </div>
  );
};

export default SearchForm;
