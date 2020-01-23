import './SearchBar.css';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchLatLong } from '../actions';

const SearchBar = (props) => {
    const [term, setTerm] = useState('');

    const onInputChange = event => {
        setTerm(event.target.value);
    };

    const onFormSubmit = async event => {
        event.preventDefault();
        props.fetchLatLong(term);
    };

    return (
        <div style={{width: '80%', paddingTop: '10px', margin: 'auto'}}>
            <form onSubmit={onFormSubmit}>
                <div className="input-container">
                    <input 
                        id="adress" 
                        className="input" 
                        type="text" 
                        pattern=".+" 
                        required
                        value={term} 
                        onChange={onInputChange} 
                    />
                    <label className="label" htmlFor="adress">Type your adress here</label>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return { geocode: state.geocode };
}

export default connect(mapStateToProps, { fetchLatLong })(SearchBar);