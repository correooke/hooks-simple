import React, { useState } from 'react';
import Search from './components/Search';
import List from './components/List';
import './App.css';
import Timer from './components/Timer';
import data from './data';

const App = () => {
  
  const [ items, setItems ] = useState(data);
  const [ showTimer, setShowTimer ] = useState(false)

  const onChangeSearch = value => {
    const newItems = data.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
    setItems(newItems);
  }

  return (
    <div className="app">
      <div className="header">
        <h1>Aprender Hooks</h1>
      </div>
      <button className={showTimer ? 'showTimer' : 'hideTimer'} onClick={() => { setShowTimer(!showTimer)} }>
        {showTimer ? "Apagar Timer" : "Activar Timer"}
      </button>
      {
        showTimer ? <Timer /> : null 
      }
      <Search onChangeSearch={onChangeSearch} />
      <List items={items} />
    </div>
  );
};

export default App;