export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_LATLONG':
            return action.payload;
        default:
            return state;
    }
};