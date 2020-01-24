import productsReducer from '../src/reducers/productsReducer';

describe('Product list reducer', () => {

  it('returns initial state', () => {
    expect(productsReducer(undefined, {})).toEqual([]);
  });

  it('sets up fetched Product list', () => {
    const beforeState = [];
    const action = {
            type: 'FETCH_PRODUCTS', payload: [{
            product: 'test'
        }]
    };
    const afterState = productsReducer(beforeState, action);
    expect(afterState).toEqual([
        {
            product: 'test'
        }
    ]);
  });
});