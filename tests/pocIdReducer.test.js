import pocIdReducer from '../src/reducers/pocIdReducer';

describe('POC ID reducer', () => {

  it('returns initial state', () => {
    expect(pocIdReducer(undefined, {})).toEqual({});
  });

  it('sets up fetched POC ID', () => {
    const beforeState = {};
    const action = {
            type: 'FETCH_POCID', payload: {
            pocId: '532'
        }
    };
    const afterState = pocIdReducer(beforeState, action);
    expect(afterState).toEqual({
        pocId: { pocId: '532' }
    });
  });
});