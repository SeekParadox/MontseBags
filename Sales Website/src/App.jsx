
import './App.css'
import { useState } from 'react';
import Home from './Components/Home';
import Header from './Components/Nav/Header';
import {CartCountContext} from './Components/Contexts/CartCountContext';

// const [items, setItems] = useState(0);


function App() {
  const [items, setItems] = useState(0);
  return (
    <div className="App">
      <CartCountContext.Provider value={{items, setItems}}>
      <Header ></Header>
      </CartCountContext.Provider>
      
      <Home></Home>
    </div>
  )
}

export default App;

