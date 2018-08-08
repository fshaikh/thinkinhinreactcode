import {getProductInitialState} from '../../AppState';

export default function productReducer(state = getProductInitialState(), action) {
    switch(action.type) {
        case 'PRODUCT_LOADED_SUCCESS':
            const newState = Object.assign({}, state, { products: action.payload.products, isLoading: false});
            return newState;
        case 'FILTERBY_STOCKED':
            return Object.assign({}, state, { showOnlyStocked : action.payload.checked });
        case 'SEARCH_PRODUCT':
            return Object.assign({}, state, { search: action.payload.query});
        default:
            return state;
    }
}