import React, { useState } from 'react';

function AddItemForm({ onAddItem }) {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = { date, description, category, amount: parseFloat(amount) };
    onAddItem(newItem);
    // Clear form fields
    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{ width: '200px', padding: '10px' }}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ width: '200px', padding: '10px' }}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ width: '200px', padding: '10px' }}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ width: '200px', padding: '10px' }}
      />
      <button
        type="submit"
        style={{ width: '100px', padding: '5px', marginTop: '10px', border: 'none', }}
      >
        Add Transaction
      </button>
    </form>
  );
}

export default AddItemForm;


