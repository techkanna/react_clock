import React from 'react';
import './App.css';
import Clock from './components/Clock';

function App() {
  return (
    <div className="App">
    <header><p>
      <i className="far fa-clock"></i>
       React Clock</p>
    </header>
    <div className='wrapper'>
			<Clock />
    </div>
    </div>
  );
}

export default App;
