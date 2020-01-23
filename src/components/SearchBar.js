import './SearchBar.css';
import React from 'react';

const SearchBar = () => {
    return (
        <div style={{width: '80%', paddingTop: '10px', margin: 'auto'}}>
            <form action="">
                <div className="input-container">
                    <input id="adress" className="input" type="text" pattern=".+" required />
                    <label className="label" htmlFor="adress">Type your adress here</label>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;