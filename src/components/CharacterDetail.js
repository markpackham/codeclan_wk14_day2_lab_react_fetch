import React from 'react';


const CharacterDetail = ({selectedCharacter}) => {
    if (!{selectedCharacter}) return null;


    return (
        <h2>{{selectedCharacter}.name}</h2>
    );
}

export default CharacterDetail;