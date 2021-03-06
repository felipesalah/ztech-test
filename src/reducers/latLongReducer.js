export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_LATLONG':
            return {
                ...state,
                lat: action.payload.lat,
                lng: action.payload.lng
            };
        default:
            return state;
    }
};