import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Routes from "./routes/Routes"
// add
// show
// edit

function App() {
  return (
    <div className="App">
        <Navbar/>
      <header className="App-header">
        <Routes/>
      </header>
    </div>
  );
}

export default App;
