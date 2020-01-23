import geocode from '../apis/geocode';
import delivery from '../apis/delivery';

export const fetchLatLong = term => async dispatch => {
    const response = await geocode.get('/json', {
        params: {
            address: term
        }
    });
    dispatch({ type: 'FETCH_LATLONG', payload: response.data.results[0].geometry.location });
};

export const fetchPocId = (location, dateTime) => async dispatch => {
    const response = await delivery({
        query: `query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
            pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
              __typename
              id
            }
          }`,
        variables: {
            algorithm: "NEAREST",
            lat: location.lat,
            long: location.lng,
            now: dateTime
        },
      });
    dispatch({ type: 'FETCH_POCID', payload: response.data.pocSearch[0].id });
};

export const fetchProducts = pocId => async dispatch => {
    const response = await delivery({
        query: `query poc($id: ID!, $categoryId: Int, $search: String) {
            poc(id: $id) {
              id
              products(categoryId: $categoryId, search: $search) {
                id
                title
                productVariants {
                  price
                }
              }
            }
          }`,
        variables: {
            id: pocId,
            search: "",
            categoryId: null
        },
      });
    dispatch({ type: 'FETCH_PRODUCTS', payload: response.data.poc.products });
};