const Pokemon = require('../models/Pokemon');

exports.getAllPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    res.json(pokemons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPokemonByNumero = async (req, res) => {
  try {
    const pokemon = await Pokemon.findOne({ numero: req.params.numero }); 
    if (!pokemon) return res.status(404).json({ message: 'Pokémon não encontrado!' });
    res.json(pokemon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addPokemon = async (req, res) => {
  const pokemon = new Pokemon(req.body);
  try {
    await pokemon.save();
    res.status(201).json(pokemon);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updatePokemon = async (req, res) => {
  try {
    const pokemon = await Pokemon.findOneAndUpdate(
      { numero: req.params.numero },
      req.body,
      { new: true }
    );
    if (!pokemon) return res.status(404).json({ message: 'Pokémon não encontrado!' });
    res.json(pokemon);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deletePokemon = async (req, res) => {
  try {
    const pokemon = await Pokemon.findOneAndDelete({ numero: req.params.numero });
    if (!pokemon) return res.status(404).json({ message: 'Pokémon não encontrado!' });
    res.json({ message: 'Pokémon removido com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
