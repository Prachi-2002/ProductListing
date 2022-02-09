import React from 'react';

function Search({onInputChange}) {
  return <div>
           <input 
                type='text' 
                placeholder="Search Box" 
                className="Searchbox"
                onChange={(event) => onInputChange(event.target.value)}/>
  </div>;
}

export default Search;
