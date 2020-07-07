import React from 'react';

const CharacterDetail = ({selectedCharacter}) => {
    if (!selectedCharacter) return null;

    return (
        <div className="character-detail">
        <h3>{selectedCharacter.name}</h3>
        <h4>Species: {selectedCharacter.species}</h4>
        <h4>House: {selectedCharacter.house}</h4>
        </div>
    );
}

export default CharacterDetail;