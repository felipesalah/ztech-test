export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_POCID':
            return {
                ...state,
                pocId: action.payload
            };
        default:
            return state;
    }
};