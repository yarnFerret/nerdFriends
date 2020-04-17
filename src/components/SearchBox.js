import React from "react";
import './SearchBox.css';

const SearchBox = ({searchChange}) => {
  return(
    <div className='search'>
      <input type='search' placeholder='podaj imie' onChange={searchChange}/>
    </div>
  )
}

export default SearchBox;