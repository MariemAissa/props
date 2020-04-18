import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ProductTable from './components/ProductTable';

const products = [
  {category: "Electronics ", price: 1400,name:"Appareil Photo"},
  {category: "Clothes ", price: 3400,name:"Pull"}
]

ReactDOM.render(
  <React.StrictMode>
    <ProductTable products={products}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
