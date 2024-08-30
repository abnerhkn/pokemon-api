const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

router.get('/pokemon', pokemonController.getAllPokemons);
router.get('/pokemons/:numero', pokemonController.getPokemonByNumero); 
router.post('/pokemons', pokemonController.addPokemon);
router.put('/pokemons/:numero', pokemonController.updatePokemon);
router.delete('/pokemons/:numero', pokemonController.deletePokemon);

module.exports = router;
