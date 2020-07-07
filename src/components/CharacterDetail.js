import React from 'react';

const CharacterDetail = ({selectedCharacter}) => {
    if (!{selectedCharacter}) return null;

    return (
        <div className="character-detail">
        <h2>{{selectedCharacter}.name}</h2>
        <h4>Species: {{selectedCharacter}.species}</h4>
        </div>
    );
}

export default CharacterDetail;