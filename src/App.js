import logo from './logo.svg';
import './App.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import Menu from './components/Menu';
import Home from './components/home/Home';

function App() {
  return (
    <div className='bg-gray-50 flex flex-row justify-center items-center'>
      < Menu />
      < Home />
    </div>
    
  );
}

export default App;
