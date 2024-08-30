import React from 'react';
import Modal from 'react-modal';
import '../styles/PokemonModal.css'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '100px',
      borderRadius: '20px',
      border: 'none',
      boxShadow: 'rgba(0, 0, 0, 0.4) 0px 30px 90px'
    },
  };


const PokemonModal = ({ pokemon, onClose }) => {
  return (
    <Modal isOpen={!!pokemon} onRequestClose={onClose} contentLabel="Detalhes do Pokémon" style={customStyles}>
      {pokemon && (
        <div className="modal-content">
          <img src={pokemon.imagem} alt={pokemon.nome} className="modal-image" />
          <div className="modal-separator">
          </div>
          <div className="modal-details">
            <h2>{pokemon.nome}</h2>
            <p><strong>ID:</strong> {pokemon.numero}</p>
            <p><strong>Tipo:</strong> {pokemon.tipo}</p>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default PokemonModal;
