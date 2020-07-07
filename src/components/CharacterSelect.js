import React from 'react'

const CharacterSelect = (props) => {

    const optionsList = props.characters.map(character =>{
    return <option value={character.name} key={character.actor}>{character.name}</option>
    });

    function handleChange(event){
        //console.log(event.target.value);
        props.onCharacterSelected(event.target.value);
    }

    return (
        <select id="character-selector" defaultValue="default" onChange={handleChange}>
            <option disabled value="default">
                Please select a character...
            </option>
            {optionsList}
        </select>
    )
}

export default CharacterSelect;