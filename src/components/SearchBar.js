import './SearchBar.css';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchLatLong, fetchPocId } from '../actions';
import moment from 'moment';
import _ from 'lodash';

const SearchBar = (props) => {
    const [term, setTerm] = useState('');

    const onInputChange = event => {
        setTerm(event.target.value);
    };

    const onFormSubmit = async event => {
        event.preventDefault();
        await props.fetchLatLong(term);
    };

    const history = useHistory();

    useEffect(() => {
        if (!_.isEmpty(props.geocode)) {
            props.fetchPocId(props.geocode, moment(new Date()).format()).then(() => history.push("/products"));
        }
    }, [props.geocode]);

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

export default connect(mapStateToProps, { fetchLatLong, fetchPocId })(SearchBar);