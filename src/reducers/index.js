import { combineReducers } from 'redux';
import latLongReducer from './latLongReducer';

const rootReducer = combineReducers({
    geocode: latLongReducer
});

export default rootReducer;