const axios = require('axios');
const mongoose = require('mongoose');

// URL da sua API local
const API_URL = 'http://localhost:5000/api/pokemons';

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/pokemonDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Função para importar Pokémons
async function importPokemons() {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
    const pokemons = response.data.results;

    for (const [index, pokemon] of pokemons.entries()) {
      const pokemonData = await axios.get(pokemon.url);
      const newPokemon = {
        nome: pokemonData.data.name,
        numero: pokemonData.data.id,
        tipo: pokemonData.data.types[0].type.name,
        imagem: pokemonData.data.sprites.front_default,
      };

      // Envia o Pokémon para sua API
      await axios.post(API_URL, newPokemon);
      console.log(`Pokémon ${newPokemon.nome} importado com sucesso!`);
    }
    console.log('Importação concluída!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Erro ao importar Pokémons:', error);
  }
}

// Executa a importação
importPokemons();
