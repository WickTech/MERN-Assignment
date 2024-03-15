import React from 'react';
import Select from 'react-select';


const filter = [
    { value: '', label: '--Select--' },
    { value: 'Title', label: 'Title' },
    { value: 'Description', label: 'Description' },
    { value: 'Price', label: 'Price' },
  ];

function SearchInput({ searchText, handleSearchChange, handleFilterChange, selectedValue }) {
  //  console.log(searchText, handleSearchChange, handleFilterChange, selectedValue )
  return (
    <div className="h-input">
       <input type="text" className="input" placeholder='Search product'
        id="outlined-basic"
        label="Search"
        value={searchText}
        onChange={handleSearchChange}
        variant="outlined"
      />
      <Select
        className="filter-select"
        value={selectedValue}
        onChange={handleFilterChange}
        options={filter}
      />
    </div>
  );
}

export default SearchInput;
