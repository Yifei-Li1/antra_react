import React from 'react';
import './App.css';
import Layout from './components/Layout'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {store} from './redux/store'

function App(){
  return (
    <Provider store = {store}>
      <BrowserRouter>
        <Layout/>
      
      </BrowserRouter>
    </Provider>
  );
}

export default App;
