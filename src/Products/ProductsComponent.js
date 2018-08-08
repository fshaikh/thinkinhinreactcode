import React from 'react';
import {TransformProductByCategory} from './ProductTransformer';
import SearchBox from './SearchBox';
import ProductTableComponent from './ProductTableComponent';
import './ProductsComponent.css';
import Title from './Title';

export default class ProductsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            search:'',
            showOnlyStocked: false,
            isLoading: true
        };
        this.text = "Plain React";
        this.toggleStockedProducts = this.toggleStockedProducts.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    render(){
        if(this.state.isLoading) {
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
        const products = await this.props.getProducts();
        this.setState((prevState, props) => {
            return Object.assign({}, prevState, { products: products, isLoading: false });
        });
    }

    getProductsByCategory() {
        let products = this.state.showOnlyStocked ? this.state.products.filter((product) => product.stocked === true) : this.state.products;
        products = this.state.search !== '' ? this.state.products.filter((product) => product.name.toLowerCase().includes(this.state.search.toLowerCase())) : products;
        return TransformProductByCategory(products);
    }

    toggleStockedProducts(event) {
       const checked = event.target.checked;
       this.setState((prevState, props) => {
            return {
                showOnlyStocked : checked
            }
       });
       
    }

    onSearch(value) {
        this.setState({search: value});
    }
}