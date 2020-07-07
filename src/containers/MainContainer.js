import React, { Component } from 'react';
import CharacterSelect from "../components/CharacterSelect";
import CharacterDetail from '../components/CharacterDetail';
import MainFooter from '../components/MainFooter';

export default class MainContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            characters: [],
            // all actors names are unique so should be keys
            // character names sadly have duplicates
            selectedActorName: ""
        };

        this.handleCharacterSelected = this.handleCharacterSelected.bind(this);
    }

// make sure we can actually access the Harry Potter api
componentDidMount(){
    const url = 'http://hp-api.herokuapp.com/api/characters';
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({characters: data}))
}

handleCharacterSelected(actorName){
    this.setState({selectedActorName: actorName})
}

    render(){

const selectedCharacter = this.state.characters.find(character => 
    // return character.name === this.state.selectedCharacterName;
    character.actor === this.state.selectedActorName)


        return(
            <div className="content">
                <h2>Harry Potter characters</h2>
                    <CharacterSelect 
                    characters={this.state.characters}
                    onCharacterSelected = {this.handleCharacterSelected}
                    />
                    <CharacterDetail 
                    selectedCharacter={selectedCharacter}
                    />
                    <MainFooter />
            </div>
           
        )
    }
}
