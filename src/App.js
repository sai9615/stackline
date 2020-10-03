import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Product from './Product';
import Table from './Table';

function App() {
  return (
    <div>
      <Header />
    <div className = "app_product">  
      <Product />
    </div>
    <div className ="app_table">
      <Table />
    </div>
    </div>
  );
}

export default App;
