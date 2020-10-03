import React, {useEffect} from 'react';
import logo from './logo.svg';
import {fetchData} from './actions/getDataAction'
import {useSelector, useDispatch} from 'react-redux'
import './App.css';
import Header from './Header';
import Product from './Product';
import Table, {insertData}   from './Table';

function App() {
  const state = useSelector(state => state.getDataReducer)
  const dispatcher = useDispatch()

  useEffect(() => {
    dispatcher(fetchData());
  }, [])

  insertData(state.data);

  return (
    <div>
      <Header />
    <div className = "app_product">  
      <Product data={state.data} />
    </div>
    <div className ="app_table">
      <Table />
    </div>
    </div>
  );
}

export default App;
