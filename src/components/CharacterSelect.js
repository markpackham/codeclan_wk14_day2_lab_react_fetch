import React from 'react'

const CharacterSelect = (props) => {

    const optionsList = props.characters.map(character =>{
    return <option value={character.actor} key={character.actor}>{character.name}</option>
    })

    function handleChange(event){
        props.onCharacterSelected(event.target.value);
    }

    return (
        <select className="character-select" defaultValue="default" onChange={handleChange}>
            <option disabled value="default">
                Please select a character...
            </option>
            {optionsList}
        </select>
    )
}

export default CharacterSelect;