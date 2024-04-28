import React from 'react';
import './index.css';

function SearchBar({ onSearch }) {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  const handleButtonClick = () => {
    // Add logic here to handle button click event, if needed
    console.log('Search button clicked');
  };

  return (
    <div className="search-bar">
      <input
        className="search"
        type="text"
        placeholder="Search Transactions"
        onChange={handleChange}
      />
      <button id ="search" className="search-button" onClick={handleButtonClick}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;


