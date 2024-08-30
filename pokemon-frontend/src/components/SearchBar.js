import React, { useState } from 'react';
import '../styles/SearchBar.css'

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Buscar por nome ou número"
      value={searchTerm}
      onChange={handleChange}
      className="search-bar"
    />
  );
};

export default SearchBar;
