import latLongReducer from '../src/reducers/latLongReducer';

describe('latitude longitude reducer', () => {

  it('returns initial state', () => {
    expect(latLongReducer(undefined, {})).toEqual({});
  });

  it('sets up fetched lat lon', () => {
    const beforeState = {};
    const action = {
            type: 'FETCH_LATLONG', payload: {
            lat: '-23.4926751',
            lng: '-46.692415'
        }
    };
    const afterState = latLongReducer(beforeState, action);
    expect(afterState).toEqual({
        lat: '-23.4926751',
        lng: '-46.692415'
    });
  });
});