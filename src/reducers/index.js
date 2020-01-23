import { combineReducers } from 'redux';
import latLongReducer from './latLongReducer';
import pocIdReducer from './pocIdReducer';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
    geocode: latLongReducer,
    pocId: pocIdReducer,
    products: productsReducer
});

export default rootReducer;