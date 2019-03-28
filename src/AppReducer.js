import React, { useState, useReducer } from 'react';
import Search from './components/Search';
import List from './components/List';
import Timer from './components/Timer';
import ThemeContext from './contexts/ThemeContext';
import data from './data';
import './App.css';

const reducer = (state, action) => {
  switch (action.type) {
      case 'SETITEMS':
          return {...state, items: action.payload }
      case 'ADDITEM':
        return {...state, items: [...state.items, action.payload] }
      default:
          return state;
  }
}

const AppReducer = () => {
  
  // Utilizando useReducer
  const [ state, dispatch ] = useReducer(reducer, { items: data })

  // El dato default es proporcionado por una función 
  // If the initial state is the result of an expensive computation, you may provide a function instead, which will be executed only on the initial render
  const [ showTimer, setShowTimer ] = useState(() => false)
  const [ style, setStyle ] = useState('light');
  const onChangeSearch = value => {
    const newItems = data.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
    const action = { type: 'SETITEMS', payload: newItems };
    dispatch(action);
  }

  return (
    <ThemeContext.Provider value={style}>
      <div className="app">
        <div className="header">
          <h1>Aprender Hooks (useReducer)</h1>
        </div>
        <button className={showTimer ? 'showTimer' : 'hideTimer'} onClick={() => { setShowTimer(!showTimer)} }>
          {showTimer ? "Apagar Timer" : "Activar Timer"}
        </button>
        <button onClick={() => setStyle(style => style === 'light' ? 'dark' : 'light')}>
          Theme: {style}
        </button>
        <button onClick={
            () => dispatch({
                type: 'ADDITEM', 
                payload: {title: 'Otro', details: 'Tecnología de prueba', image: 'http://lorempixel.com/200/100/sports/8'},
            })
            }>
          Add
        </button>
        {
          showTimer ? <Timer /> : null 
        }
        <Search onChangeSearch={onChangeSearch} />
        <List items={state.items} />
      </div>
      </ThemeContext.Provider>
  );
};

export default AppReducer;