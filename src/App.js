import React from 'react';
import './App.css';
import LeftBar from './components/LeftBar';
import MiddleEditor from './components/MiddleEditor';
import RightBar from './components/RightBar';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="App">
      
      <div className="container">
        <LeftBar />
        <MiddleEditor />
        <RightBar />
      </div>
    </div>
  );
}

export default App;
