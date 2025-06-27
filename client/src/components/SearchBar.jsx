// src/components/SearchBar.jsx
import React, { useState } from 'react';
import './SearchBar.css';
import { FaSearch, FaGlobe } from 'react-icons/fa';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [country, setCountry] = useState('');

  const handleSearch = () => {
    // Later: Add real search logic or filter jobs
    alert(`Searching for "${query}" in ${country || 'any country'}`);
  };

  return (
    <div className="search-bar">
      <div className="input-group">
        <FaSearch className="icon" />
        <input
          type="text"
          placeholder="Search job, title or keyword"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="input-group">
        <FaGlobe className="icon" />
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>

      <button onClick={handleSearch}>Find Jobs</button>
    </div>
  );
}

export default SearchBar;
