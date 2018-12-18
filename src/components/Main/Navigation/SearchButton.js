import React from 'react'
import './SearchButton.css'

const SearchButton = ({onClick}) =>{
    return(
        <div className="search-button">
            <button onClick={onClick}>Search</button>
        </div>
    )
}

export default SearchButton