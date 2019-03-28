import React, { useState } from 'react';
import Search from './components/Search';
import List from './components/List';
import Timer from './components/Timer';
import ThemeContext from './contexts/ThemeContext';
import data from './data';
import './App.css';

const App = () => {
  
  const [ items, setItems ] = useState(data);
  const [ showTimer, setShowTimer ] = useState(false)
  const [ style, setStyle ] = useState('light');
  const onChangeSearch = value => {
    const newItems = data.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
    setItems(newItems);
  }

  return (
    <ThemeContext.Provider value={style}>
      <div className="app">
        <div className="header">
          <h1>Aprender Hooks</h1>
        </div>
        <button className={showTimer ? 'showTimer' : 'hideTimer'} onClick={() => { setShowTimer(!showTimer)} }>
          {showTimer ? "Apagar Timer" : "Activar Timer"}
        </button>
        <button onClick={() => setStyle(style => style === 'light' ? 'dark' : 'light')}>
          Theme: {style}
        </button>
        {
          showTimer ? <Timer /> : null 
        }
        <Search onChangeSearch={onChangeSearch} />
        <List items={items} />
      </div>
      </ThemeContext.Provider>
  );
};

export default App;