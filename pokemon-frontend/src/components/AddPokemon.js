import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddPokemon = () => {
  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');
  const [tipo, setTipo] = useState('');
  const [imagem, setImagem] = useState('');
  const [mensagem, setMensagem] = useState('');

  const fetchNextNumero = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/pokemon');
      const pokemons = response.data;
      if (pokemons.length > 0) {
        const maxNumero = Math.max(...pokemons.map(pokemon => pokemon.numero));
        setNumero(maxNumero + 1); 
      } else {
        setNumero(1);
      }
    } catch (error) {
      console.error('Erro ao buscar o último número:', error);
    }
  };

  useEffect(() => {
    fetchNextNumero();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const novoPokemon = { nome, numero, tipo, imagem };
      await axios.post('http://localhost:5000/api/pokemon', novoPokemon);
      setMensagem('Pokémon adicionado com sucesso!');
      setNome('');
      setNumero(''); 
      setTipo('');
      setImagem('');
    } catch (error) {
      console.error('Erro ao adicionar Pokémon:', error);
      setMensagem('Erro ao adicionar Pokémon. Tente novamente.');
    }
  };

  return (
    <div className="add-pokemon-form">
      <h2>Adicionar Novo Pokémon</h2>
      {mensagem && <p>{mensagem}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input 
            type="text" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Número:</label>
          <input 
            type="number" 
            value={numero} 
            readOnly 
            required 
          />
        </div>
        <div>
          <label>Tipo:</label>
          <input 
            type="text" 
            value={tipo} 
            onChange={(e) => setTipo(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>URL da Imagem:</label>
          <input 
            type="text" 
            value={imagem} 
            onChange={(e) => setImagem(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Adicionar Pokémon</button>
      </form>
    </div>
  );
};

export default AddPokemon;
