import React, { Component } from 'react';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import './App.css';

const App = () =>{  
  const API = process.env.REACT_APP_TMDB_API_KEY;
  return (
    <div>
      <Header />    
      <Main />
    </div>
  );
}

export default App;
