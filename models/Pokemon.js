const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  nome: String,
  numero: {
    type: Number,
    unique: true, 
    required: true
  },
  tipo: { 
    type: String, 
    enum: ['normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'],
  },
  imagem: { type: String, required: true }
});

module.exports = mongoose.model('Pokemon', pokemonSchema);
