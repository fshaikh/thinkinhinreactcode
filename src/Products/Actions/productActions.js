
import { getProducts } from '../ProductService';

export function getProductLoadedAction(products) {
    return {
        type: 'PRODUCT_LOADED_SUCCESS',
        payload: {
            products: products
        }
    };
}

export function getFilterByStockAction(checked) {
    return {
        type: 'FILTERBY_STOCKED',
        payload: {
            checked: checked
        }
    };
}

export function getSearchProductAction(query) {
    return {
        type: 'SEARCH_PRODUCT',
        payload: {
            query: query
        }
    };
}

/**
 * This action creator is a thunk to handle side-effects in redux. Instead of returning
 * action object, it returns a function. The function:
 *      Receives dispatch as an argument so that we can dispatch later
 *      Executes side effects like making network calls, etc
 */
export function loadProducts() {
    return async (dispatch) => {
        const products = await getProducts();
        // Dispatch the product loaded action
        dispatch(getProductLoadedAction(products));
    }
}