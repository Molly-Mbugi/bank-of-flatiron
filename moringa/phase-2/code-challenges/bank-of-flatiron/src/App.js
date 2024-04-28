import React, { useState } from 'react'; 
import MyTable from './Table'; 
import './App.css'; 
import NavBar from './NavBar'; 
import AddItemForm from './Form'; 
import SearchBar from './Search'; 

// Initial data for transactions
const initialData = [
  { date: '2019-12-01', description: 'Paycheck from Bob\'s Burgers', category: 'Food', amount: 70.00 },
  { date: '2019-12-02', description: 'South from Southwest Quinoa Bowl at Fresh and Co', category: 'Entertainment', amount: 540.00 },
  { date: '2019-12-03', description: 'Chipotle', category: 'John', amount: 57.60 },
];

function App() {
  // State hooks for managing items and search query
  const [items, setItems] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle adding a new item
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  // Function to handle search input changes
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Filtering items based on search query
  const filteredItems = items.filter(item =>
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  //rendering
  return (
    <div className="App"> 
      <NavBar /> 
      <SearchBar onSearch={handleSearch} /> 
      <AddItemForm onAddItem={handleAddItem} /> 
      <table> {/* Table for displaying transactions */}
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping through filtered items and rendering table rows */}
          {filteredItems.map((item, index) => (
            <MyTable key={index} item={item} /> // Render table row for each item
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App; 
;







