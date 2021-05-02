import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes />
      </Router>
    </>
  );
}

export default App;
