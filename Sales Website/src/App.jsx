
import './App.css'
import { useState } from 'react';
import Home from './Components/Home';
import Header from './Components/Nav/Header'

// const [items, setItems] = useState(0);

function App() {
  const [items, setItems] = useState(0);
  return (
    <div className="App">
      <Header cartItems={items}></Header>
      <Home></Home>
    </div>
  )
}

export default App;
