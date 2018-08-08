// Import React, redux related imports
import React, { Component } from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


import './App.css';

// Product component imports
import ProductsComponent from './Products/ProductsComponent';
import ProductsComponentWithRedux from './Products/ProductsComponentWithRedux';
import {getProducts} from './Products/ProductService';
import {getProductInitialState} from './AppState';
import productReducer from './Products/Reducers/productReducer';

class App extends Component {
  constructor() {
    super();
    this.appStore = createStore(productReducer , getProductInitialState(), applyMiddleware(thunk));
  }
  render() {
    return (
      <div className="App grid-container">
        <div className="grid-item">
          <ProductsComponent getProducts={getProducts} />
        </div>
        <div className="grid-item">
          <ProductsComponentWithRedux AppStore={this.appStore} getProducts={getProducts} className="grid-item"/>
        </div>
      </div>
      
    );
  }
}

export default App;
