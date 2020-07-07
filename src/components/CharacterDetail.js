import React from 'react';

const CharacterDetail = ({selectedCharacter}) => {
    if (!selectedCharacter) return null;

    return (
        <div className="character-detail">
        <h2>{selectedCharacter.name}</h2>
        <h4>Species: {selectedCharacter.species}</h4>
        <h4>Actor: {selectedCharacter.actor}</h4>
        <h4><img src={selectedCharacter.image} height="400px" /></h4>
        </div>
    );
}

export default CharacterDetail;