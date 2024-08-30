import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonModal from './PokemonModal';
import SearchBar from './SearchBar';
import '../styles/App.css';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/pokemon')
      .then(response => {
        setPokemons(response.data);
        setFilteredPokemons(response.data);
      })
      .catch(error => console.error('Erro ao buscar Pokémons:', error));
  }, []);

  const openModal = (pokemon) => {
    setSelectedPokemon(pokemon);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPokemon(null);
    setIsModalOpen(false);
  };

  const handleSearch = (searchTerm) => {
    const filtered = pokemons.filter(pokemon =>
      pokemon.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pokemon.numero.toString().includes(searchTerm)
    );
    setFilteredPokemons(filtered);
  };

  return (
    <div className="pokemon-list">
      <SearchBar onSearch={handleSearch} />
      <div className="grid-container">
        {filteredPokemons.map((pokemon) => (
          <div key={pokemon.numero} className="pokemon-card" onClick={() => openModal(pokemon)}>
            <img src={pokemon.imagem} alt={pokemon.nome} />
            <p>{pokemon.nome}</p>
          </div>
        ))}
      </div>
      {isModalOpen && <PokemonModal pokemon={selectedPokemon} onClose={closeModal} />}
    </div>
  );
};

export default PokemonList;
