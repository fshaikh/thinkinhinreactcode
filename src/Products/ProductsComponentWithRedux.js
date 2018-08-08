import React from 'react';
import {TransformProductByCategory} from './ProductTransformer';
import SearchBox from './SearchBox';
import ProductTableComponent from './ProductTableComponent';
import './ProductsComponent.css'
import * as ProductActionCreators from './Actions/productActions';
import Title from './Title';

export default class ProductsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.text = "Using Redux and Thunk";

        this.toggleStockedProducts = this.toggleStockedProducts.bind(this);
        this.onSearch = this.onSearch.bind(this);

        // subscribe tp app store changes
        this.onStoreSubscribe = this.getAppStore().subscribe(this.onStoreSubscribe.bind(this));
    }

    render(){
        if(this.getProductState().isLoading) {
            return (
                <div className='container'>Loading...</div>
            );
        }
        return (
            <div className='container'>
                <Title text={this.text} />
                <br/>
                <SearchBox onSearch={this.onSearch} />
                <label>Show only Stocked products </label>               
                
                <input type="checkbox" onChange={this.toggleStockedProducts} />
                <ProductTableComponent products={this.getProductsByCategory()} />
            </div>
        );
    }

    async componentDidMount() {
        // call the async thunk
        this.getAppStore().dispatch(ProductActionCreators.loadProducts());
        
        
    }

    onStoreSubscribe() {
        this.forceUpdate();
    }

    getProductsByCategory() {
        let products = this.getProductState().showOnlyStocked ? this.getProductState().products.filter((product) => product.stocked === true) : this.getProductState().products;
        products = this.getProductState().search !== '' ? this.getProductState().products.filter((product) => product.name.toLowerCase().includes(this.getProductState().search.toLowerCase())) : products;
        return TransformProductByCategory(products);
    }

    toggleStockedProducts(event) {
        // dispatch the filter by stocked products action
       this.getAppStore().dispatch(ProductActionCreators.getFilterByStockAction(event.target.checked));
    }

    onSearch(value) {
        // dispatch the search action
        this.getAppStore().dispatch(ProductActionCreators.getSearchProductAction(value));
    }

    getAppStore() {
        return this.props.AppStore;
    }

    getProductState() {
        return this.getAppStore().getState();
    }
}