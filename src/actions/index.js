import geocode from '../apis/geocode';

export const fetchLatLong = term => async dispatch => {
    const response = await geocode.get('/json', {
        params: {
            address: term
        }
    });
    dispatch({ type: 'FETCH_LATLONG', payload: response.data.results[0].geometry.location });
};