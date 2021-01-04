import useInputValues from './utility/data.reduce';
import React from 'react';
import Filter from './components/filterHome/filter-home';
import TagSearchBar from './components/tagSearchBar/tagSearchBar';
import Header from './components/header/header';
import './App.css';

function App() {
    
  return (
    <div className="App">
      <Header />
      <Filter />
    </div>
  );
}

export default App;
