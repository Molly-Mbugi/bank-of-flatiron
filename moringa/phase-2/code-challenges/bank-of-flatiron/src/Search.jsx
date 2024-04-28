import React from 'react'; 
import './index.css';

// SearchBar functional component
function SearchBar({ onSearch }) {
  // Function to handle input change
  const handleChange = (event) => {
    
    onSearch(event.target.value);
  };

  // Function to handle button click
  const handleButtonClick = () => {
  
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
      <button id="search" className="search-button" onClick={handleButtonClick}> {/* Button for  search */}
        Search
      </button>
    </div>
  );
}

export default SearchBar;



