import React from 'react';
import "./SearchBox.css";

export default function SearchBox({onInputChange}) {
    return (
        <div className="Search-app">
            <input 
                type='text'
                className="search-content" 
                placeholder="Search...." 
                onChange={(event) => onInputChange(event.target.value)}/>
        </div>
    )
}


