export var AppState = {
    ProductStore: {
        products: [],
        search:'',
        showOnlyStocked: false,
        isLoading: true
    }
};

export function getProductInitialState() {
    return AppState.ProductStore;
}