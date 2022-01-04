import './App.css';
import React from 'react';
import Header from './components/Header';
import Splitter from './components/Splitter';

function App() {
  return (
    <React.Fragment>
      <Header title={<img src="SPLITTER.svg" alt="SPLITTER"/>} />
      <Splitter />
    </React.Fragment>
  );
}

export default App;
