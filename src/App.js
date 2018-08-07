import React, { Component } from 'react';
import './App.css';
import ProductsComponent from './Products/ProductsComponent';
import {getProducts} from './Products/ProductService';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductsComponent getProducts={getProducts} />
      </div>
    );
  }
}

export default App;
