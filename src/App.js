import React from 'react';
// Import components
import Header from './Components/Header';
import Card from './Components/Card';
// Import stylesheet
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <div className='cards'>
        <ul>
          <Card />
          <Card />
          <Card />
        </ul>
      </div>
    </div>
  );
};

export default App;
