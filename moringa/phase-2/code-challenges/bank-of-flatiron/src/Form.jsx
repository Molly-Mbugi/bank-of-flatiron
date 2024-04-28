import React, { useState } from 'react'; 

function AddItemForm({ onAddItem }) {
  // State hooks for form inputs
  const [date, setDate] = useState(''); // State for date input
  const [description, setDescription] = useState(''); // State for description input
  const [category, setCategory] = useState(''); // State for category input
  const [amount, setAmount] = useState(''); // State for amount input

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = { date, description, category, amount: parseFloat(amount) };
    
    onAddItem(newItem);
    // Clear form fields by resetting state values
    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
  };

  return (
    <form id="new-item-form" onSubmit={handleSubmit}> 
      <div className="form-inputs"> 
        <input
          type="date"
          placeholder="Date"
          data-date-inline-picker="true"
          value={date} 
          onChange={(e) => setDate(e.target.value)} //  event handler to update state
          style={{ width: '200px', padding: '10px' }} 
        />
        <input
          type="text"
          placeholder="Description"
          value={description} 
          onChange={(e) => setDescription(e.target.value)} //  event handler to update state
          style={{ width: '200px', padding: '10px' }}
        />
        <input
          type="text"
          placeholder="Category"
          value={category} 
          onChange={(e) => setCategory(e.target.value)} //  event handler to update state
          style={{ width: '200px', padding: '10px' }} 
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} // event handler to update state
          style={{ width: '200px', padding: '10px' }} 
        />
      </div>
      <button
        id="add"
        type="submit"
        style={{ width: '100px', padding: '5px', marginTop: '10px', border: 'none' }} 
      >
        Add Transaction
      </button>
    </form>
  );
}

export default AddItemForm;



