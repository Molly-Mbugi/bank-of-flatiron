import React, { useState } from 'react';
import MyTable from './Table';
import './App.css';
import NavBar from './NavBar';
import AddItemForm from './Form';
import SearchBar from './Search'; 

const initialData = [
  { date: '2019-12-01', description: 'Paycheck from Bob\'s Burgers', category: 'Food', amount: 70.00 },
  { date: '2019-12-02', description: 'South from Southwest Quinoa Bowl at Fresh and Co', category: 'Entertainment', amount: 540.00 },
  { date: '2019-12-03', description: 'Chipotle', category: 'John', amount: 57.60 },
];

function App() {
  const [items, setItems] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredItems = items.filter(item =>
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <NavBar />
      <SearchBar onSearch={handleSearch} />
      <AddItemForm onAddItem={handleAddItem} /> {/* Integrate AddItemForm here */}
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item, index) => (
            <MyTable key={index} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;







