import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import AddPokemon from './components/AddPokemon';
import logo from './assets/logo.png';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <img src={logo} alt="Logo" />
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/add" element={<AddPokemon />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
